import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.css'

const Header=()=>{
    return(
        <div className={classes.Header}>
        <ul className={classes.cleanList}>
            <li ><NavLink  exact activeClassName={classes.border} to='/'>Availability</NavLink></li>
            <li><NavLink   activeClassName={classes.border} to='/Types'>Types</NavLink></li>
            <li><NavLink  activeClassName={classes.border} to='/GetAppointments'>Get Appointments</NavLink></li>
            <li><NavLink   activeClassName={classes.border} to='/BookedAppointments'>Booked Appointments</NavLink></li>
       </ul>        
        </div>
    )
}

export default Header


 
