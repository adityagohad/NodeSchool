function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(item){
            return goodUsers.some(function(dude){
                return dude.id == item.id
            })
        });
    };
  }

module.exports = checkUsersValid