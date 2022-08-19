import { useEffect } from "react";
import { EnrollmentCmp } from "../cmps/EnrollmentCmp"
import { Heats } from "../cmps/Heats";


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