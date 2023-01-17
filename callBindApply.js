const person = {
    firstName : 'Sukhman',
    lastName : 'Singh',
    fullName : function () {
        return this.firstName + ' ' +this.lastName;
    },
}

const member = {
    firstName : 'John',
    lastName : 'Doe',
}

function abc(n,d) {
    this.x=n;
    this.y=d
}
arr1 = [1,2]

abc.call(person,10,15);
abc.apply(member,[10,15]);

let array = [1,2,3,4]

function spread()  {
    for(let i=0;i<arguments.length;i++) {
        this.push(arguments[i]);
    }
}
spread.apply(array,[5,6,7,8,9,10]);
// array

const  o = {
    a:1,
    b:2,
    __proto__ : {
        c : 3,
        d : 4,
        __proto__ : {
            e : 5
        }
    }
}


const divide  = (x,y) => {
    if(y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return Math.floor(x/y);
}
console.log(divide(2,0));



