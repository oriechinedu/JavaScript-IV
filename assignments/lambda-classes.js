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
     this.age = age;
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
      favSubjects,
      grade
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
    this.favInstructor = favInstructor;
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

/*  === Start Person test === */

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

/*  ==End Person test == */

const jon = new Instructor({
  name: 'Jon',
  location: 'Wonderland',
  age: 28,
  gender: 'others',
  favLanguage: 'ReactJs',
  specialty: 'Backend',
  catchPhrase: `The world is just a bunch of objects`
});

console.log(jon.demo('Advanced CSS'))
console.log(jon.grade({ name: 'Vincent'}, 'Advanced CSS'))
console.log(jon.favLanguage)

const jane = new Instructor({
  name: 'Jane',
  location: 'Nowhere',
  age: 100,
  gender: 'others',
  favLanguage: 'Next Language',
  specialty: 'Mid-end',
  catchPhrase: `life is made up of lines of codes`
});

console.log(jane.favLanguage)
console.log(jane.catchPhrase);
console.log(jon.grade({ name: 'Doe'}, 'Javascript'))

const chinedu = new Student({
  name: 'Chinedu',
  age: 25,
  location: 'Lagos Nigeria',
  gender: 'Male',
  previousBackground: 'Web Developer',
  className: 'WEBEU2',
  favSubjects: [
    'Html', 'CSS', 'JavaScript', 'PHP', 'Laravel'
  ]
})

chinedu.listsSubjects();
console.log(chinedu.PRAssignment('Javascript IV'))
console.log(chinedu.sprintChallenge('Javascript IV'))

const yusuf = new Student({
  name: 'Yusuf',
  age: 23,
  location: 'Lagos Nigeria',
  gender: 'Male',
  previousBackground: 'Media operator',
  className: 'WEBEU2',
  favSubjects: [
    'Html', 'CSS', 'JavaScript'
  ]
})

yusuf.listsSubjects();
console.log(yusuf.PRAssignment('Javascript IV'))
console.log(yusuf.previousBackground)

const sorin = new ProjectManager({
  name: 'Sorin',
  age: 28,
  location: 'Romania',
  gender: 'Male',
  gradClassName: 'WEBEU1',
  favInstructor: 'Josh',
  specialty: 'Backend',
  favLanguage: 'Javascript',
  catchPhrase: 'Life is good with beautiful lines of code 😊'
})
console.log(sorin.catchPhrase)
console.log(sorin.standUp('webeu2_sorin'))
console.log(sorin.debugsCode({name: 'Chinedu'}, 'Javascript IV'))

const foo = new ProjectManager({
  name: 'Foo',
  age: 28,
  location: 'London',
  gender: 'Male',
  gradClassName: 'WEBEU1',
  favInstructor: 'Bar',
  specialty: 'Backend',
  favLanguage: 'Javascript',
  catchPhrase: 'Coding is about creating and fixing bugs 😂'
})

console.log(foo.catchPhrase)
console.log(foo.standUp('webeu2_foo'))
console.log(foo.debugsCode({name: 'bar'}, 'Javascript IV'))






