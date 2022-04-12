import { iPersonalInfo } from "./iPersonalInfo.model";

export interface iStudent {
    PersonalInfo: iPersonalInfo;
    StudyInterest: string[];
    Neighborhoods: string[];
}
