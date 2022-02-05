import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { addUserToList, deleteUserFromList, getUsers } from "../services/api";
import {
 
  makeStyles,
  Button,
  FormGroup,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
const useStyles = makeStyles({
  formmain: {
    margin: "3rem 6rem",
    width: "80%",
  },
  inputControl: {
    fontSize: 20,
    margin: "1rem 0rem",
  },
});
const Add = () => {
    const navigate = useNavigate()

  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  console.log("myuser", user);
  //  const {name,username , phone, address} = user

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
 

  const addUser = async () => {
    
    await addUserToList(user);
    navigate('/getuser')
  };

  return (
    <FormGroup className={classes.formmain}>
      <h3>Add User</h3>
      <FormControl className={classes.inputControl}>
        <InputLabel>Name</InputLabel>
        <Input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
        ></Input>
      </FormControl>
      <FormControl className={classes.inputControl}>
        <InputLabel>Phone</InputLabel>
        <Input
          type="number"
          name="phone"
          onChange={(e) => handleChange(e)}
        ></Input>
      </FormControl>
      <FormControl className={classes.inputControl}>
        <InputLabel>Email</InputLabel>
        <Input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
        ></Input>
      </FormControl>
      <FormControl className={classes.inputControl}>
        <InputLabel>Adress</InputLabel>
        <Input
          type="text"
          name="address"
          onChange={(e) => handleChange(e)}
        ></Input>
      </FormControl>
      <Button variant="contained" color='primary'onClick={addUser}>Add User</Button>
    </FormGroup>
  );
};

export default Add;
