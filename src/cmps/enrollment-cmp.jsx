import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import { HeatBox } from "./heat-box"


export const EnrollmentCmp = ({ eventObj }) => {
    return (
        <div className="main-enrollment vh-80">
            <h1>ההרשמה בעיצומה</h1>
            <Button variant="contained">הרשמה</Button>
            
        </div>
    )
}