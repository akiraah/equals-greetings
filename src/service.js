const { emailGreeting, smsGreeting } = require('./greeting');

/**
 * Birthday service function containing behaviour for retrieving birthdays. 
 * @param {*} repository - 
 * @returns getBirthDayViaDate - returns a list of birthday greetings 
 */
const BirthdayService = (repository) => {
  /**
   * Database call to retrieve a list of birthday greetings
   * @param {*} date MM-dd format
   * @param {*} flag string - either "email" or "sms"
   * @returns [greetings]
   */
  const getBirthDayGreetings = async (date, flag) => {
    try {
      const users = await repository.getBirthdayByDate(date);
      if(flag === "email") {
        return users.map(user => emailGreeting(user.first_name))
      }
      if(flag === "sms") {
        return users.map(user => smsGreeting(user.first_name))
      }
      return []
    } catch (err) {
      console.log('error');
    }
  };
  return {
    getBirthDayGreetings
  }
}

module.exports = {
  BirthdayService
}