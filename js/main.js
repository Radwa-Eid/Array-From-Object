function MyArray() {
    this.item = {};
}

//Push
let index=0;
MyArray.prototype.push = function (item) {
    this.item [index]=item   
    index++;
}

//Pop()
MyArray.prototype.pop = function () {
    let index=Object.keys(this.item).length-1;
    delete this.item[index]
}

//Length
MyArray.prototype.length=function(){
    let index=Object.keys(this.item).length;
    console.log(index)
}
const arr = new MyArray();

// arr.push("Radwa")
// arr.push("Eid")
// arr.push("Rashad")
// arr.pop()
// arr.length();