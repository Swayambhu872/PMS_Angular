import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { dateValidator, DobValidatorDirective } from '../dob-validator.directive';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent  {

  constructor(private formBuilder: FormBuilder, private element:ElementRef) { }

 

  patientDetailsForm = this.formBuilder.group({
  title:new FormControl('',[Validators.required]),
  firstName:new FormControl('',[Validators.required,Validators.minLength(2)]),
  lastName:new FormControl('',[Validators.required, Validators.minLength(2)]),
  dob:new FormControl('',[Validators.required, dateValidator()]),
  age:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required]),
  race:new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
  ethnicity:new FormControl('',[Validators.required,Validators.minLength(2)]),
  languagesKnown:new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  homeAddress:new FormControl('',[Validators.required,Validators.minLength(10)]),
  countryCode:new FormControl('',[Validators.required,Validators.minLength(4)]),
  contactNumber:new FormControl('',[Validators.required,Validators.pattern("\\d{7}")]),
  eTitle:new FormControl('',[Validators.required]),
  eFirstName:new FormControl('',[Validators.required]),
  eLastName:new FormControl('',[Validators.required]),
  eRelationship: new FormControl('',[Validators.required]),
  eContact: new FormControl('',[Validators.required,Validators.pattern("\\d{7}")]),
  eAddress:new FormControl('',[Validators.required]),
  isPatientPortalAccessibleToE:new FormControl('',[Validators.required])

 });
public mr:string = '';
public mrs:string = '';
public isNotSelected:boolean = true;
//public fieldEmpty:boolean = true;
public fnameNotEmpty:boolean = true;
public lnameNotEmpty:boolean = true;
public invalidDob:boolean= true;
public isHidden:boolean = true;
public raceNotEmpty:boolean = true;
public ethnicityNotEmpty:boolean = true;
public languageNotEmpty:boolean = true;
public addressNotEmpty:boolean = true;
public incorrectCountryCode:boolean = true;
public incorrectContact:boolean = true;
public eTitleNotSelected:boolean =true;
public efnameNotEmpty:boolean = true;
public elnameNotEmpty:boolean = true;


public data:object= this.patientDetailsForm.value;









get firstName() { return this.patientDetailsForm.get('firstName'); }
get title() { return this.patientDetailsForm.get('title'); }

public saveForm():void{
  if(this.patientDetailsForm.controls['title'].value === '') {
    this.isNotSelected=false;
  }

  console.log(this.patientDetailsForm.value)
}

public saveRelativeForm():void{
  if(this.patientDetailsForm.controls['etitle'].value === '') {
    this.eTitleNotSelected=false;
  }
}

  public isFnameNotEmpty():void{
   
    var fname = new String(this.patientDetailsForm.controls['firstName'].value);
   
    if(fname.length>0 && fname.length<2 ){
        this.fnameNotEmpty=false;
    } 
   if(fname.length >=2){
      this.fnameNotEmpty = true;
   } else if(fname.length === 0){
 
     this.fnameNotEmpty = true;
   }
}

public isLnameNotEmpty():void{
   
  var lname = new String(this.patientDetailsForm.controls['lastName'].value);
 
  if(lname.length>0 && lname.length<2 ){
      this.lnameNotEmpty=false;
  } 
 if(lname.length >=2){
    this.lnameNotEmpty = true;
 } else if(lname.length === 0){

   this.lnameNotEmpty = true;
 }
}

public invalidDate():void{
   console.log("mouseleave trigger-->")
  let dateStr:string =   this.patientDetailsForm.controls['dob'].value;;
  let dateOfBirth = new Date(dateStr); 
  let today = new Date();
  console.log(dateStr)
 
   if(dateOfBirth > today){
    // console.log("inside invalid dob if -------->")
      this.invalidDob=false;
   } else  if(dateOfBirth < today){
   // console.log("inside invalid dob if -------->")
     this.invalidDob=true;
  }

}

public ageCalculator():void{
  let dateStr:string =   this.patientDetailsForm.controls['dob'].value;
  let dateOfBirth = new Date(dateStr); 
  this.patientDetailsForm.controls['age'].setValue(moment().diff(dateOfBirth, 'years'));
}

public raceValidator():void{
 console.log("inside race validator")
  var race = new String(this.patientDetailsForm.controls['race'].value);
 
  if(race.length>0 && race.length<2 ){
      this.raceNotEmpty=false;
  } 
 if(race.length >=2){
    this.raceNotEmpty = true;
 } else if(race.length === 0){

   this.raceNotEmpty = true;
 }

}

public ethnicityValidator():void{
  console.log("inside ethnicity validator")
   var ethnicity = new String(this.patientDetailsForm.controls['ethnicity'].value);
  
   if(ethnicity.length>0 && ethnicity.length<2 ){
       this.ethnicityNotEmpty=false;
   } 
  if(ethnicity.length >=2){
     this.ethnicityNotEmpty = true;
  } else if(ethnicity.length === 0){
 
    this.ethnicityNotEmpty = true;
  }
 
 }

 public languageValidator():void{
  console.log("inside language validator")
   var language = new String(this.patientDetailsForm.controls['languagesKnown'].value);
  
   if(language.length>0 && language.length<2 ){
       this.languageNotEmpty=false;
   } 
  if(language.length >=2){
     this.languageNotEmpty = true;
  } else if(language.length === 0){
 
    this.languageNotEmpty = true;
  }
 
 }

 public addressValidator():void{
  console.log("inside address validator");
   var address = new String(this.patientDetailsForm.controls['languagesKnown'].value);
  
   if(address.length>0 && address.length<10 ){
    console.log("inside address validator if");
       this.addressNotEmpty=false;
   } else if(address.length >=10){
    this.addressNotEmpty=true;
   }

 }

 public countryCodeValidator():void{
  console.log("inside countryCode validator");
   var countryCode = new String(this.patientDetailsForm.controls['countryCode'].value);
  
   if(countryCode.length !== 4 ){
    console.log("inside address validator if");
       this.incorrectCountryCode=false;
   }  else if(countryCode.length === 4){
    this.incorrectCountryCode=true;
   }

   if(countryCode.length === 0){
    this.incorrectCountryCode=true;
   }

 }
 

 public contactValidator():void{
  console.log("inside countryCode validator");
   var contact = new String(this.patientDetailsForm.controls['contactNumber'].value);
  
   if(contact.length !== 7 ){
    console.log("inside address validator if");
       this.incorrectContact=false;
   }  else if(contact.length === 7){
    this.incorrectContact = true;
   }

   if(contact.length === 0){
    this.incorrectContact = true;
   }

 }

 public eFnameValidator():void{
  
  var efname = new String(this.patientDetailsForm.controls['eFirstName'].value);
 
 
  if(efname.length>0 && efname.length<2 ){
    
      this.efnameNotEmpty=false;
  } 
 if(efname.length >=2){
  
    this.efnameNotEmpty = true;
 } else if(efname.length === 0){
  
   this.efnameNotEmpty = true;
 }
}

public eLnameValidator():void{
   console.log("inside eLname---------->")
  var elname = new String(this.patientDetailsForm.controls['eLastName'].value);
 
  if(elname.length>0 && elname.length<2 ){
      this.elnameNotEmpty=false;
  } 
 if(elname.length >=2){
    this.elnameNotEmpty = true;
 } else if(elname.length === 0){

   this.elnameNotEmpty = true;
 }
}

  // public isEmpty():void{
  //   var fname = new String(this.patientDetailsForm.controls['firstName'].value);
  //   if(fname !== '' )
  //     this.isFnameEmpty = false;
  // }
  
 }
 




