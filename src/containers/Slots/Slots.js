import React from 'react'
import {useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'
import SlotPreview from '../../components/SlotPreview/SlotPreview'
import classes from './Slots.css'
import moment from 'moment'

const Slots = (props) => {
    const dispatch=useDispatch();
    const setBookedApp=(startTime, endTime)=>{
        dispatch(actions.setBookedApp(startTime,endTime,props.day,props.type))     
    }
     
    let startTime = moment(props.day.from, "HH:mm");    
    const endTime = moment(props.day.to, "HH:mm");
    if (endTime.isBefore(startTime)) {
        endTime.add(1, 'day');
    }
    const isInBreak=(slotTime, breakTimes)=> {
        return breakTimes.some((br) => {
          return slotTime >= moment(br.from, "HH:mm") && slotTime < moment(br.to, "HH:mm");
      });
    }
    
    let times = [];
    while (startTime < endTime)
    {
      if (!isInBreak(startTime, props.day.breakAndBookedTimes)) {
         times.push(startTime.format("HH:mm"));
      }
      startTime = startTime.add(props.type.minutes, 'minutes');
    }
    
    if(times.length<2) {
        props.handleReject()
    }
        let newTimeStops = times.map((time, i) => {
            const res=moment(times[i+1],"HH:mm").isSame(moment(times[i],"HH:mm").add(props.type.minutes,'minutes'))
            return i!==times.length-1 && res ? <SlotPreview key={i} clickHandler={setBookedApp} start={times[i]} end={times[i + 1]}/>:null
        })
    

    return (
        <div className={classes.slotsContainer}>
            {newTimeStops}
        </div>
    )
}

export default Slots