
//classes

class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  
    //get functions
    get name() {
      return this._name;
    }
    get department() {
      return this._department
    }
   get remainingVacationDays() {
    return this._remainingVacationDays;
   }
//methods:
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays-daysOff
  }
  }

//Instances

const surgeonRomero = new 
Surgeon('Francisco Romero','Cardiovascular')

const surgeonJackson = new 
Surgeon('Ruth Jackson','Orthopedics')

