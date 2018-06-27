import React, {Component} from 'react';
import Pagination from "../components/UI/Pagination/Pagination";
import * as actions from "../store/actions/dispatchActions";
import {connect} from "react-redux";
import ServiceList from '../components/Lists/ServiceList/ServiceList';

class ServiceListClass extends Component {

    state = {
        pageSize: 8
    };
    getUrl = 'api/orders/all';
    serviceDetailsURL = 'order/details/';

    componentWillMount() {
        this.props.onCreationInit();
        const url = this.getUrl;
        const pageSize = this.state.pageSize;
        this.props.onFetch(url, pageSize);
    }

    changePage = pageNumber => {
        const url = this.getUrl;
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

    showObjectDetails = index => this.props.history.push(`${this.serviceDetailsURL}${this.props.serviceListRedux[index].name}`);


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
        const serviceList = (
            <div style={{width: '80%', margin: 'auto'}}>
                <ServiceList
                    serviceList={this.props.serviceListRedux}
                    name={this.props.serviceListRedux.name}
                    price={this.props.serviceListRedux.price}
                    category={this.props.serviceListRedux.category}
                    description={this.props.serviceListRedux.description}
                    clicked={this.showObjectDetails}
                />
                {pagination}
            </div>
        );


        return (

            <div className="container">
                {serviceList}
            </div>
        )
    }
}

// Redux states
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

// Redux actions
const mapDispatchToProps = dispatch => {
    return {
        onFetch: (url, pageSize) => dispatch(actions.fetchList(url, pageSize)),
        onFetchChangePage: (url, pageNumber, pageSize) => dispatch(actions.changePageFetchList(url, pageNumber, pageSize)),
        onCreationInit: () => dispatch(actions.creationInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClass);
