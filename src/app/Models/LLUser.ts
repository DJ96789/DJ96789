import { iAddress } from "../Interfaces/iAddress.model";
import { iBillingInfo } from "../Interfaces/iBillingInfo.model";
import { NeighborhoodResult } from "../Interfaces/NeighborhoodResult";
import { StudentResult } from "../Interfaces/StudentResult";
import { SubjectResult } from "../Interfaces/SubjectResult";
import { UserObj } from "../Interfaces/userObj";

export class LLUser implements UserObj {
    "ID"=0;
    "UserType"="";
    "Email"= "";
    "PW"="";
    "FirstName"="";
    "LastName"="";
    "NickName"="";
    "Gender"="";
    "Birthday"=new Date();
    "GradeLevel"="";
    "Phone"="";
    "webUrl"="";
    "isActive"=false;
    "Address"= {} as iAddress;
    "BillingInfo"= {} as iBillingInfo;
    "Neighborhoods"= {} as NeighborhoodResult;
    "Subjects"= {} as SubjectResult;
    "Students"= {} as StudentResult;
    "CreateDate"= new Date();
    "ModDate"= new Date(0);
    "ActiveDate"= new Date();
    "InactiveDate"= new Date(0);
    "Note" : "";
}
