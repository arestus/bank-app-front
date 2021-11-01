
  export class Employee {
    EmpId: string ='';
    FirstName: string ='';
    LastName: string ='';
    DateofBirth?: Date;
    EmailId: string ='';
    Gender: string='';
    CountryId: string='';
    StateId: string='';
    Cityid: string='';
    Address: string='';
    Pincode: string='';
    Country: string='';
    State: string='';
    City: string='';
  }
  
  export class Country {
    CountryId: string='';
    CountryName: string='';
  }
  
  export class State {
    StateId: string='';
    StateName: string='';
    CountryId: string='';
  }
  
  export class City {
    Cityid: string='';
    CityName: string='';
    StateId: string='';
    CountryId: string='';
  }

