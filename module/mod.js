console.log("This is module file");

const avg = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

module.exports = {
    avg : avg,
    name : "Sanjay",
    rep : "GitHub"
};