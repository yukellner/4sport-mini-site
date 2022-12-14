
export const DetailsContent = ({ eventObj }) => {


    return (
        <div className="DetailsContent">

            <div className="schedule">
                <h1>לוז אירוע</h1>
                <h3>תאריך האירוע: {eventObj.date}</h3>
                <h3>הגעה והתכנסות {eventObj.dateTime.substr(eventObj.dateTime.length - 5)}</h3>
                <h2>לוז זינוקים</h2>
                <table>
                    <thead>
                        <tr>
                            <th>מקצה</th>
                            <th>שעת זינוק</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventObj.heats.map(heat =>
                            <tr key={heat.description}>
                                <td>{heat.description}</td>
                                <td>{heat.startHeat}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
                <h3>טקס סיום וחלוקת פרסים : 10:00</h3>
            </div>
            <div className="categories">
                <h1>קטגוריות</h1>
                {eventObj.heats.map(heat =>
                    <div key={heat.description}>
                        <h3>מקצה {heat.description}</h3>
                        {heat.sections.map(section => <h3 key={section.name}>{section.name}</h3>)}
                        <br/>


                    </div>
                )}



            </div>
            <div className="prices">
                <h1>פרסים</h1>
                <table>
                    <thead>
                        <tr>
                            <th>מקום שלישי</th>
                            <th>מקום שני</th>
                            <th>מקום ראשון</th>
                            <th>מקצה</th>
                        </tr>
                    </thead>
                    <tbody>

                        {eventObj.heats.map(heat =>
                            <tr key={heat.description}>
                                {heat.prizes.length != 0 && heat.prizes.map(prize =>
                                    <td key={prize.nis}>₪{prize.nis}</td>
                                )}
                                {heat.prizes.length != 0 && <td>{heat.description}</td>}
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
            <div>
                <h1>הערות</h1>
                <p>
                    פרסי ההישג אינם ניתנים לצבירה אחד עם השני (לדוגמה: רץ במקום הראשון בתוצאה שמתחת ל 2:07:59 יזכה ב-40,000$ בלבד, ולא בסכום כל שאר הפרסים. רץ במקום הראשון בתוצאה של 2:08:59 יזכה ב-25,000$ בלבד והפרסים הגבוהים והנמוכים מסכום זה לא יועברו לאיש).
                    רק הרץ הראשון ששבר את ההישג הגבוה יקבל את סכום הזכייה לפרס הראשון.
                    פרסי ההישג אינם ניתנים לצבירה יחד עם הפרסים הרגילים (מרתון – כללי) למקומות 1-3. פרסים אלו יינתנו רק במידה ולא יתקבלו פרסי הישג.
                    העברת הכסף תתבצע לאחר אישור ועדת השיפוט של המרתון ואחרי בדיקת סמים לזוכים שתוצאתה שלילית ועד 7 ימי עבודה מיום התחרות.
                    טקס המנצחים יתקיים במרכז דניאל לחתירה ב02.03.23 בשעה 18:00.
                </p>
            </div>
        </div>


    )
}

