function Person(name, age, isInsured){
    this.name = name;
    this.age = age;
    this.isInsured = isInsured;
}

Person.prototype.getYearOfBirth = function getYearOfBirth(){
    return (new Date()).getFullYear() - this.age;
}

function Patient(name, age, isInsured){
    Person.call(this);
    this.name = name;
    this.age = age;
    this.isInsured = isInsured;
}

Patient.prototype = Object.create(Person.prototype);

Person.prototype.computeAmountOwed = function computeAmountOwed(hospitalBill){
    const bills = {

        "Patient Amount" : this instanceof Staff ? 
        (hospitalBill * 0.1 >= 100 ?
        hospitalBill * 0.1 - 100 : hospitalBill * 0.1) : hospitalBill * 0.1,

        "Insurance Amount" : hospitalBill * 0.9
    }
    if(this.isInsured){


        return bills;

            
    }

    bills["Patient Amount"] = hospitalBill;
    bills["Insurance Amount"] = 0;


}

function Staff(name, age, isInsured, salary){
    Person.call(this);
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.isInsured = isInsured;
}

Staff.prototype = Object.create(Person.prototype);

Staff.prototype.changeSalary = function changeSalary(newSalary){
    this.salary = newSalary;
}



function Doctor(name, age, isInsured, salary, speciality){
    Staff.call(this);
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.speciality = speciality;
    this.isInsured = isInsured;
}

Doctor.prototype = Object.create(Staff.prototype);

function Nurce(name, age, isInsured, salary, nurceSpeciality){
    Staff.call(this);
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.nurceSpeciality = nurceSpeciality;
    this.isInsured = isInsured;
}

Nurce.prototype = Object.create(Staff.prototype);


const john = new Nurce("john", 23, true);

const laeticia = new Patient("Laeticia", 24, true, 12000, "endocrinologie");

const aquarius = new Doctor("Aqurius", 44, true, 44000, "sexologie")

console.log(john.getYearOfBirth());
console.log(john.computeAmountOwed(2000));

console.log(laeticia.getYearOfBirth());
console.log(laeticia.computeAmountOwed(2000));

console.log(aquarius);

console.log(aquarius.computeAmountOwed(2000));

aquarius.changeSalary("55000");

console.log(aquarius.salary);
