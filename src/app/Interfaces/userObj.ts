import { NeighborhoodResult } from "./NeighborhoodResult";
import { SubjectResult } from "./SubjectResult";
import { iAddress } from "./iAddress.model";
import { iBillingInfo } from "./iBillingInfo.model"
import { StudentResult } from "./StudentResult";

export interface UserObj {
    "ID": number,
    "UserType": string,
    "Email": string,
    "PW": string,
    "FirstName": string,
    "LastName": string,
    "NickName": string,
    "Gender": string,
    "Birthday": Date,
    "GradeLevel": string,
    "Phone": string,
    "webUrl": string,
    "isActive": boolean,
    "Address": iAddress,
    "BillingInfo": iBillingInfo,
    "Neighborhoods": NeighborhoodResult,
    "Subjects": SubjectResult,
    "Students": StudentResult,
    "CreateDate": Date,
    "ModDate": Date,
    "ActiveDate": Date,
    "InactiveDate": Date,
    "Note" : String
}
