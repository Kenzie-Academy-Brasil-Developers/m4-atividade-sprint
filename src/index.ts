class Student{
    name: string;
    module: string;
    grade: number | null = null;

    constructor(name: string, module: string) {
        this.name = name;
        this.module = module;        
    }

    sayHello(){
        console.log(`Olá me chamo ${this.name} e estou no módulo ${this.module}.`);
    }

    setGrade(grade: number){
        this.grade = grade;
    }
    
    getGrade(){
        console.log(`Nota: ${this.grade}`);
    }
}

const student = new Student("Osvaldo", "M4");
student.sayHello();
student.setGrade(10);
student.getGrade();