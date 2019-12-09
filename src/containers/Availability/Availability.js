import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import * as actions from '../../store/actions/actions'
import classes from './Availability.css'
// import {ToastsContainer, ToastsStore} from 'react-toasts';
import moment from 'moment'

const Availability = () => {

    const BREAK= '12:00'
    const dispatch  = useDispatch()
    const [breakTime, setBreakTime] = useState('')
    const [days,setDays] =useState([

        {
            name: 'Sunday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        },
        {
            name: 'Monday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        },
        {
            name: 'Tuesday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        },
        {
            name:'Wednesday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        },
        {
            name: 'Thursday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        },
        {
            name: 'Friday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        },
        {
            name: 'Saturday',
            from:undefined,
            to:undefined,
            breakAndBookedTimes:[],
        }
    ])

    
     const setDaysHandler=(event)=>{
        event.preventDefault();
        const daysToDispatch = days.filter(day => day.from && day.to)
        daysToDispatch.forEach(day=>{
            day.breakAndBookedTimes.push({
                from:BREAK,
                to:moment(BREAK,"HH:mm").add(breakTime,'minutes').format("HH:mm"),
                desc:'break'
            })
        })
        dispatch(actions.setDays(daysToDispatch))
        dispatch(actions.setBreakTime(breakTime))
        // ToastsStore.success("Data saved successfully!")

     }

    const onChangeInputFrom = (e,index) => {
        const updateDays= [...days];
        updateDays[index].from = e.target.value;
        setDays(updateDays);
    } 

    const onChangeInputTo = (e ,index) => {
        const updateDays= [...days];
        updateDays[index].to = e.target.value;
        setDays(updateDays);
    }  
   
    const displayDays = days.map((day,index) => {
        return (
            <div className={classes.dayDisplay} key={index}>
                <label>{day.name}</label>
                <div className={classes.timeInput}>
                <input  type="time"  value={day.from} onChange={(e) => onChangeInputFrom(e,index)} style={{marginRight:'5px'}} />
                <input  type="time" value={day.to} onChange={(e) => onChangeInputTo(e,index)} />
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
        {/* <ToastsContainer store={ToastsStore}/> */}
        <form className={classes.formContainer} onSubmit={setDaysHandler}>
            <div className={classes.fromTo}>
               <span>From</span>
               <span>To</span>
            </div>
            {displayDays}
            <div className={classes.breakTime} >
                <label>Break  In Minutes </label>
                <input style={{width:'50px'}} type="number" min="0" required value={breakTime} onChange={(e) => setBreakTime(e.target.value)} />
            </div>
            <button className={classes.saveButton} type="submit">Save</button>
        </form>
        </React.Fragment>
       )
}
// "react-toasts": "^3.0.6",

export default Availability