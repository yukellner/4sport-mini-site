
export const DetailsMainHeader = ({ eventObj }) => {


    return (
        <div className="main-details-container">
            <div className="first-img">
                <img src={eventObj.coverImages[2]} alt="" />
                <div className="seconed-img"></div>
            </div>
            <div className="meeting-point">
                <a href={eventObj.wazeDirection}>
                    <img src={require('../../../assets/icons/icon-waze.png')} alt="" />
                    <h3>לחץ לניווט לשטח הכינוס</h3>
                </a>

            </div>



        </div>


    )
}

