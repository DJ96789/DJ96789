import { iAddress } from "./iAddress.model";
import { iBillingInfo } from "./iBillingInfo.model";
import { iPersonalInfo } from "./iPersonalInfo.model";
import { iStudent } from "./iStudent.model";

export interface iMember {
    PersonalInfo: iPersonalInfo;
    AddressInfo: iAddress;
    BillingInfo: iBillingInfo;
    Students: iStudent[];
}
