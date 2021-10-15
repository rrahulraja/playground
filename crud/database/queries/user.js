const { connection } = require("../index");

const findUserByUsername = (username) => {
//   connection.query(
//     "SELECT * from users where username=" + username,
//     function (error, results, fields) {
//       if (error) throw error;
//       console.log("The solution is: ", results[0].solution);
//     }
//   );

    return {
        'username': 'abc',
        'id': 1,
        'password': 'abc'
    }
};


module.exports = {
    findUserByUsername
}