import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import Slots from '../Slots/Slots'
import classes from './GetAppointments.css'
import {ToastsContainer, ToastsStore} from 'react-toasts';


const GetAppointments = () => {
    const days = useSelector(state => state.days)
    const types = useSelector(state => state.types)   
    const[openSlots,setOpenSlots]=useState(false)
    const [chosenDay, setChosenDay] = useState('')
    const [chosenType, setChoseType] = useState('')

    const getAppointments = (event) => {
        event.preventDefault();
        setOpenSlots(true)

    }
   
    const handleDayChange=ev=>{
        setChosenDay(days[ev.target.value])
    }

    const handleTypeChange=ev=>{
        setChoseType(types[ev.target.value])
    }

    const openToast=()=>{
        ToastsStore.error("No Options Were Found")
    }

    return (
        <div className={classes.getContainer}>
             <ToastsContainer store={ToastsStore}/>
            <form  className={classes.getForm} onSubmit={getAppointments}>
                <div>
                    <label>Days </label>
                    <select onChange={handleDayChange}>
                    <option></option>
                        {days.map((day,i) => {
                            return <option key={i} value={i}>{day.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Types </label>
                    <select onChange={handleTypeChange}>
                        <option></option>
                        {types.map((type,i) => {
                            return <option key={i} value={i}>{type.name}</option>
                        })}
                    </select>
                </div>
                <button className={classes.getAppButton} type="submit">Get Appointments</button>
            </form>
            { chosenDay&& chosenType && openSlots && <Slots handleReject={openToast} type={chosenType} day={chosenDay}></Slots>}
        </div>
    )
}

export default GetAppointments






