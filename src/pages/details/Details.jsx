import { DetailsMainHeader } from "./DetailsMainHeader"


export const Details = ({eventObj}) => {

    



    return (
        <div className="main-contact">
            {/* <HeaderTitle/> */}
            <h1>מידע</h1>
            <DetailsMainHeader eventObj={eventObj} />
           

        </div >
    )
}