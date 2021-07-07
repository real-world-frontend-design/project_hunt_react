import React from 'react'
import useStyle from './style';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField } from '@material-ui/core';

const Register = () => {

    const classes = useStyle();

    return (
        <div className={`${classes.center} ${classes.root}`}>
        <form autoComplete="off" noValidate className={classes.form}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Create Your New account
        </Typography>
        <TextField
          name="Name"
          label="Name"
          type="Text"
          placeholder="Enter Your Name"
          variant="outlined"
        />

        <TextField
          name="Email"
          label="Email"
          type="Email"
          placeholder="Enter your Email"
          variant="outlined"
        />

        <TextField
          name="password"
          label="password"
          type="password"
          placeholder="Enter your password"
          variant="outlined"
        />

        {/* <div style={{ color: "blue" }}>
          {" "}
          <FileBase type="file" multipl={false} />{" "}
        </div> */}
        
        <div style={{ position: 'fixed', top: 30, right: 20, border: 0 }}>
        have an account 
        <Link to="/login" style={{ textDecoration: "underline" }}>
          {" "}Login
        </Link>
        </div>

        <Button variant="contained" fullWidth type="submit" color="primary">
          submit
        </Button>
      </form>
    </div>
    );
};

export default Register;