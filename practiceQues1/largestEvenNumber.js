
const largestEven = (array) => {
    const res = Math.max(...(array.filter((item)=>item%2===0)));
    return res === -Infinity ? -1 : res;
}

function largestEvenVersion2(array) {
    let max=-1;
    array.forEach(element => {
        if((element%2) === 0 && element > max) {
            max = element;
        }
    });
    return max;
}

console.log(largestEvenVersion2([1,2,3,4,5]));
