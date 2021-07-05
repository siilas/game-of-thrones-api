const service = require('./houses-service');

jest.mock('../repository/lords-repository', () => require('../mock/lords-repository-mock'));
jest.mock('../repository/houses-repository', () => require('../mock/houses-repository-mock'));

test('should validate name before create', () => {
    expect.assertions(3);

    service.createHouse({
        region: "House Region",
        foundedIn: "House Foundation Date",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field name is required.'));
    });

    service.createHouse({
        name: null,
        region: "House Region",
        foundedIn: "House Foundation Date",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field name is required.'));
    });

    service.createHouse({
        name: "",
        region: "House Region",
        foundedIn: "House Foundation Date",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field name is required.'));
    });
});

test('should validate region before create', () => {
    expect.assertions(3);

    service.createHouse({
        name: "House Name",
        foundedIn: "House Foundation Date",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field region is required.'));
    });

    service.createHouse({
        name: "House Name",
        region: null,
        foundedIn: "House Foundation Date",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field region is required.'));
    });

    service.createHouse({
        name: "House Name",
        region: "",
        foundedIn: "House Foundation Date",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field region is required.'));
    });
});

test('should validate foundedIn before create', () => {
    expect.assertions(3);

    service.createHouse({
        name: "House Name",
        region: "House Region",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field foundedIn is required.'));
    });

    service.createHouse({
        name: "House Name",
        region: "House Region",
        foundedIn: null,
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field foundedIn is required.'));
    });

    service.createHouse({
        name: "House Name",
        region: "House Region",
        foundedIn: "",
        currentLord: {
            id: 2,
            name: "Current Lord Name",
            appearsOn: "TV Series Seasons Where The Lord Appears"
        }
    }).catch(e => {
        expect(e).toEqual(new TypeError('Field foundedIn is required.'));
    });
});
