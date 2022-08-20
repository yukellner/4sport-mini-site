import { useEffect } from "react";
import { EnrollmentCmp } from "../enrollment/enrollment-cmp/EnrollmentCmp"
import { Heats } from "./heats/Heats";


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