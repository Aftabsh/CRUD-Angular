import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service';
import { Policy } from '../policy';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  policies : Policy[] | undefined;
  selectedPolicy: Policy = { id : 0 , number:0, amount: 0};
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.readPolicies().subscribe((policies: Policy[])=>{
       this.policies = policies;
       console.log(this.policies);
      })
  }
  createOrUpdatePolicy(form :NgForm ){
     if(this.selectedPolicy && this.selectedPolicy.id){
     form.value.id = this.selectedPolicy.id;
     this.apiService.updatePolicies(form.value).subscribe((policy: Policy)=>{
     console.log("Policy updated" , policy);
     });
     }
     else{
     this.apiService.createPolicies(form.value).subscribe((policy: Policy)=>{
    console.log("Policy created, ", policy);
    });
     }
    }
    
     deletePolicy(id: number){
     this.apiService.deletePolicy(id).subscribe((policy: Policy)=>{
     console.log("Policy deleted, ", policy);
     });
    }
    
     selectPolicy(policy: Policy){
     this.selectedPolicy = policy;
     }

}
