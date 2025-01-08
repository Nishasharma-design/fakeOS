const desktopIcons = document.querySelectorAll('.desktop_icon img');
const modal = document.querySelector('.modal');
const displayModal = document.getElementById('display-modal');

desktopIcons.forEach(eachIcon => {
    eachIcon.addEventListener('click', () => {
    modal.classList.add('active');
    const iconName = eachIcon.querySelectorAll('figcaption').textContent;
    //const iconName = document.querySelectorAll('.desktop_icon figcaption').innerText;
    displayModal.innerText = `You opened the ${iconName} app`;
    });
});

const whatsTheDayToday = () => {

const todaysDate = document.querySelector('h3');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const todayDate = `${day}/${month}/${year}`;

todaysDate.innerText = todayDate;
};

setInterval(whatsTheDayToday, 1000);
whatsTheDayToday();

const whatsTheTime = document.getElementById('what_is_the_time_now');

const displayTime = () => {
    const timeNow = new Date();
    whatsTheTime.textContent = timeNow.toLocaleTimeString();
};

//setTimeout schedules a single execution after a specified delay, while setInterval repeatedly executes a function with a fixed interval.

setInterval(displayTime, 1000);
displayTime();

const closeTheApp = document.querySelector('.close-the-app');

closeTheApp.addEventListener('click', () => {
         modal.classList.remove('active');
});

//menu-display
const navEl = document.createElement('nav');
navEl.textContent = 'Here is the Menu';
navEl.classList.add('menu');

/*const whereIsMenu = document.createElement('div');
whereIsMenu.textContent = 'Menu';
whereIsMenu.classList.add('menu-heading'); */

const filesDiv = document.createElement('div');
filesDiv.textContent = 'Files';
filesDiv.classList.add('menu-item');

const messagesDiv = document.createElement('div');
messagesDiv.textContent = 'Messages';
messagesDiv.classList.add('menu-item');

const facebookDiv = document.createElement('div');
facebookDiv.textContent = 'Facebook';
facebookDiv.classList.add('menu-item');

navEl.appendChild(filesDiv);
navEl.appendChild(messagesDiv);
navEl.appendChild(facebookDiv);

document.body.appendChild(navEl);




//working-facebook-icon
const facebookIconDisplay = document.querySelector('.facebook-icon img');
const modalContent = document.querySelector('.modal .content'); //this is where i want my data from API to appear

const fetchData = async () => {
    try {
         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single') 
         const data = await response.json();
         modalContent.textContent = data.joke; 
    } catch (error) {
        modalContent.textContent = "Error fetching data.";
    }
};

facebookIconDisplay.addEventListener('click', () => {
    fetchData();
    modal.classList.add('active');
});

