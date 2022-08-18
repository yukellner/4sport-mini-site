import { NavLink } from "react-router-dom"


export const HeatBox = ({ heat }) => {




    return (
        <div className="heat-box">
            <div>
            <span class="material-icons icon">
                directions_run
            </span>
            </div>
            <div className="heat-des">
                {heat.description}
            </div>

        </div >
    )
}