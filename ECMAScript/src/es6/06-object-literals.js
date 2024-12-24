function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Aletop", 31, "COl", 1))