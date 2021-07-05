const { mapLord } = require('./lords-mapper');

test('should map db rows to lord', () => {
    const result = mapLord({
        id: 1,
        name: "Lord Name",
        appears_on: "TV Series Seasons Where The Lord Appears"
    });

    expect(result.id).toBe(1);
    expect(result.name).toBe("Lord Name");
    expect(result.appearsOn).toBe("TV Series Seasons Where The Lord Appears");
});
