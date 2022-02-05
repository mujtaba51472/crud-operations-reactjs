import {
  makeStyles,
  Button,
  FormGroup,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useState , useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editUserToList, getUsers } from "../services/api";

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

const initialValues = {
    name: "",
    address: "",
    email: "",
    phone: "",
  };
const Edit = () => {
    const [user, setUser] = useState(initialValues)
    const {name,address, email, phone}= user;
    const navigate= useNavigate()
  const classes = useStyles();
  const { id } = useParams();
  useEffect (()=> {
      loadUserDetail()
  })
  const loadUserDetail = async ()=> {
       const res =  await getUsers(id);
      setUser(res.data)
  }
  const editUser = async () => {
    await editUserToList(id, user);
    navigate('/getuser')
  };
  const handleChange =(e)=>{
      setUser({
           ...user, 
           [e.target.name] : e.target.value
      })
  }

  return (
    <FormGroup className={classes.formmain}>
      <FormControl className={classes.inputControl}>
        <InputLabel>Name</InputLabel>
        <Input type="text"  name='name' onChange={(e)=>handleChange(e)} value={name}></Input>
      </FormControl>
      <FormControl className={classes.inputControl}>
        <InputLabel>Phone</InputLabel>
        <Input type='text' name='phone' onChange={(e)=>handleChange(e)} value= {phone}></Input>
      </FormControl>
      <FormControl className={classes.inputControl}>
        <InputLabel>Address</InputLabel>
        <Input type="text" name='text' onChange={(e)=>handleChange(e)} value ={address}></Input>
      </FormControl>
      <FormControl className={classes.inputControl}>
        <InputLabel>Email</InputLabel>
        <Input type="email" name='email' onChange={(e)=>handleChange(e)} value={email}></Input>
      </FormControl>
      <Button variant="contained" color="primary" onClick={() => editUser()}>
        Edit User
      </Button>
    </FormGroup>
  );
};

export default Edit;
