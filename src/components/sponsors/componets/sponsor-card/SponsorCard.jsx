export const SponsorCard = ({sponser}) => {


    return (
        <div className="sponser-card">
            <a href={sponser.link}>
                <img src={sponser.logoUrl}/>
            </a>
            {sponser.description}
        </div>
    )
}