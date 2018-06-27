import React, {Component} from 'react';
import './Form.css';
import Input from '../../components/Form/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/dispatchActions';
import {checkValidity, updateObject} from "../../shared/utility";
import {Redirect} from "react-router-dom";
import axios from "axios/index";


class MenuFormClass extends Component {

    state = {
        menuForm: {
            id: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Id'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 40
                },
                valid: false,
                isTouched: false
            }
        },
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Pavadinimas'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3,
                maxLength: 40
            },
            valid: false,
            isTouched: false
        },
        formIsValid: true,
        error: null
    };

    url = '/api/menus/new';
    menuURL = 'api/menus/';


    componentWillMount() {
        this.props.onCreationInit()
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        if (typeof name !== 'undefined') {
            const url = `${this.menuURL}${this.props.match.params.name}`;
            axios.get(url).then(response => {
                const form = {...this.state.menuForm};
                for (let element in response.data) {
                    form[element].value = response.data[element]
                }
                this.setState({menuForm: form})
            })
                .catch(error => this.setState({error: error}))
        }
    }

    changeInputValue = (event, element) => {
        const updatedFormElement = updateObject(this.state.menuForm[element], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.menuForm[element].validation),
            isTouched: true
        });
        const updatedForm = updateObject(this.state.menuForm, {
            [element]: updatedFormElement
        });

        let validForm = true;
        for (let element in updatedForm) {
            validForm = updatedForm[element].valid && validForm
        }
        this.setState({
            menuForm: updatedForm,
            formIsValid: validForm
        });
    };

    creationHandler = event => {
        event.preventDefault();
        const formData = {};
        for (let formElement in this.state.menuForm) {
            formData[formElement] = this.state.menuForm[formElement].value;
        }
        this.props.onMenuCreation(this.url, formData);
    };

    render() {
        const formElementsArray = [];
        for (let element in this.state.menuForm) {
            formElementsArray.push({
                id: element,
                config: this.state.menuForm[element]
            })
        }

        let redirect = null;
        if (this.props.menuCreatedRedux) {
            redirect = <Redirect to='/'/>
        }

        let form = (<form onSubmit={this.creationHandler}>
            {formElementsArray.map(formElement => (
                <Input
                    // label={(formElement.id)}
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    isTouched={formElement.config.isTouched}
                    changingValue={(event) => this.changeInputValue(event, formElement.id)}
                />
            ))}
            <button disabled={!this.state.formIsValid} className='btn btn-success'>CREATE</button>
            <button className='btn btn-warning'>CANCEL</button>
        </form>);
        if (this.props.loadingRedux) {
            form = <Spinner/>
        }

        return (
            <div className='creationForm'>
                {redirect}
                <h4>MENU SUKURIMAS</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuCreatedRedux: state.createObject.created,
        menuRedux: state.getObject.objectById
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onMenuCreation: (url, formData) => dispatch(actions.objectCreation(url, formData)),
        onCreationInit: () => dispatch(actions.creationInit())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuFormClass);
