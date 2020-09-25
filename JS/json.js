let object = {
    "firstName": "Иван",
    "lastName": "Петров",
    "address": {
        "street": "ул. Победы 68/4",
        "city": "г. Орёл",
        "postalCode": 10510
    },
    "phoneNumbers": [
        "8-902-456-3232",
        "8-811-756-4669"
    ]
};
console.log(object);

let json = JSON.stringify(object); //JS object -> JSON
console.log(json);

let newObject = JSON.parse(json); //JSON -> JS object
console.log(newObject);