import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {
    const [ formValues, handleInputChange ] = useForm({
        name: 'Manu',
        email: 'manuel@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ){
            console.log('formulario correcto');
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            console.log('name is required');
            return false;
        } else if ( !validator.isEmail( email ) ) {
            console.log('invalid email');
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            console.log('password should be at least 6 characters and match');
            return false;
        }

        return true;
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
                <div className="auth__alert-error">
                    hola mundo
                </div>


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered ?
                </Link>
            </form>
        </div>
    )
}
