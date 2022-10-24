const messages = [
    {
        message_id: 1,
        message: "Which generation do you belong to?"
    },
    {
        message_id: 2,
        message: "What do you currently do in life?"
    },
    {
        message_id: 3,
        message: "What is your deepest desire?"
    },
    {
        message_id: 4,
        message: "What,would you say, is your strongest quality?"
    },
    {
        message_id: 5,
        message: "What role do you play in your friendships?"
    },
    {
        message_id: 6,
        message: "How often do you work out?"
    },
    {
        message_id: 7,
        message: "Why did you take this test?"
    },
    {
        message_id: 8,
        message: "What do you dream about when you sleep?"
    },
    {
        message_id: 9,
        message: "If you were an animal, what would you be?"
    },
    {
        message_id: 10,
        message: "Do you have a bucket list?"
    },
    {
        message_id: 11,
        message: "Pancakes or waffles?"
    },
    {
        message_id: 12,
        message: "Who inspires you to be better?"
    },
    {
        message_id: 13,
        message: "Do you have any nicknames?"
    },
    {
        message_id: 14,
        message: "What was the best compliment you've ever received?"
    },
    {
        message_id: 15,
        message: "What is something you can never seem to finish?"
    },
    {
        message_id: 16,
        message: "What's your go-to dance move?"
    },
    {
        message_id: 17,
        message: "What story does your family always tell about you?"
    },
    {
        message_id: 18,
        message: "What is your theme song?"
    },
    {
        message_id: 19,
        message: "What bends your mind every time you think about it?"
    },
    {
        message_id: 20,
        message: "What languages do you speak?"
    }

]

const randomNumber = Math.floor(Math.random() * messages.length);

function generateRandomMessage(){
    console.log(`Message ${messages[randomNumber].message_id}: ${messages[randomNumber].message}`);
}

generateRandomMessage();