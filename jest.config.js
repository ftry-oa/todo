module.exports = {
    // moduleFileExtensions: ['js', 'json', 'node', 'html', 'css'],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
};