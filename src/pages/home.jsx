import { useEffect } from "react";
import { EnrollmentCmp } from "../cmps/enrollment-cmp"
import { Heats } from "../cmps/heats";
import { Sponsers } from "../cmps/sponsers";


export const Home = ({eventObj}) => {

    useEffect(() => {
        // printJSON()
      }, [])


    return (
        <div >
            <EnrollmentCmp eventObj={eventObj}/>
            <Heats eventObj={eventObj}/>

        </div >
    )
}