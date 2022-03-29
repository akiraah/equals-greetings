const { BirthdayService } = require('./service');
const { BirthdayRepository } = require('./repository');
const { emailGreeting, smsGreeting } = require('./greeting');

describe('BirthdayService Test', () => {
  beforeEach(() => jest.clearAllMocks());
  const repo = BirthdayRepository({
    get: jest.fn().mockResolvedValue([
      {
        last_name: 'Doe',
        first_name: 'John',
        date_of_birth: '1982-10-08',
        email: 'john.doe@foobar.com',
      },
    ]),
  });
  it('should return a birthday email for 8th October', async () => {
    const service = BirthdayService(repo);
    const response = await service.getBirthDayGreetings('10-08', 'email');
    const expectedResult = emailGreeting('John');
    expect(response).toEqual([expectedResult]);
  });
  it('should return a birthday sms for 28th February', async () => {
    const service = BirthdayService(repo);
    const response = await service.getBirthDayGreetings('10-08', 'sms');
    const expectedResult = smsGreeting('John');
    expect(response).toEqual([expectedResult]);
  });
  it('should return empty list when no flag is specified', async () => {
    const service = BirthdayService(repo);
    const response = await service.getBirthDayGreetings('10-08', null);
    expect(response).toEqual([]);
  });
});
