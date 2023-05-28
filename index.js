

function test(para1, para2) {
    console.log(para1);
    console.log(para2);
    para1();

};

/* test(() => {
    console.log("Hello") ;
}, 3) ;
*/

function receivesAFunction(para3) {
    para3();
};

const arrowFunction = () => {

console.log(`I am an arrowFunction`);

};

const returnsANamedFunction = function () {
    return arrowFunction ;
};

function returnsAnAnonymousFunction() {
    return function() {};
} 

const savedFunction = returnsANamedFunction();
console.log(savedFunction);
savedFunction();


