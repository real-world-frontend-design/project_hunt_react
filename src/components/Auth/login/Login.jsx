import React, { useState } from 'react';
import useStyle from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField } from '@material-ui/core';
import { login } from '../../../actions/auth';

const initialState = {"email": '', "password": ''};

const Login = () => {

    const [form, setForm] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyle();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(form, history));
    }

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className={`${classes.center} ${classes.root}`}>
        <form autoComplete="off" onSubmit={handleSubmit} noValidate className={classes.form}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Login to continue
        </Typography>
        
        <TextField
          name="email"
          label="email"
          type="Email"
          placeholder="Enter your Email"
          variant="outlined"
          autoFocus
          onChange={handleChange}
        />

        <TextField
          name="password"
          label="password"
          type="password"
          placeholder="Enter your password"
          variant="outlined"
          onChange={handleChange}
        />

        <div style={{ position: 'fixed', top: 30, right: 20, border: 0 }}>
        don't have an account 
        <Link to="/register" style={{ textDecoration: "underline" }}>
          {" "}Register
        </Link>
        </div>

        <Button variant="contained" fullWidth type="submit" color="primary">
          submit
        </Button>
      </form>
    </div>
    );
}

export default Login;