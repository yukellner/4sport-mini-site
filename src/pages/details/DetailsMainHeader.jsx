// import {HeatBox} from "./components/HeatBox"

import { HeaderTitle } from "../../components/HeaderTitle"


export const DetailsMainHeader = ({ eventObj }) => {


    return (
        <div className="main-details-container">
            <div className="first-img">
                <img src={eventObj.coverImages[2]} alt="" />
                <div className="seconed-img"></div>            


            </div>



        </div>


    )
}

