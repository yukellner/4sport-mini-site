import { useEffect } from "react"
import { SponserCard } from "./sponser-card"


export const Sponsers = ({eventObj}) => {

    useEffect(() => {
      }, [])

    return (
        <div className="sponsers-container">
            {eventObj.sponsors.map(sponser =>
                <SponserCard key={sponser.description} sponser={sponser} />
            )}
        </div >
    )
}