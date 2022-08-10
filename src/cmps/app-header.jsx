import { NavLink } from "react-router-dom"


export const AppHeader = () => {



    return (
        <header id="main-header" className="stock-margin main-header app-header-main">
            {/* <NavLink to='/home'> */}
                <div className="logo">
                    <li>
                        img
                    </li >
                    <li className="font-bold" >
                        Staybnb
                    </li>
                </div>
            {/* </NavLink> */}
        </header >
    )
}