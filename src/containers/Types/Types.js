import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'
import classes from './Types.css'

const Types = () => {

    const dispatch = useDispatch();
    const types = useSelector(state => state.types)

    const [name, setName] = useState('')
    const [minutes, setMinutes] = useState('')

    const dispatchTypes = (e) => {
        e.preventDefault()
        dispatch(actions.setTypes(name, minutes))
        setName('')
        setMinutes('')
    }

    return (
        <div className={classes.TypesContainer}>
            <div className={classes.Formtypes}>
                <form onSubmit={dispatchTypes}>
                    <div className={classes.row}>
                        <label>Name</label>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={classes.row}>
                        <label>Duration In Minutes</label>
                        <input type="number" required min="1" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                    </div>
                    <button className={classes.AddButton}>ADD</button>
                </form>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ margin: '0' }}>Current types</h4>
                {types.map((type, i) => {
                    return <span key={i}>{type.name} ({type.minutes} minutes)</span>
                })}
            </div>
        </div>
    )
}

export default Types