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
            <NavLink to='/home'>
                <div className="logo">
                    <li>
                        <img src={eventObj.logo} />
                    </li >
                </div>
            </NavLink>
            <dir className="navbar">
                <ul>
                    <li>צרו קשר</li>
                    <li>מפות ומסלולים</li>
                    <li>מידע</li>
                    <li>הרשמה</li>
                    <li>בית</li>
                </ul>
            </dir>
        </header >
    )
}