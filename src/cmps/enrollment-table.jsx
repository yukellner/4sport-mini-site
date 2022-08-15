import { Button } from "@mui/material"
import { map } from "jquery"
import { NavLink } from "react-router-dom"
import { Sponsers } from "./sponsers"


export const EnrollmentTable = ({ eventObj }) => {

    console.log('heats', eventObj.heats)




    return (
        <div className="enrollment-table">
            <h1>טבלת מחירים</h1>
            <table className="top-table">
                <thead>


                    <tr>
                        <th>הרשמה מאוחרת</th>
                        <th>הרשמה</th>
                        <th>הרשמה מוקדמת</th>
                        <th rowSpan="2">מקצה</th>
                    </tr>

                    <tr>
                        <th>{eventObj.priceDates[2]}</th>
                        <th>{eventObj.priceDates[1]}</th>
                        <th>{eventObj.priceDates[0]}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {eventObj.heats.map(heat =>
                        <tr key={heat.Rolls}>
                            <td>{heat.prices[2]}₪</td>
                            <td>{heat.prices[1]}₪</td>
                            <td>{heat.prices[0]}₪</td>
                            <td>{heat.description}</td>
                        </tr>

                    )}
                </tbody>

            </table>
            <h1>זמני זינוק</h1>
            <table className="bottom-table">
                <thead>
                    <tr>
                        <th>מגיל</th>
                        <th>זמן זינוק</th>
                        <th>מקצה</th>
                    </tr>
                </thead>
                <tbody>

                    {eventObj.heats.map(heat =>
                        <tr>
                            <td>{heat.minAge}</td>
                            <td>{heat.startHeat}</td>
                            <td>{heat.description}</td>
                        </tr>)}
                </tbody>
            </table>
            <p>
                מה כוללת ההרשמה שלי?
                <br/>
                ערכת השתתפות, סידורי אבטחה, משטרה ורפואה, מדידת מסלול וזמן (מקצה המיני מרתון וה-5 ק"מ לא מדידים).
                <br/>
                לתשומת ליבכם: ההרשמה אינה כוללת חולצת מרתון. 
                <br />
                לקבלת חולצת מרתון איכותית יש לציין זאת בהליך ההרשמה.
                <br />
                החולצה תהיה חולצת מותג איכותי שיפורסם בהמשך ועלותה 30 ש"ח.
                <br />
                קבוצות המונות מעל 15 משתתפים יכולות לקבל קוד הנחה באמצעות שירות הלקוחות בטלפון 03-5711575 שלוחה 3 או במייל kapaimactive@kapaim.co.il בין השעות 9:00-17:00
                <br />
                לקוחות דיגיתל זכאים להנחה של 20% בעת ההרשמה.
                <br />
                אין כפל הנחות
                <br />
                מהרו להירשם! מספר ההרשמות מוגבל
                <br />
                במידה והאירוע יתבטל/ יידחה בשל מגיפת הקורונה יתאפשר החזר מלא לנרשמים.
            </p>



        </div>



    )
}


