import { HeaderTitle } from "../../components/HeaderTitle"
import { DetailsContent } from "./details-cmp/DetailsContent"
import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"
// import { DetailsMainHeader } from "./details-cmp/DetailsMainHeader"


export const Details = ({ eventObj }) => {





    return (
        <div className="details-container">
            <HeaderTitle titleText={'מידע'} />
            <div className="content-container">
                <DetailsMainHeader eventObj={eventObj} />
                <DetailsContent eventObj={eventObj} />
            </div>


        </div >
    )
}