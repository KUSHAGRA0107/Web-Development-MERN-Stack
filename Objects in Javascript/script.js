function Person(name, age, weight){
    this.age = age;
    this.name = name;
    this.weight = weight;

    this.getAge = function getAge(){
        return this.age;
    }

    this.setAge = function setAge(age){
        this.age = age;
    }
}

const first = new Person("Kushagra", 21, 80);
console.log(first.age);

Person.prototype.height = 170;
console.log(first.height);

let person2 = {};
Object.assign(person2, first);
console.log(person2);

console.log(person2.getAge());
