import {useEffect} from "react"
import {SponserCard} from "./SponserCard"


export const Sponsors = ({eventObj}) => {

    useEffect(() => {
    }, [])

    return (
        <div>
            <h1 className="header-large">נותני החסות</h1>
            <div className="sponsers-container">
                {eventObj.sponsors.map(sponser =>
                    <SponserCard key={sponser.description} sponser={sponser}/>
                )}
            </div>
        </div>
    )
}