const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Heyyy!");
        } else {
            reject("Wooops");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))