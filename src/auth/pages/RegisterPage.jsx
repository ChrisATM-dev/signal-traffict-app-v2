import '../styles/auth.css';
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

import { useForm } from '../../hook/useForm';
import { Link } from 'react-router-dom';

import { fetchRegister } from '../fetch/fetchs';

export const RegisterPage = () => {
  const { login } = useContext(AuthContext);
  const {email, password, confirm, onInputChange, data, onShowPassword, onShowConfirm, showPassword, showConfirm} = useForm({ email: '', password: '', confirm: '' });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirm) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const result = fetchRegister(data);
    if (result.error_msg) {
      alert(result.error_msg);
    }else{
      login(email, result.token);
    }
  }

  return (
    <div className='auth-container'>
      <div className='form-container'>
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit}>
            <div className='container-form-group'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="text" name='email' value={email} onChange={onInputChange} required/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={showPassword ? 'text': 'password'} name='password' value={password} onChange={onInputChange} required/>
                    <button onClick={onShowPassword}>O_O</button>
                </div>
                <div className='form-group'>
                    <label>Confirm</label>
                    <input type={showConfirm ? 'text': 'password'} name='confirm' value={confirm} onChange={onInputChange} required/>
                    <button onClick={onShowConfirm}>O_O</button>
                </div>
            </div>
          <div className='button-group'>
            <button className='button-login'>Registrarse</button>
            <Link to='/login'>Ya tengo cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  )
}