function newUser(name, age, country) {
    var name = name || 'Jose';
    var age = age || 31;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('Alejandro', 26, 'MX');

// Add params by default in funtion
function newAdmin(name = 'Paco', age = 81, country='CL') {
    console.log(name, age, country);
};
newAdmin();
newAdmin('Ana', 15, 'CO');