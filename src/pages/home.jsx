import { useEffect } from "react";
import { Enrollment } from "../cmps/enrollment"
import { SponserCard } from "../cmps/sponser-card";
import { Sponsers } from "../cmps/sponsers";


export const Home = ({eventObj}) => {

    useEffect(() => {
        // printJSON()
      }, [])


    // const printJSON = async () =>  {
    //     console.log('im here')
    //     const response = await fetch('https://www.4sport-live.com/miniSite/eventData/?comp=3432');
    //     var responseJson = await response.json();
    //     console.log(Object(responseJson));
    // }



    return (
        <div className="main-home">
            <Enrollment/>
            <Sponsers eventObj={eventObj}/>

        </div >
    )
}