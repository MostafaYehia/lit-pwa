import { memoize } from 'lodash-decorators'

class Component {

    @memoize
    fib(n) {
        console.log("Calculating: ", n)
        if (n === 1 || n === 2)
            return 1;
        return this.fib(n - 1) + this.fib(n - 2);
    }


}


const inst = new Component();

console.log("Fibo for 18 is: ", inst.fib(18))