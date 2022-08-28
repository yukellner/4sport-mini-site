import {Button} from "@mui/material"


export const EnrollmentCmp = ({eventObj}) => {
    return (
        <div className="main-enrollment vh-80">
            <h1>{eventObj.description}</h1>
            <Button className="button-border" variant="contained">הרשמה</Button>

        </div>
    )
}