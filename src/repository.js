/**
 * BirthdayRepository contains database related behaviours
 * @param {*} databaseConnector - connectors from various databases can be used.
 * @returns Resolved list of results
 */
const BirthdayRepository = (databaseConnector) => {
  const getBirthdayByDate = async (date) => {
    const statement = `SELECT * FROM birthdays WHERE MATCH(date_of_birth) = ?, ${date}`
    try {
      const results = await databaseConnector.get(statement);
      return results;
    } catch (err) {
      console.log(err.message)
      throw err
    }
  };
  return {
    getBirthdayByDate,
  };
};

module.exports = {
  BirthdayRepository,
};
