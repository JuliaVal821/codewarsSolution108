https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript

    function  calculateAge(birth, future) {
        let age = future - birth;
        if(age === 1) {return "You are 1 year old."}
        if(age > 1) {return `You are ${age} years old.`}
        if(age === 0) {return "You were born this very year!"}
        if(age === -1) {return "You will be born in 1 year."}
        else {return `You will be born in ${-age} years.` }
    }