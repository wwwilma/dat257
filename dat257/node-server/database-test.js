const counterData = require('./database-connection');

counterData.getFavoriteHabits(1)
    .then((data) => {
        console.log('User data:');
        console.log(data);
    })
    .catch((err) => {
        console.error('Error while getting user data:');
        console.error(err);
    });