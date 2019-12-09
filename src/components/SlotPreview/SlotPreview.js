import React from 'react'
import classes from './SlotPreview.css'

const SlotPreview=(props)=>{

   return (
    <div className={classes.Slot} onClick={()=>props.clickHandler(props.start,props.end)} >{props.start} - {props.end}</div>
   )
}

export default SlotPreview