import React from 'react'

const AvailabilityDay = (props) => {
    return (<div>
        <label>{props.day}</label>
        from  <input type="time"/>
        to <input type="time"/>
    </div>
    )
}

export default AvailabilityDay