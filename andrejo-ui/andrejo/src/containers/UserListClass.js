import React, {Component} from 'react';
import {connect} from "react-redux";
import Modal from "../components/UI/Modal/Modal";
import SuccessModal from "../components/UI/Modal/SuccessModal/SuccessModal";
import ProviderList from "../components/Lists/ProviderList/ProviderList";
import * as actions from "../store/actions/dispatchActions";
import Pagination from "../components/UI/Pagination/Pagination";


class UserListClass extends Component {
    state = {
        service: {},
        error: {},
        showModal: false,
        pageSize: 5
    };
    clientsURL = 'api/clients/all';

    componentWillMount() {
        this.props.onCreationInit()
    }

    componentDidMount() {
        const pageSize = this.state.pageSize;
        this.props.onFetch(this.clientsURL, pageSize)
    }

    changePage = pageNumber => {
        const url = this.clientsURL;
        const pageSize = this.state.pageSize;
        return this.props.onFetchChangePage(url, pageNumber, pageSize);
    };
    nextPage = () => {
        const pageNumber = this.props.pageNumberRedux + 1;
        if (pageNumber < this.props.totalPagesRedux) {
            this.changePage(pageNumber);
        }
    };
    previousPage = () => {
        const pageNumber = this.props.pageNumberRedux - 1;
        if (pageNumber >= 0) {
            this.changePage(pageNumber);
        }
    };
    lastPage = () => {
        const pageNumber = this.props.totalPagesRedux - 1;
        if (pageNumber > this.props.pageNumberRedux) {
            this.changePage(pageNumber);
        }
    };
    firstPage = () => {
        if (this.props.pageNumberRedux > 0) {
            this.changePage(0);
        }
    };
    setPage = event => {
        const pageNumber = event.target.value - 1;
        if (pageNumber < this.props.totalPagesRedux && pageNumber >= 0) {
            this.changePage(pageNumber);
        }
    };

    modalHandler = () => this.setState({showModal: !this.state.showModal});

    render() {

        let pagination = null;
        if (this.props.totalPagesRedux > 1) {
            pagination =
                <Pagination
                    currentPage={this.props.pageNumberRedux + 1}
                    lastPage={this.props.totalPagesRedux}
                    first={this.firstPage}
                    previous={this.previousPage}
                    next={this.nextPage}
                    last={this.lastPage}
                    setPage={(event) => this.setPage(event)}
                />
        }

        const clientList = <div>
            <ProviderList
                objectList={this.props.serviceListRedux}
                firstName={this.props.serviceListRedux.firstName}
                lastName={this.props.serviceListRedux.lastName}
                nutsAlergy={this.props.serviceListRedux.nutsAlergy}
                milkAlergy={this.props.serviceListRedux.milkAlergy}
                drinkAlcohol={this.props.serviceListRedux.drinkAlcohol}
                details={this.modalHandler}
            />
            {pagination}
        </div>;

        const modalHeader = 'Užklausa įvykdyta sėkmingai';
        const successModal = <Modal show={this.state.showModal} hide={this.modalHandler}>
            <SuccessModal hide={this.modalHandler} modalMessage={modalHeader}/></Modal>;

        return (
            <div>
                <div>
                    {successModal}
                </div>
                <div>
                    {clientList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        serviceListRedux: state.getList.objectList,
        loadingRedux: state.getList.loading,
        errorRedux: state.getList.error,
        totalPagesRedux: state.getList.totalPages,
        totalElementsRedux: state.getList.totalElements,
        pageSizeRedux: state.getList.pageSize,
        pageNumberRedux: state.getList.pageNumber
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetch: (url, pageSize) => dispatch(actions.fetchList(url, pageSize)),
        onFetchChangePage: (url, pageNumber, pageSize) => dispatch(actions.changePageFetchList(url, pageNumber, pageSize)),
        onCreationInit: () => dispatch(actions.creationInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListClass);
