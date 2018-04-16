function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function(fruits,fruit){
        if(fruit in fruits){
            fruits[fruit]++;
        }else{
            fruits[fruit] = 1;
        }
        return fruits;
    },{});
}

module.exports = countWords