export class Location {
    constructor(
      public postalCode: string,
      public city: string,
      public countryCode: string,
      public region: string
    ) { }
  }
  
  export class Basics {
    constructor(
      public name: string,
      public label: string,
      public picture: string,
      public location: Location
    ) { }
  }
  
  export class Work {
    constructor(
      public company: string,
      public position: string,
      public website: string,
      public startDate: string,
      public endDate: string,
      public summary: string,
      public highlights: string[]
    ) { }
  }
  
  export class Education {
    constructor(
      public institution: string,
      public area: string,
      public studyType: string,
      public startDate: string,
      public endDate: string,
      public courses: string[]
    ) { }
  }
  
  export class Award {
    constructor(
      public title: string,
      public date: string,
      public awarder: string
    ) { }
  }
  
  export class Course {
    constructor(
      public title: string,
      public date: string,
      public awarder: string
    ) { }
  }
  
  export class Skill {
    constructor(
      public name: string,
      public keywords: string[]
    ) { }
  }
  
  export class Language {
    constructor(
      public language: string,
      public fluency: string
    ) { }
  }
  
  export class Interest {
    constructor(
      public name: string,
      public keywords: string[]
    ) { }
  }
  
  export class Resume {
    constructor(
      public basics: Basics,
      public work: Work[],
      public education: Education[],
      public awards: Award[],
      public courses: Course[],
      public skills: Skill[],
      public languages: Language[],
      public interests: Interest[]
    ) { }
  }
  