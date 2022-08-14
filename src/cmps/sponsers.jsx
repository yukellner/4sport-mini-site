import { NavLink } from "react-router-dom"
import { SponserCard } from "./sponser-card"


export const Sponsers = () => {

    var sponsers = [
        {
            name: 'Oakley',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Oakley_logo.svg',
            link: 'www.oakley.com'
        },
        {
            name: 'nike',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/640px-Logo_NIKE.svg.png',
            link: 'https://www.nike.com'
        }
    ]


    return (
        <div className="sponsers-container">
            {sponsers.map(sponser =>
                <SponserCard sponser={sponser} key={sponser.name} />
            )}
        </div >
    )
}