import {AppBar ,Toolbar, Box , makeStyles } from '@material-ui/core';
import clsx from  'clsx';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    header: {
        color: 'white', 
        position: 'static'
    }, 
    lnk: {
        color: 'white', 
        textDecoration:'none', 
        margin:"0 .5rem"
    },
    right:{
        position: 'absolute', 
        top:20,
        right: 40, 
    }

})

const NavBar= ()=> {
     const classes = useStyles()

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                    <Link to ='/' className={classes.lnk}>Crud operations</Link>
                    <Link to ='/' className={classes.lnk}>Home</Link>
                    <Link to ='/about' className={classes.lnk}>About</Link>
                    <Link to ='/contact' className={classes.lnk}>Contact</Link>
                    <Link to ='/getuser' className={classes.lnk}>Get All user</Link>
                    <Link to ='/adduser' className={clsx(classes.lnk , classes.right)}>Add User</Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar