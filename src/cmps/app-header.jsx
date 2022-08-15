import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import CountdownTimer from "./countdown/CountdownTimer";


export const AppHeader = ({ eventObj }) => {

    // var NOW_IN_MS = new Date().getTime();
    var date = new Date("11/21/2022 16:00:00"); // some mock date
    var DATE_IN_MS = date.getTime();
    useEffect(() => {
        updateVaribles()
    }, [])


    const updateVaribles = () => {
        document.documentElement.style.setProperty('--backgroundColor', eventObj.backgroundColor);
        document.documentElement.style.setProperty('--fontColor', eventObj.foregroundColor);
        document.documentElement.style.setProperty('--secondaryColor', eventObj.secondaryColor);
        document.documentElement.style.setProperty(`--coverImage`, `url(${eventObj.coverImages[0]})`);
    }




    return (
        <header id="main-header" className="main-header">
            <NavLink to='/'>
                <div className="logo">
                    <li>
                        <img src={eventObj.logo} />
                    </li >
                </div>
            </NavLink>
            <dir className="navbar">
                <ul>
                    <li><NavLink to='/contact'>צור קשר</NavLink></li>
                    <li><NavLink to='/maps'>מפות ומסלולים</NavLink></li>
                    <li><NavLink to='/details'>מידע</NavLink></li>
                    <li><NavLink to={`/enrollment/${eventObj.description}`}>הרשמה</NavLink></li>
                    <li><NavLink to='/'>בית</NavLink></li>
                </ul>
            </dir>
            <div className='countdown-container'>
                <CountdownTimer targetDate={DATE_IN_MS} />
            </div>
        </header >
    )
}