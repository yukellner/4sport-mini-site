import { useEffect } from "react";
import { EnrollmentTable } from "../cmps/enrollment-table";
import { SponserCard } from "../cmps/sponser-card";
import { Sponsers } from "../cmps/sponsers";


export const Enrollment = ({eventObj}) => {

    



    return (
        <div >

            <EnrollmentTable  eventObj={eventObj}/>
            <Sponsers eventObj={eventObj}/>

           

        </div >
    )
}