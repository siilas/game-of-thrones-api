const { mapHouse } = require('./houses-mapper');

test('should map db rows to house', () => {
    const result = mapHouse({
        id: 1,
        name: "House Name",
        region: "House Region",
        founded_in: "House Foundation Date",
        current_lord: 2,
        lord: "Current Lord Name",
        appears_on: "TV Series Seasons Where The Lord Appears"
    });

    expect(result.id).toBe(1);
    expect(result.name).toBe("House Name");
    expect(result.region).toBe("House Region");
    expect(result.foundedIn).toBe("House Foundation Date");
    expect(result.currentLord.id).toBe(2);
    expect(result.currentLord.name).toBe("Current Lord Name");
    expect(result.currentLord.appearsOn).toBe("TV Series Seasons Where The Lord Appears");
});

test('should map current lord empty when null on database', () => {
    const result = mapHouse({
        id: 1,
        name: "House Name",
        region: "House Region",
        founded_in: "House Foundation Date",
        current_lord: null,
        lord: null,
        appears_on: null
    });

    expect(result.id).toBe(1);
    expect(result.name).toBe("House Name");
    expect(result.region).toBe("House Region");
    expect(result.foundedIn).toBe("House Foundation Date");
    expect(result.currentLord.id).toBe("");
    expect(result.currentLord.name).toBe("");
    expect(result.currentLord.appearsOn).toBe("");
});
