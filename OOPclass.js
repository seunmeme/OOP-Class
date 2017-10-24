class Human {
    constructor(name, age, subject) {
        this._name = name;
        this._age = age;
        this._subject = subject;                 
    }
    
    speak() {
        console.log('Hi! I\'m '+this._name+' and I am '+this._age+' years old. I love '+this._subject+'.');
    }
    
}

class Student extends Human {
    constructor(name, age, subject) {
        super(name, age, subject);
        this.name = name;
        this.age = name;
        this.subject = subject;
    }
}

class Teacher extends Student {
    constructor(name, age, subject, gender) {
        super(name, age, subject);
        this._gender = gender;
    }

    speak() {
        if (this._gender ==='Male' || this._gender ==='male' || this._gender ==='M'|| this._gender ==='m') {
            console.log('Hello, My name is Mr '+this._name+' and I am '+this._age+' years old. I teach '+this._subject+'.')
        }else if(this._gender ==='Female' || this._gender ==='female' || this._gender ==='F'|| this._gender ==='f'){
            console.log('Hello, My name is Mrs '+this._name+' and I am '+this._age+' years old. I teach '+this._subject+'.')
        }else{
            console.log('Hello, My name is Mx '+this._name+' and I am '+this._age+' years old. I teach '+this._subject+'.')
        }
    }
}

const teacher1 = new Teacher('Solomon', 42, 'Chemistry', 'Male');
const teacher2 = new Teacher('Lola', 32, 'English', 'f');
const student1 = new Student('Seun', 23, 'Physics');

teacher1.speak();
teacher2.speak();
student1.speak();
student1.name;
teacher1.subject;

