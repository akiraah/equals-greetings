# Equals Money - Birthday Greetings

## Info

This app is meant to simulate an production api where you can inject dependencies for means of persistence.

As of currently, no real world libraries are used for persistence.

## Execution

`yarn test`

Flow -

1. Request is transmitted to the handler to the route
   `/api/birthdayGreetings?date=10-08&medium=email`
2. Depending on the medium `sms` or `email` you should get a list of greetings if there are more than one person with the same birthday.
