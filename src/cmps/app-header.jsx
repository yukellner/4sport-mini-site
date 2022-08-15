import { useEffect } from "react"
import { NavLink } from "react-router-dom"


export const AppHeader = ({ eventObj }) => {

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
        </header >
    )
}