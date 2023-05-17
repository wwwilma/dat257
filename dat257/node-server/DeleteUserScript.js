const getDeleteUserQueryArray= (userID) => {


    const newUserQuery = `DELETE FROM database.Users where id=${userID};`;
    const newTrackersQuery = `DELETE FROM database.Trackers where userid=${userID};`;
    const newFavoritesQuery = `DELETE FROM database.FavoriteHabits where userid=${userID};`;

    return [newUserQuery, newTrackersQuery, newFavoritesQuery];
}

module.exports = {
    getDeleteUserQueryArray: getDeleteUserQueryArray
};