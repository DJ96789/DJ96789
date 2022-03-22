import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LLUser } from 'src/app/Models/llUser';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  allMembers:LLUser[]=[]; 

  constructor(private httpClient: HttpClient) { 
    this.allMembers = []; 

    var firstMember:LLUser =  new LLUser();
    firstMember.ID=1;
    firstMember.Email="mariafdiez@gmail.com";
    firstMember.PW="1234";
    firstMember.FirstName="Maria";
    firstMember.LastName="Diez";
    firstMember.NickName="Maria Diez";
    firstMember.Phone="7779311";
    firstMember.webUrl="";
    firstMember.isActive=true;     
    this.allMembers.push(firstMember);   
    var secondMember:LLUser =  new LLUser();
    secondMember.ID=2;
    secondMember.Email="kylevincentterry@gmail.com";
    secondMember.PW="1234";
    secondMember.FirstName="KT";
    secondMember.LastName="SHMOOV";
    secondMember.NickName="KT SHMOOV";
    secondMember.Phone="";
    secondMember.webUrl="";
    secondMember.isActive=true;     
    var thirdMember:LLUser =  new LLUser();
    thirdMember.ID=3;
    thirdMember.Email="dj96789@yahoo.com";
    thirdMember.PW="1234";
    thirdMember.FirstName="don";
    thirdMember.LastName="johnson";
    thirdMember.NickName="don";
    thirdMember.Phone="80863818078";
    thirdMember.webUrl="";
    thirdMember.isActive=true;     
    var thirdMember:LLUser =  new LLUser();
    thirdMember.ID=4;
    thirdMember.Email="fundikarimah@yahoo.com";
    thirdMember.PW="1234";
    thirdMember.FirstName="Joyce";
    thirdMember.LastName="johnson";
    thirdMember.NickName="Fundi";
    thirdMember.Phone="2817734442";
    thirdMember.webUrl="";
    thirdMember.isActive=true;     
  }

  getAllMembers(): LLUser[] {
    console.log("listing", this.allMembers);

    return this.allMembers;
  }

  getMemberByEmail(email:string): LLUser|undefined {
    console.log("getting member for", email);

    return this.allMembers.find(mem => mem.Email==email);
  }

  getMemberById(id:number): LLUser|undefined {
    console.log("getting member for memberid", id);

    return this.allMembers.find(member => member.ID==id);
  }

  setMemberStatus(email:string, status:boolean):boolean {
    console.log("setting status for member", email, "to", status);
    var success:boolean=false;
    var member= this.allMembers.find(mem => mem.Email==email);
    if (member) {
      member.isActive=status;
      this.updateMember(member);
      success=true;
    }
    return success;
  }

  addMember(newMember: LLUser):boolean {
    console.log("adding", newMember);
    var status:boolean=false;
    var member= this.allMembers.find(mem => mem.Email==newMember.Email);
    if (!member) {
      newMember.isActive=true;
      this.allMembers.push(newMember);
      status=true;
    }
    return status;
  }

  removeMember(delMember: LLUser):boolean {
    console.log("removing", delMember);
    var status:boolean=false;
    var member= this.allMembers.find(mem => mem.Email==delMember.Email);
    if (member) {
      this.allMembers.splice(this.allMembers.indexOf(member), 1);
      status=true;
    }
    return status;
  }

  updateMember(updateMember: LLUser) {
    console.log("updating", member);
    var status:boolean=false;
    var member= this.allMembers.find(mem => mem.Email==updateMember.Email);
    if (member) {
      this.allMembers.splice(this.allMembers.indexOf(member), 1, member);
      status=true;
    }
    return status;
  }

}
