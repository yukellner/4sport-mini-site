import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { SponserCard } from "./sponser-card"


export const Sponsers = ({eventObj}) => {

    useEffect(() => {
      }, [])

    
    


    return (
        <div className="sponsers-container">
            {eventObj.sponsors.map(sponser =>
                <SponserCard sponser={sponser} />
            )}
        </div >
    )
}