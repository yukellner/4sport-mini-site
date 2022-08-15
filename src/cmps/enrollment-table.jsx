import { Button } from "@mui/material"
import { map } from "jquery"
import { NavLink } from "react-router-dom"
import { Sponsers } from "./sponsers"


export const EnrollmentTable = ({ eventObj }) => {

    console.log('heats', eventObj.heats)




    return (
        <div className="enrollment-table vh-80">
            <table>
                <thead>


                    <tr>
                        <th>הרשמה מאוחרת</th>
                        <th>הרשמה</th>
                        <th>הרשמה מוקדמת</th>
                        <th rowSpan="2">מקצה</th>
                    </tr>

                    <tr>
                        <th>{eventObj.priceDates[2]}</th>
                        <th>{eventObj.priceDates[1]}</th>
                        <th>{eventObj.priceDates[0]}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {eventObj.heats.map(heat =>
                        <tr key={heat.Rolls}>
                            <td>{heat.prices[2]}₪</td>
                            <td>{heat.prices[1]}₪</td>
                            <td>{heat.prices[0]}₪</td>
                            <td>{heat.description}</td>
                        </tr>

                    )}
                </tbody>

            </table>

        </div>



    )
}