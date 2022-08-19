import {Button} from "@mui/material"


export const HeatBox = ({heat, eventObj}) => {


    return (
        <div className="main-heat-container">

            <div className="heat-container">
                <div className="heat-des">
                    <div>
                        <h3>{heat.description}</h3>
                        <h3>מגיל {heat.minAge} עד גיל {heat.maxAge}</h3>
                        <Button className='sign-btn' href={eventObj.participantsListUrl} variant="contained">לחץ
                            להרשמה</Button>

                    </div>
                </div>
                <div className="heat-box">
                    <div>
                        <span className="material-icons icon">
                            directions_run
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}