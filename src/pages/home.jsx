import { useEffect } from "react";
import { EnrollmentCmp } from "../cmps/enrollment-cmp"
import { Sponsers } from "../cmps/sponsers";


export const Home = ({eventObj}) => {

    useEffect(() => {
        // printJSON()
      }, [])


    return (
        <div className="main-home">
            <EnrollmentCmp/>
            <Sponsers eventObj={eventObj}/>

        </div >
    )
}