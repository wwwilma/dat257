/* This class is made to act as a constructor for an array that includes all the necessary
*  SQL query's to delete a selected user*/
const getDeleteUserQueryArray= (userID) => {


    const newUserQuery = `DELETE FROM database.Users where id=${userID};`;
    const newTrackersQuery = `DELETE FROM database.Trackers where userid=${userID};`;
    const newFavoritesQuery = `DELETE FROM database.FavoriteHabits where userid=${userID};`;

    return [newUserQuery, newTrackersQuery, newFavoritesQuery];
}

module.exports = {
    getDeleteUserQueryArray: getDeleteUserQueryArray
};