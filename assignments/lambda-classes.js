// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    const { 
      name, 
      age, 
      location,
      gender
     } = props;
     this.name = name;
     this.age= age;
     this.location = location;
     this.gender = gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props)
    const { 
      specialty,
      favLanguage,
      catchPhrase
    } = props;
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase; 
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}