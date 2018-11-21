class Person {
    constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
    }
    
    full_name() {
      return this.first_name + " " + this.last_name;
    }
  }
  
  class Staff extends Person {
     constructor(first_name, last_name, persno) {
           super(first_name, last_name);
          this.persno = persno;
      }
       
      info() {
        return this.persno + " " + this.full_name();
      }
  }
  
  const staff = new Staff('Jane', 'Fuller', '0643256');
  console.log(staff.info());