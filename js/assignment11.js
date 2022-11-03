const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'http://movie-quotes-app.herokuapp.com/api';

async function getQuote() 
{
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);

    displayQuote(json_response['message']);
}

function displayQuote(x)
{
    document.getElementById('js-quote-text').textContent = x;
}

getQuote();