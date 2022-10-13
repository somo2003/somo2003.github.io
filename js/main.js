const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, way too hot for :insertx: to go on a walk. Staying inside watching :inserty:, they became bored and thought about all the summer activities. With all these options, :insertx: decided to :insertz:. Bob came over after a day of trying to move their couch that weighs 300 pounds and they had a wonderful afternoon together. After all, it was a hot day.";
let insertX = ["Benedict Cumberbatch", "Bugsy McGee", "Charles Entertainment Cheese"];
let insertY = ["Cake Boss","Hannah Montana reruns","The Office"];
let insertZ = ["go the the pool", "go for ice cream", "paint"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);

    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14).toString() + ' stones';
        const temperature =  Math.round((94-32)/1.8).toString() +' centigrade';
        newStory = newStory.replace('300 pounds',weight);
        newStory =  newStory.replace('94 fahrenheit',temperature)

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

