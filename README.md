# game-of-thrones-api
Game of Trones API to manage the houses of Westeros

## Tests

```
npm test
```

## Build

```
docker-compose build
```

## Run

```
docker-compose up
```

## Requests

### Houses

```
POST /lords

{
    "name": "House Name",
    "region": "House Region",
    "foundedIn": "House Foundation Date",
    "currentLord": {
        "id": "Current Lord Identification"
    }
}
```

### Lords

```
POST /lords

{
    "name": "Lord Name",
    "appearsOn: "TV Series Seasons Where The Lord Appears"
}
```

## Future Improvements

1. Add more tests and fix mocks;
1. Write better docs (README, CONTRIBUTING, CHANGELOG);
1. Create a POSTMAN collection for tests;
1. Remove hardcoded configurations;
1. A lot of stuffs :/