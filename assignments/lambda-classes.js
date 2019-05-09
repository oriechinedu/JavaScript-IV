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
  grade({ name }, subject) {
    return `${name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    const {
      previousBackground,
      className,
      favSubjects
    } = props;
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => {
      console.log(subject);
    })
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    const {
      gradClassName,
      favInstructor,
    } = props;
    this.gradClassName = gradClassName;
    this.favInstructor = this.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
  }

  debugsCode({name}, subject) {
    return `${this.name} debugs ${name}'s code on ${subject}`
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

// testing Person
console.log(fred)
const benjamin = new Person({
  name: 'Benjamin',
  age: 19,
  gender: 'Male',
  location: 'Lagos'
});
const kells = new Person({
  name: 'Kells',
  age: 18,
  gender: 'Female',
  location: 'Lagos'
});

console.log(kells.name)
console.log(kells.speak())
console.log(benjamin.name)
console.log(benjamin.speak())

