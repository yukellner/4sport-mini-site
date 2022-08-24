import { HeaderTitle } from "../../components/HeaderTitle";
import { EnrollmentTable } from "./enrollment-table/EnrollmentTable";


export const Enrollment = ({ eventObj }) => {


    return (
        <div>
            <HeaderTitle titleText={'הרשמה'} />


            <EnrollmentTable eventObj={eventObj} />


        </div>
    )
}