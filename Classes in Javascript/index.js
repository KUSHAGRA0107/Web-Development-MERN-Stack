class Employee{
    constructor(age, id){
        this.age = age;
        this.id = id;
    }
    getAge(){
        return this.age;
    }

    static printHello(){
        console.log("Hello, World");
    }
}

let employee1 = new Employee(30, 1001);
console.log(employee1.getAge());
Employee.printHello();