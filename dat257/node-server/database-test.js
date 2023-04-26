const counterData = require('./database-connection');

counterData.getUsers()
    .then((data) => {
        console.log('User data:');
        console.log(data);
    })
    .catch((err) => {
        console.error('Error while getting user data:');
        console.error(err);
    });

counterData.getUserName(1)
    .then((data) => {
        console.log('User data:');
        console.log(data);
    })
    .catch((err) => {
        console.error('Error while getting user data:');
        console.error(err);
    });