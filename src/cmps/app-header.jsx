import { NavLink } from "react-router-dom"


export const AppHeader = () => {




    return (
        <header id="main-header" className="main-header">
                <NavLink to='/home'>
                    <div className="logo">
                        <li>
                            <img src={require('../imgs/logo.png')} />
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