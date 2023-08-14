const title = [
    "Heylper"
];

const subTitle = [
    "Please provide the informations asked",
    "Live Conversation",
    "Hello Captain"
];

const placeHolder = [
    "Provide YouTube URL(https://youtu.be/UXtrScuC30E) here",
    "Provide Phone Number(+91 9366641907) here"
];

const recipeName = "Barbecue Chips";

const instructions = [
    {
        "instruction": "Slice the potatoes with a knife.",
        "timestamp": "00:04"
    },
    {
        "instruction": "Wash the sliced potatoes.",
        "timestamp": "00:07"
    },
    {
        "instruction": "Lay the sliced potatoes out between two towels and let them dry for five minutes.",
        "timestamp": "00:10"
    },
    {
        "instruction": "Fry the sliced potatoes at 325 fahrenheit for about four minutes.",
        "timestamp": "00:14"
    },
    {
        "instruction": "Season the fried potatoes with granulated sugar, powdered sugar, smoked paprika, garlic powder, chili powder, onion powder and a little salt.",
        "timestamp": "00:17"
    }
]

const source = "https://youtube.com/shorts/gy8XTQzLRZ0?feature=share";

const conversations = [
    {
        "who" : "copilot",
        "message" : "The first step is to slice the potato with a knife.",
        "delay" : 7000,
        "current" : 1,
        "activity" : "Slicing"
    },
    {
        "who" : "pilot",
        "message" : "With a knife I sliced the potato",
        "delay" : 1000,
        "current" : 1,
        "activity" : "Slicing"
    },
    {
        "who" : "copilot",
        "message" : "Now wash the sliced potatoes.",
        "delay" : 1000,
        "current" : 2,
        "activity" : "Washing"
    },
    {
        "who" : "pilot",
        "message" : "I washed the potatoes",
        "delay" : 10000,
        "current" : 2,
        "activity" : "Washing"
    },
    {
        "who" : "copilot",
        "message" : "Did you wash the sliced potatoes?",
        "delay" : 1000,
        "current" : 2,
        "activity" : "Washing"
    },
    {
        "who" : "pilot",
        "message" : "Yes.",
        "delay" : 7500,
        "current" : 2,
        "activity" : "Washing"
    },
    {
        "who" : "copilot",
        "message" : "Ok, Lay the sliced potatoes out between two towels and let them dry for five minutes.",
        "delay" : 1000,
        "current" : 3,
        "activity" : "Drying"
    },
    {
        "who" : "pilot",
        "message" : "Laid the sliced potatoes between two towels",
        "delay" : 6000,
        "current" : 3,
        "activity" : "Drying"
    },
    {
        "who" : "copilot",
        "message" : "Let the sliced potatoes dry for five minutes.",
        "delay" : 1000,
        "current" : 3,
        "activity" : "Drying"
    },
    {
        "who" : "copilot",
        "message" : "Did you dried the sliced potatoes for five minutes?",
        "delay" : 15000,
        "current" : 3,
        "activity" : "Drying"
    },
    {
        "who" : "pilot",
        "message" : "Yeah",
        "delay" : 3000,
        "current" : 3,
        "activity" : "Drying"
    },
    {
        "who" : "copilot",
        "message" : "Now, fry the sliced potatoes at 325 fahrenheit for about four minutes.",
        "delay" : 1000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "pilot",
        "message" : "Do I have to add smoked paprika for the seasoning?",
        "delay" : 9000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "copilot",
        "message" : "Yes, you have to add smoked paprika for the seasoning.",
        "delay" : 1000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "copilot",
        "message" : "Now, fry the sliced potatoes at 325 fahrenheit for about four minutes.",
        "delay" : 3000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "pilot",
        "message" : "I fried the sliced potatoes.",
        "delay" : 9000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "copilot",
        "message" : "Did you fried the sliced potatoes at 325 fahrenheit for about four minutes?",
        "delay" : 1000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "pilot",
        "message" : "Yeah I fried like said.",
        "delay" : 4000,
        "current" : 4,
        "activity" : "Frying"
    },
    {
        "who" : "copilot",
        "message" : "Ok, season the fried potaotes with granulated sugar, powdered sugar, smoked paprika, garlic powder, chili powder, onion powder and a little salt.",
        "delay" : 1000,
        "current" : 5,
        "activity" : "Seasoning"
    },
    {
        "who" : "copilot",
        "message" : "Captain disconnected the call.",
        "delay" : 5000,
        "current" : 5,
        "activity" : "Seasoning"
    },
];