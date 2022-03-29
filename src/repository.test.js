const { BirthdayRepository } = require('./repository');

describe('BirthdayRepository Test', () => {
  const mockGetQuery = jest.fn();
  const stubbedDatabaseConnector = { get: mockGetQuery };
  beforeEach(() => jest.clearAllMocks())
  it('should return a list of results from the database', async () => {
    mockGetQuery.mockResolvedValue([
      {
        last_name: 'Doe',
        first_name: 'John',
        date_of_birth: '1982-10-08',
        email: 'john.doe@foobar.com',
      },
    ]);
    const { getBirthdayByDate } = BirthdayRepository(stubbedDatabaseConnector);
    const results = await getBirthdayByDate('10-08');

    expect(mockGetQuery).toBeCalledTimes(1);
    expect(mockGetQuery).toBeCalledWith("SELECT * FROM birthdays WHERE MATCH(date_of_birth) = ?, 10-08")
    expect(results).toEqual([
      {
        last_name: 'Doe',
        first_name: 'John',
        date_of_birth: '1982-10-08',
        email: 'john.doe@foobar.com',
      },
    ]);
  });
  it('should throw an error when querying the database', async () => {
    mockGetQuery.mockImplementation(() => {
        throw new Error()
    })
    const { getBirthdayByDate } = BirthdayRepository(stubbedDatabaseConnector);
    expect(mockGetQuery).toBeCalledTimes(0)
    await expect(getBirthdayByDate()).rejects.toMatchObject(new Error())
  })
});
