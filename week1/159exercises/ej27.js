function javastarts(str){
    if(str.length < 4){
        return false;
    }
    if(str.substring(0,4) === "Java"){
        return true;
    }else{
        return false;
    } 
}

console.log(javastarts("javaScript")); // Output: false
console.log(javastarts("JavaScript")); // Output: true
console.log(javastarts("Java")); // Output: true
console.log(javastarts("python")); // Output: false

