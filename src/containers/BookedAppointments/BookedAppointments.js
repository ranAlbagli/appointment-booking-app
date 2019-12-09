import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import weatherService from '../../services/weatherService'
import moment from 'moment'
import classes from './BookedAppointments.css'

const BookedAppointments = () => {
    const days = useSelector(state => state.days)
    const [weatherDetails, setWeatherDetails] = useState({})
    const [icon, setIcon] = useState(null)
    const [date, setDate] = useState(null)
    const [temp, setTemp] = useState(null)
    const [desc, setdesc] = useState(null)

    useEffect(() => {
        (async () => {
            const weatherDetails = await weatherService.getCurrentWether()
            setWeatherDetails(weatherDetails)
            setTemp(weatherDetails.Temperature.Metric.Value)
            const icon = `https://developer.accuweather.com/sites/default/files/${weatherDetails.WeatherIcon < 10 ? "0" + weatherDetails.WeatherIcon : weatherDetails.WeatherIcon}-s.png`;
            setIcon(icon)
            const date = weatherDetails.EpochTime
            const todayDate = moment.unix(date).format('dddd, MMMM Do, YYYY')
            setDate(todayDate)
            setdesc(weatherDetails.WeatherText)
        })();
    }, [])


    return (
        <React.Fragment>
            <div className={classes.Outer}>
                <div className={classes.Inner}>
                    <h3>Petah Tiqwa, Israel</h3>
                    <img src={icon} alt="" />
                    <p>{date} </p>
                    <p>{desc} </p>
                    <p>{temp} ℃ </p>
                </div>
            </div>
            <div className={classes.Booked}>
                {days.map((i, x) => {
                    return (
                        <div key={x}>
                            <h2>{i.name}</h2>
                            {i.breakAndBookedTimes.map((y, z) => {
                                return <p key={z}>{y.from} - {y.to} ({y.desc})</p>
                            })}
                        </div>
                    )
                })
                }
            </div>
        </React.Fragment>
    )
}

export default BookedAppointments


 