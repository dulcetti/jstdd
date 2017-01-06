module.exports = {
    "extends": "airbnb",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "linebreak-style": [
            0
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
