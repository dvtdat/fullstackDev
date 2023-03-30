const myObj = {
    num: 100,
    method1() {
        return this.num + 10;
    },
    method2() {
        this.num = this.num + 100;
    }
}

console.log(myObj.num);
console.log(myObj.method1());

myObj.method2();
console.log(myObj.num);
