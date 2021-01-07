import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    
    const { dispatch } = useContext(AuthContext);

    const [ { name }, handleInputChange ] = useForm({name:''});

    const handleLogin = (e) => {
        e.preventDefault();
        if(name.trim() !== ''){
            const lastPath = localStorage.getItem('lastPath') || '/';
            dispatch({
                type: types.LOGIN,
                payload:{
                    name
                }
            });
            history.replace(lastPath);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <form onSubmit={ handleLogin }>
                <input 
                    type="text"
                    name="name"
                    value={ name }
                    autoComplete="off"
                    onChange={ handleInputChange }
                    placeholder="Enter your name"
                    className="form-control"
                />

                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
