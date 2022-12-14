import { Button } from "@mui/material"
import { useEffect, useState } from "react"


export const HeatBox = ({ heat, eventObj }) => {

    const [raceType, setRaceType] = useState('race')




    useEffect(() => {

        setRaceType(eventObj.eventType)



        // printJSON()
    }, [])


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

                        {raceType == 'run' && <span className="material-icons icon">
                            directions_run
                        </span>}

                        {raceType == 'swim' && <span className="material-icons icon">
                            pool
                        </span>}
                        {raceType == 'bike' && <span className="material-icons icon">

                            directions_bike

                        </span>}
                        {raceType == 'tri' &&
                            <span className="material-icons icon">
                                directions_run
                            </span>}
                    </div>







                </div>
            </div>
        </div>
    )
}