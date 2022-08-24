
export const DetailsContent = ({ eventObj }) => {


    return (
        <div className="DetailsContent">
            <div className="meeting-point">
                meeting point
            </div>
            <div className="schedule">
                <h1>לוז אירוע</h1>
                <h3>תאריך האירוע: {eventObj.date}</h3>
                <h3>הגעה והתכנסות {eventObj.dateTime.substr(eventObj.dateTime.length - 5)}</h3>
                <h2>לוז זינוקים</h2>
                <table>
                    <thead>
                        <tr>
                            <td>מקצה</td>
                            <td>שעת זינוק</td>
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
                <h2>קטגוריות</h2>
                {eventObj.heats.map(heat =>
                    <div key={heat.description}>
                        <h3>{heat.description} מקצה</h3>
                        {heat.sections.map(section => <h3 key={section.name}>{section.name}</h3>)}


                    </div>
                )}



            </div>
            <div className="prices">
                <h2>פרסים</h2>
                <table>
                    <thead>
                        <tr>
                            <td>מקום שלישי</td>
                            <td>מקום שני</td>
                            <td>מקום ראשון</td>
                            <td>מקצה</td>
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
        </div>


    )
}

