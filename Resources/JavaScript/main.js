const generateMessage = () =>{
    const greetings = ['Hello', 'Hey', 'Hi', 'Sup', 'Howdy', 'Greetings'];
    const colors = ['Orange', 'Red', 'Green', 'Blue', 'Purple', 'Yellow'];
    const hobbies = [
        'Watching movies',
        'Reading',
        'Gaming',
        'Playing sports',
        'Painting',
        'Hiking'
];

    const getRandomGreeting = Math.floor(Math.random() * greetings.length);
    const getRandomColor = Math.floor(Math.random() * colors.length);
    const getRandomHobby = Math.floor(Math.random() * hobbies.length);
    
    return `${greetings[getRandomGreeting]}, let me tell you about some random facts about me. My favorite color is ${colors[getRandomColor]} and one of my many hobbies is ${hobbies[getRandomHobby]}. `
    
};


console.log(generateMessage());
console.log(generateMessage());
console.log(generateMessage());