const emailGreeting = (name) => 'Subject: Happy Birthday!\n' + '\nHappy birthday, dear ' + name
const smsGreeting = (name) => `Happy birthday, dear ${name}`

module.exports = {
    emailGreeting,
    smsGreeting
}