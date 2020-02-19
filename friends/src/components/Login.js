import React, {useState} from 'react';
import { Spinner } from 'reactstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components';

const Loginpg= styled.div `
background: #B32451;
width: 70%;
border: 15px solid black;
height: 50vh;
margin: 0 auto;
text-align: center;
`

const Login = props => {
  
  const [login, setLogin] = useState({username: 'Lambda School', password: 'i<3Lambd4'});
  const [loading, setLoading] = useState(false);
  
    const handleChange = e => {
      setLogin({...login, [e.target.name]: e.target.vlaue});
    };
  
    const onSubmit= e =>{
      e.preventDefault();
      setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      }, 3000);
      axiosWithAuth()
      .post('/login', login)
      .then(res =>{
        localStorage.setItem('token', res.data.payload);
        setLogin(login);
        props.history.push('/friends' || '/edit-friends');
      })
      .catch(err =>{
        localStorage.removeItem('token');
        console.log('The login failed', err);
      }, []);
    };
  
  
    return (
      <Loginpg>
        <h1>Auth Friends</h1>
      <section className="login">
        {!loading ? (
          <form onSubmit={onSubmit}>
            <input type="text" name="username" placeholder="Username" value={login.username} onChange={handleChange} />
            <br/>

            <input type="password" name="password" placeholder="Password" value={login.password} onChange={handleChange} />
            <br/>
            <button>Login</button>
          </form>
        ) : (
          <div>
            <Spinner size="sm" color="success" />
          </div>
          )}
      </section>
      </Loginpg>
    );
  };
  
  export default Login;
  