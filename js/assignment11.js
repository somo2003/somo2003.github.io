const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

// const endpoint = 'https://date.nager.at/api/v2/publicholidays/2020/US';

async function getQuote() 
{
    // let text = await fetch(endpoint);
    // let response = await text.text();

    // let json_response = JSON.parse(response);

    // displayQuote(json_response['message']);

    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => displayQuote(data.message));
}

function displayQuote(x)
{
    document.getElementById('picture').src = x;
}

getQuote();