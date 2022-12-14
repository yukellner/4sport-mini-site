import {useEffect} from "react"
import {SponsorCard} from "./componets/sponsor-card/SponsorCard"


export const Sponsors = ({eventObj}) => {

    useEffect(() => {
    }, [])

    return (
        <div>
            <h1 className="header-large">נותני החסות</h1>
            <div className="sponsers-container">
                {eventObj.sponsors.map(sponser =>
                    <SponsorCard key={sponser.description} sponser={sponser}/>
                )}
            </div>
        </div>
    )
}