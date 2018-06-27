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
        dishForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Dish name'
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
        hasNuts: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: true, displayValue: 'YRA riešutų'},
                    {value: false, displayValue: 'NĖRA riešutų'},
                ]
            },
            value: 'NO',
            validation: {
                required: true
            },
            valid: true,
            isTouched: false
        },
        hasMilk: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: true, displayValue: 'YRA pieno'},
                    {value: false, displayValue: 'NERA pieno'},

                ]
            },
            value: 'NO',
            validation: {
                required: true
            },
            valid: true,
            isTouched: false
        },
        formIsValid: true
    };

    url = '/api/dishes/new';
    updateURL = '/api/dishes/update';
    dishURL = 'api/dishes/';

    componentWillMount() {
        this.props.onDishCreationInit()
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        if (typeof name !== 'undefined') {
            const url = `${this.dishURL}${this.props.match.params.name}`;
            axios.get(url).then(response => {
                console.log(response.data);
                const form = {...this.state.dishForm};
                for (let element in response.data) {
                    form[element].value = response.data[element]
                }
                this.setState({dishForm: form})
            })
                .catch(error => this.setState({error: error}))
        }
    }


    changeInputValue = (event, element) => {
        const updatedFormElement = updateObject(this.state.dishForm[element], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.dishForm[element].validation),
            isTouched: true
        });
        const updatedForm = updateObject(this.state.dishForm, {
            [element]: updatedFormElement
        });

        let validForm = true;
        for (let element in updatedForm) {
            validForm = updatedForm[element].valid && validForm
        }
        this.setState({
            dishForm: updatedForm,
            formIsValid: validForm
        });
    };

    creationHandler = event => {
        event.preventDefault();
        const formData = {};
        for (let formElement in this.state.dishForm) {
            formData[formElement] = this.state.dishForm[formElement].value;
        }
        const name = this.props.match.params.name;

        if (typeof name === 'undefined') {
            this.props.onDishCreation(this.url, formData);
        } else {
            const url = `${this.updateURL}/${name}`;
            this.props.onDishEdition(url, formData)
        }
    };

    render() {
        const formElementsArray = [];
        for (let element in this.state.dishForm) {
            formElementsArray.push({
                id: element,
                config: this.state.dishForm[element]
            })
        }

        let redirect = null;
        if (this.props.dishCreatedRedux) {
            redirect = <Redirect to='/dishs'/>
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
                <h4>PATIEKALO SUKURIMAS</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dishCreatedRedux: state.createObject.created,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onDishCreation: (url, formData) => dispatch(actions.objectCreation(url, formData)),
        onDishCreationInit: () => dispatch(actions.creationInit()),
        onDishEdition: (url, formData) => dispatch(actions.objectUpdate(url, formData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceForm);
