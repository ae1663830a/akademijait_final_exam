import React, {Component} from 'react';
import './Form.css'
import Input from '../../components/Form/Input/Input'
import Spinner from '../../components/UI/Spinner/Spinner'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/dispatchActions';
import {updateObject, checkValidity} from "../../shared/utility";
import {Redirect} from "react-router-dom";
import axios from "axios/index";


class ServiceForm extends Component {

    state = {
        clientForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kliento vardas'
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
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kliento pavardė'
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
            drinkAlcohol: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: true, displayValue: 'Geria alkoholi'},
                        {value: false, displayValue: 'Negeria alkoholio'},

                    ]
                },
                value: 'NO',
                validation: {
                    required: true
                },
                valid: true,
                isTouched: false
            },
            milkAlergy: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: true, displayValue: 'YRA Alergija pienui'},
                        {value: false, displayValue: 'NERA Alergijos pienui'},

                    ]
                },
                value: 'NO',
                validation: {
                    required: true
                },
                valid: true,
                isTouched: false
            },
            nutsAlergy: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: true, displayValue: 'YRA Alergija riešutams'},
                        {value: false, displayValue: 'NĖRA Alergijos riešutams'},

                    ]
                },
                value: 'NO',
                validation: {
                    required: true
                },
                valid: true,
                isTouched: false
            },
        },
        formIsValid: true
    };

    url = '/api/clients/register';
    updateURL = '/api/clients/update';
    clientURL = 'api/clients/';

    componentWillMount() {
        this.props.onClientCreationInit()
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        if (typeof name !== 'undefined') {
            const url = `${this.clientURL}${this.props.match.params.name}`;
            axios.get(url).then(response => {
                console.log(response.data);
                const form = {...this.state.clientForm};
                for (let element in response.data) {
                    form[element].value = response.data[element]
                }
                this.setState({clientForm: form})
            })
                .catch(error => this.setState({error: error}))
        }
    }


    changeInputValue = (event, element) => {
        const updatedFormElement = updateObject(this.state.clientForm[element], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.clientForm[element].validation),
            isTouched: true
        });
        const updatedForm = updateObject(this.state.clientForm, {
            [element]: updatedFormElement
        });

        let validForm = true;
        for (let element in updatedForm) {
            validForm = updatedForm[element].valid && validForm
        }
        this.setState({
            clientForm: updatedForm,
            formIsValid: validForm
        });
    };

    creationHandler = event => {
        event.preventDefault();
        const formData = {};
        for (let formElement in this.state.clientForm) {
            formData[formElement] = this.state.clientForm[formElement].value;
        }
        const name = this.props.match.params.name;

        if (typeof name === 'undefined') {
            this.props.onClientCreation(this.url, formData);
        } else {
            const url = `${this.updateURL}/${name}`;
            this.props.onClientEdition(url, formData)
        }
    };

    render() {
        const formElementsArray = [];
        for (let element in this.state.clientForm) {
            formElementsArray.push({
                id: element,
                config: this.state.clientForm[element]
            })
        }

        let redirect = null;
        if (this.props.clientCreatedRedux) {
            redirect = <Redirect to='/clients'/>
        }
        let form = (
            <form onSubmit={this.creationHandler}>
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
                        changingValue={event => this.changeInputValue(event, formElement.id)}
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
                <h4>KLIENTO REGISTRAVIMAS</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clientCreatedRedux: state.createObject.created,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onClientCreation: (url, formData) => dispatch(actions.objectCreation(url, formData)),
        onClientCreationInit: () => dispatch(actions.creationInit()),
        onClientEdition: (url, formData) => dispatch(actions.objectUpdate(url, formData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);
