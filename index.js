// Code your solutions in this file
const countDown = (number) => {
    for (let i = number; i >= 0; i--)
    {
        console.log(i);
    }
}

const writeCards = (array) => {
    let messagesArray = [];
    for (let i = 0; i < array.length; i++)
    {
        messagesArray[i] = `Thank you, ${array[i]}, for the wonderful surprise gift!`;
    }
    return messagesArray;
}