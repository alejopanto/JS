function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* getId(michis) {
  for (let index = 0; index < michis.length; index++) {
    yield index+1
  }
}

const michis = getId(['a', 'b', 'c'])
console.log(michis.next().value);
console.log(michis.next().value);
console.log(michis.next().value);
console.log(michis.next().value);