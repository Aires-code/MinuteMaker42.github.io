let possibleResponses = [
    'hi',
    'hello',
];

function generate() {
    reset();

    let response = getRandomItem(possibleResponses);
    
    setTimeout(() => 
    {
          document.getElementById("content").innerHTML = response; 
    }, 200);
}

function reset() {
    document.getElementById("content").innerHTML = "...";
}

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
