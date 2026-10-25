// Person constructor fonksiyonu tanımlanıyor. İki parametre alıyor: name ve age
class Person {
    constructor(name, age) {
        // this anahtar kelimesi, oluşturulacak nesneyi temsil eder
        // name parametresi, nesnenin name özelliğine atanıyor
        this.name = name;
        // age parametresi, nesnenin age özelliğine atanıyor
        this.age = age;
    }
}

// Person prototipine greet metodu ekleniyor
// Bu metot, tüm Person nesneleri tarafından paylaşılacak
Person.prototype.greet = function () {
    // Template literal kullanarak kişinin adını ve yaşını içeren bir mesaj yazdırıyor
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Person constructor'ını kullanarak person1 adında yeni bir nesne oluştu   ruluyor
// 'Alice' adı ve 30 yaşı ile
const person1 = new Person('Alice', 30);
// Person constructor'ını kullanarak person2 adında yeni bir nesne oluşturuluyor
// 'Bob' adı ve 25 yaşı ile
const person2 = new Person('Bob', 25);

// person1 nesnesinin greet metodunu çağırıyor
// Bu, "Hello, my name is Alice and I am 30 years old." yazdıracak
person1.greet();
// person2 nesnesinin greet metodunu çağırıyor
// Bu, "Hello, my name is Bob and I am 25 years old." yazdıracak
person2.greet();

// person1'in __proto__ özelliğinin Person.prototype'a eşit olup olmadığını kontrol ediyor
// Bu, true değerini döndürecek çünkü bir nesnenin __proto__'su, constructor'ının prototype'ıdır
console.log(person1.__proto__ === Person.prototype);
// person1'in prototipinin prototipinin Object.prototype'a eşit olup olmadığını kontrol ediyor
// Bu, true değerini döndürecek çünkü JavaScript'te tüm nesneler Object'ten türer
console.log(person1.__proto__.__proto__ === Object.prototype);
