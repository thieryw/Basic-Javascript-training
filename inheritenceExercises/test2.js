function Person(name, age, isInsured){
    this.name = name;
    this.age = age;
    this.isInsured = isInsured;
}

Person.prototype.getYearOfBirth = function getYearOfBirth(){
    return (new Date()).getFullYear() - this.age;
}

function Patient(name, age, isInsured){
    Person.call(this, name, age, isInsured);
}

Patient.prototype = Object.create(Person.prototype);
//Si tu utilise Object.create ça il faut que tu assigne la prop constructor
Patient.prototype.constructor = Patient;
//Si non on à Object.getPrototypeOf(new Patien(...)).constructor === Person et c'est pas bon

//Mais je te conseill de faire simplement:
//Object.setPrototypeOf(Patient.prototype, Person.prototype);
//Parce que Patient.prototype.constructor est assigné par default à Patient et donc comme ça on à pas 
//à le réassigné.

Person.prototype.computeAmountOwed = function computeAmountOwed(hospitalBill){
    const bills = {
        "Patient Amount" : this instanceof Staff ? 
            (
                hospitalBill * 0.1 >= 100 ?
                    hospitalBill * 0.1 - 100 
                    : 
                    hospitalBill * 0.1
            ) 
            : 
            hospitalBill * 0.1,
        "Insurance Amount" : hospitalBill * 0.9
    }
    if(this.isInsured){


        return bills;

            
    }

    bills["Patient Amount"] = hospitalBill;
    bills["Insurance Amount"] = 0;


}

function Staff(name, age, isInsured, salary){
    Person.call(this, name, age, isInsured);
    this.salary = salary;
}

Staff.prototype = Object.create(Person.prototype);
Staff.prototype.constructor = Staff;

Staff.prototype.changeSalary = function changeSalary(newSalary){
    this.salary = newSalary;
}



function Doctor(name, age, isInsured, salary, speciality){
    Staff.call(this, name, age, isInsured, salary);
    this.speciality = speciality;
}

//Je le fait une fois comme ça pour memeo
Object.setPrototypeOf(Doctor.prototype, Staff.prototype);

function Nurce(name, age, isInsured, salary, nurceSpeciality){
    Staff.call(this, name, age, isInsured, salary);
    this.nurceSpeciality = nurceSpeciality;
}

Nurce.prototype = Object.create(Staff.prototype);
Nurce.prototype.constructor = Nurce;


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
