import React, { useState, useEffect } from "react";
import { deleteUserFromList, editUserToList, getUsers } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  makeStyles,
  Button,
  thead,
} from "@material-ui/core";
import { useParams , Link} from "react-router-dom";
const useStyles = makeStyles({
  table: {
    margin: "5rem 0rem",
  },
  thead: {
    // apply of all child data
    "& > *": {
      backgroundColor: "#000000",
      color: "#ffffff",
      fontSize: 20,
    },
  },
});
const Get = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const res = await getUsers();
    console.log(res.data);
    setUsers(res.data);
  };

//   dlt user 
  const deleteUser = async (id) => {
    await deleteUserFromList(id);
    getAllUsers();
  };
 
  return (
    <Table className={classes.table}>
      <thead className={classes.thead}>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Adress</TableCell>
        <TableCell>Actions</TableCell>
      </thead>
      <TableBody>
        {users.map((user) => {
          return (
            <TableRow>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
                <Button to={`/edituser/${user.id}`} component={Link} variant="contained" color="primary" >
                  Edit
                </Button>
                <Button variant="contained" color="primary"to={`/viewuser/${user.id}`} component={Link}>

                  View
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Get;
