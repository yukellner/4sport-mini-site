import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { HeaderTitle } from "../../components/HeaderTitle"

export const Contact = ({ eventObj }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('submit')
    }


    return (
        <div className="main-contact">
            <HeaderTitle titleText={'צור קשר'} />
            <div className="contact-content">
                <div className="contact-img">
                    <img src={eventObj.coverImages[2]} alt="" />

                </div>
                <div className="contact-form">
                    <form id="contact-form" onSubmit={handleSubmit} method="POST">
                        <div className="form-group">
                            <TextField id="filled-basic" label="שם פרטי" variant="filled" />
                            <TextField id="filled-basic" label="שם משפחה" variant="filled" />
                            <TextField id="filled-basic" label="כתובת אימייל" variant="filled" />
                            <TextField id="filled-basic" label="מספר טלפון" variant="filled" />
                        </div>

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">מקצה</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group">
                                {eventObj.heats.map(heat =>
                                    <FormControlLabel key={heat.description} value={heat.description} control={<Radio />} label={heat.description} />
                                )}
                            </RadioGroup>
                        </FormControl>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>



        </div>
    )
}