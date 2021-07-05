const service = require('./lords-service');

jest.mock('../repository/lords-repository', () => require('../mock/lords-repository-mock'));

test('should validate name before create', async () => {
    expect.assertions(3);

    service.createLord({
        appearsOn: "TV Series Seasons Where The Lord Appears"
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field name is required.'));
    });

    service.createLord({
        name: null,
        appearsOn: "TV Series Seasons Where The Lord Appears"
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field name is required.'));
    });

    service.createLord({
        name: "",
        appearsOn: "TV Series Seasons Where The Lord Appears"
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field name is required.'));
    });
});

test('should validate appearsOn before create', () => {
    expect.assertions(3);

    service.createLord({
        name: "Lord Name"
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field appearsOn is required.'));
    });

    service.createLord({
        name: "Lord Name",
        appearsOn: null
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field appearsOn is required.'));
    });

    service.createLord({
        name: "Lord Name",
        appearsOn: ""
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field appearsOn is required.'));
    });
});
