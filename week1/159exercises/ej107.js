function arr_pairs(arr) {
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
                result++;
            }
        }
    }

    return result;
}


console.log(arr_pairs([1, 2, 3])); 
console.log(arr_pairs([2, 4, 6])); 
console.log(arr_pairs([2, 4, 16]));
console.log(arr_pairs([1, 2, 3, 4, 5]));