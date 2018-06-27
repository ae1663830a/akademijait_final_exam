import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import Spinner from "../components/UI/Spinner/Spinner";
import Modal from "../components/UI/Modal/Modal";
import ProviderList from "../components/Lists/ProviderList/ProviderList";
import * as actions from "../store/actions/dispatchActions";
import ProviderDetailsModal from "../components/UI/Modal/Details/ProviderDetailsModal";
import ServiceDetails from "../components/Lists/ServiceList/ServiceDetails";
import Pagination from "../components/UI/Pagination/Pagination";


class ServiceDetailsClass extends Component {
    state = {
        service: {},
        error: {},
        showModal: false,
        providerId: null,
        pageSize: 5
    };
    serviceURL = 'api/services/';

    componentDidMount() {
        const pageSize = this.state.pageSize;
        const url = `${this.serviceURL}${this.props.match.params.name}`;
        axios.get(url).then(response => this.setState({service: response.data}))
            .then(() => this.props.onFetch(`${url}/all`, pageSize))
            .catch(error => this.setState({error: error.response.data.message}))
    }

    changePage = pageNumber => {
        const url = `${this.serviceURL}${this.props.match.params.name}/all`;
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

    modalHandler = () => this.setState({
        showModal: !this.state.showModal
    });

    providerDetails = index => this.setState({
        showModal: !this.state.showModal, providerId: index
    });

    editServiceHandler = () => this.props.history.push(`/service/register/${this.state.service.name}`);

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

        let serviceCard = <Spinner/>;
        if (this.state.service.name != null && this.props.serviceListRedux != null) {
            console.log(this.props.serviceListRedux);
            serviceCard = <ServiceDetails
                price={this.state.service.price}
                picture={this.state.service.picture}
                name={this.state.service.name}
                description={this.state.service.description}
                category={this.state.service.category}
                edit={this.editServiceHandler}
            />
        }
        const providerList = <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <p>Teikėjų sąrašas</p>
            <ProviderList
                objectList={this.props.serviceListRedux}
                name={this.props.serviceListRedux.name}
                city={this.props.serviceListRedux.city}
                companyCode={this.props.serviceListRedux.companyCode}
                providerType={this.props.serviceListRedux.providerType}
                rating={this.props.serviceListRedux.rating}
                details={this.providerDetails}
            />
            {pagination}
        </div>;

        let providerModal = null;
        if (this.state.showModal) {
            const modalHeader = 'Teikėjo detalės';
            const index = this.state.providerId;
            const provider = this.props.serviceListRedux[index];
            providerModal = <Modal show={this.state.showModal} hide={this.modalHandler}>
                <ProviderDetailsModal
                    hide={this.modalHandler}
                    modalMessage={modalHeader}
                    name={provider.name}
                    city={provider.city}
                    providerType={provider.providerType}
                    companyCode={provider.companyCode}
                    rating={provider.rating}
                    header={modalHeader}
                />
            </Modal>;
        }


        return (
            <div>
                <div>
                    {serviceCard}
                    {providerModal}
                </div>
                <div>
                    {providerList}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetailsClass);
