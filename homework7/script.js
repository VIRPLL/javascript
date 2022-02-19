
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr = [
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431234523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380651234523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431253523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431275523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431239523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431964523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431231123),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431234523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431234523),
    new User(1, "roman","dsa", "dsaw@fasd.cas", 380431234523),
]
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
