function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        submittedUsers.every(function(item){
            goodUsers.some(function(dude){
                dude.id == item.id;
            })
        });
    };
}

module.exports = checkUsersValid