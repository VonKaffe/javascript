let input = prompt("Please enter a number: ");



function roughScale(x, base) {
    var parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0 }
    return parsed * 100;
}

console.log(roughScale(' 0xF', 16));


console.log(roughScale('321', 2));


