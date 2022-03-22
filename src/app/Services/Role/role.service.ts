import { Injectable } from '@angular/core';
import { LLRole } from 'src/app/Models/LLRole';
import { LLUser } from 'src/app/Models/llUser';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  llMemberRoles:LLRole[]=[]; 
  roles:string[] = ["admin", "subscriber", "tutor", "student", ];

  constructor() {     
    this.llMemberRoles = []; 

    var role:LLRole =  new LLRole();
    role.ID=1;
    role.Email="mariafdiez@gmail.com";
    role.Role="Admin";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=2;
    role.Email="mariafdiez@gmail.com";
    role.Role="Tutor";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=3;
    role.Email="kylevincentterry@gmail.com";
    role.Role="Admin";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=4;
    role.Email="kylevincentterry@gmail.com";
    role.Role="Tutor";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=5;
    role.Email="dj96789@yahoo.com";
    role.Role="Admin";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=6;
    role.Email="dj96789@yahoo.com";
    role.Role="Tutor";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=7;
    role.Email="fundikarimah@yahoo.com";
    role.Role="Admin";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=8;
    role.Email="fundikarimah@yahoo.com";
    role.Role="Tutor";
    this.llMemberRoles.push(role); 

    role =  new LLRole();
    role.ID=9;
    role.Email="fundikarimah@yahoo.com";
    role.Role="Stucent";
    this.llMemberRoles.push(role); 
  }

  getAllRoles(): string[] {
    console.log("getting all roles", this.roles);

    return this.roles;
  }

  getAllMemberRoless(): LLRole[] {
    console.log("listing", this.llMemberRoles);

    return this.llMemberRoles;
  }

  getMemberRoleById(id:number): LLRole|undefined {
    console.log("getting role for roleid", id);

    return this.llMemberRoles.find(role => role.ID==id);
  }

  getMemberRolesByEmail(email:string): LLRole[]|undefined {
    console.log("getting roles for", email);

    return this.llMemberRoles.filter(role => role.Email==email);
  }

  addMemberToRole(member: LLUser, role: string):boolean {
    console.log("adding", member.Email, "to", role);
    var status:boolean=false;
    var existing= this.llMemberRoles.find(mem => mem.Email==member.Email && mem.Role==role);
    if (typeof existing == "undefined") {
      var roleIds:number[] = this.llMemberRoles.map(role => role.ID);
      var maxId:number = Math.max(...roleIds);
      var newRole = new LLRole();
      newRole.ID = maxId+1,
      newRole.Email = member.Email,
      newRole.Role = role,
      this.llMemberRoles.push(newRole);
      status=true;
     };
    return status;
  }

  removeMemberFromRole(delMember: LLUser, role: string):boolean {
    console.log("removing", delMember, "from", role);
    var status:boolean=false;
    var member= this.llMemberRoles.find(mem => mem.Email==delMember.Email);
    if (typeof member != "undefined") {
      this.llMemberRoles.splice(this.llMemberRoles.indexOf(member), 1);
      status=true;
    }
    return status;
  }

}
