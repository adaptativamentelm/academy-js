class Person {
    name;
    lastName;
    isGirl;

    constructor(nombre, apellido, isShe = true) {
        this.name = nombre;
        this.lastName = apellido;
        this.isGirl = isShe;
    }

    greet() {
        console.log(`Hola mi nombre es ${this.name} ${this.lastName} y ${this.isGirl ? 'soy' : 'no soy'} una niña`);
    }
}

// let person1 = new Person('Luis', 'Miranda', false);
// let person2 = new Person('Andrea', 'Castro', true);
// let person3 = new Person('Chinchilla', 'Miranda', true);
// let person4 = new Person('Scarlett', 'Platón', true);
// let person5 = new Person('Paola', 'Huenueman', true);
// let person6 = new Person('Natalia', 'Saavedra', true);
// let person7 = new Person('Daniela', 'Olivares', true);
// let person8 = new Person('Dharma', 'Herrera', true);
// let person9 = new Person('Igor', 'Ianiszewski', false);
// let person10 = new Person('Miguel', 'Lillo', false);
// person1.greet();
// person2.greet();
// person3.greet();
// person4.greet();
// person5.greet();
// person6.greet();
// person7.greet();
// person8.greet();
// person9.greet();
// person10.greet();

class Programmer extends Person {
    type;

    constructor(name, lastName, isGirl, tipo) {
        super(name, lastName, isGirl);
        this.type = tipo;
    }

    programmerGreetings() {
        this.greet();
        console.log(`Y me encuentro programando en ${this.type}`);
    }
}

// let programmer1 = new Programmer('Andrea', 'Castro', true, 'Frontend');
// let programmer2 = new Programmer('Luis', 'Miranda', false, 'Backend');
// programmer1.programmerGreetings();
// programmer2.programmerGreetings();