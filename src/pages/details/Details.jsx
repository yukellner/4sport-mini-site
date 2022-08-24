import { HeaderTitle } from "../../components/HeaderTitle"
import { DetailsMainHeader } from "./DetailsMainHeader"


export const Details = ({eventObj}) => {

    



    return (
        <div className="main-contact">
            <HeaderTitle titleText={'מידע'}/>
            <DetailsMainHeader eventObj={eventObj} />
           

        </div >
    )
}