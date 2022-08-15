import { NavLink } from "react-router-dom"


export const SponserCard = ({ sponser }) => {




    return (
        <div className="sponser-card">
            <a href={sponser.link}>
                <img src={sponser.logoUrl} />
            </a>
            {sponser.description}
        </div >
    )
}