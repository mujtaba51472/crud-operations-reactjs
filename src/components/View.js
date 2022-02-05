import React, { useState, useEffect } from "react";
import { deleteUserFromList, getUsers } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  Button,
  thead,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
const useStyles = makeStyles({
    table: {
        margin: "5rem 0rem"
    }, 
    thead: {
        // apply of all child data 
        "& > *": {
          backgroundColor: "#000000",
          color: "#ffffff",
          fontSize: 20,
        },
      },
})
const View = () => {
    const {id} = useParams()
   const [user , setUser] = useState({
       name: '', 
       phone: "",
       email: "",
       address: ""
    

   });
   const {name, phone , email, address} = user
   useEffect(()=> {
       viewUser()

   }, [])
   const viewUser= async ()=> {
       const res = await getUsers(id)
       console.log('viewuser')
       setUser(res.data)

   }
  
  return (
    <Table >
      <thead >
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>User Name</TableCell>
        <TableCell>Adress</TableCell>
      </thead>
      <TableBody>
            <TableRow>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{address}</TableCell>
            
            </TableRow>
      </TableBody>
    </Table>
  );
};

export default View;
