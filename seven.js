function reduce(arr, fn, initial) {
    if(arr.length > 0){
        initial = fn(initial, arr[0], 0, arr);
        return reduce(arr.slice(1), fn, initial);
    }else{
        return initial;
    }   
}

module.exports = reduce