//Using Destructuring Assignment to Pass an Object as a Function's Paramenter

const stats = 
{
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};


const half = (function ()

{
    return function half({max, min}) {
        (max + min) / 2.0;
    };
}) ();

console.log(stats);
console.log(half(stats));

//Actually haaaa!!!!!!!!!! Don't even know if it worked