/**
 * Created by shchoi on 2015-10-27.
 */
var person = {
    gender : "male",
    'eyeColor' : 'brown'
};
person.firstName = "SH"; // =person["firstName"]
person.lastName = "Choi";
person.abbr = 24;
delete person.age;

var lastNameProperty = "lastName";

console.log(person);

function greetUser(man){
    console.log(man.firstName + man["lastName"] + man[lastNameProperty]);
}

greetUser(person);

