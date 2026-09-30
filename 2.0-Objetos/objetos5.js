function phoneticLookup(val) {
    let result = "";

    // Sólo cambia el código por debajo de esta línea
const loockup = {
"alpha": "Adams",
"bravo": "Boston",
"charlie": "Chicago",
"delta": "Denver",
"echo": "Easy",
"foxtrot": "Frank",
    }

    // Sólo cambia el código por encima de esta línea
    return  loockup[val];
}

const value = phoneticLookup("charlie")
console.log(value); // Chicago