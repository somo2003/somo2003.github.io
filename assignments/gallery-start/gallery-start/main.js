const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgNames  = ['./images/pic1.jpg','./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg'];

/* Declaring the alternative text for each image file */

const altText = ['eye','shell waves','flowers','Egyptian painting','moth'];

/* Looping through images */

for(let i = 0; i < imgNames.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgNames[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {displayedImage.src = e.target.src;displayedImage.alt = e.target.alt;});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') 
    {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    else 
    {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
