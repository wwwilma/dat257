/* This class is made to act as a constructor for an array that includes all the necessary
*  SQL query's to create a new user*/
const getNewUserQueryArray= (newUserID, newUserName) => {
    //This function generates the query for the database.Users table
    function GenerateNewUserQuery(newUserID, newUserName) {
        return `INSERT INTO database.users VALUES (${newUserID}, '${newUserName}');`;
    }

    //This function generates the query for the database.Trackers table with the dates set between 2023-01-01 and 2023-12-31
    function GenerateNewTrackersQuery(newUserID) {
        const startDate = new Date("2023-01-01");
        const endDate = new Date("2023-12-31");
        const habits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let insertStatements = "INSERT INTO database.Trackers (userid, habitid,date,counter) VALUES";

        for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
            const dateString = currentDate.toISOString().split("T")[0];
            for (const habit of habits) {
                insertStatements += `(${newUserID}, ${habit},'${dateString}',0),`;
            }
        }
        return insertStatements.slice(0, -1) + ";"
    }

//This function generates the query for the database.FavoriteHabits table
    function GenerateNewFavoritesQuery(newUserID) {
        const habitIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let insertStatements = "INSERT INTO database.FavoriteHabits (userid, habitid,favorite) VALUES";
        for (const habitId of habitIds) {
            insertStatements += `(${newUserID}, ${habitId},true),`;
        }

        return insertStatements.slice(0, -1) + ";"
    }

    const newUserQuery = GenerateNewUserQuery(newUserID, newUserName);
    const newTrackersQuery = GenerateNewTrackersQuery(newUserID);
    const newFavoritesQuery = GenerateNewFavoritesQuery(newUserID);

    return [newUserQuery, newTrackersQuery, newFavoritesQuery];
}

module.exports = {
    getNewUserQueryArray: getNewUserQueryArray
};