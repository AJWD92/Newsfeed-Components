/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function navMenu(arr) {
  const nav = document.createElement('div');
  nav.classList.add('menu');
  const navList = document.createElement('ul');
  navList.tagName = ul;
  navList.classList.add('menu');
  const students = document.createElement('li');
  students.textContent = li;
  students.classList.add('menu');
  const faculty = document.createElement('li');
  faculty.textContent = li;
  faculty.classList.add('menu');
  const whatsNew = document.createElement('li');
  whatsNew.textContent = li;
  whatsNew.classList.add('menu');
  const tech = document.createElement('li');
  tech.textContent = li;
  tech.classList.add('menu');
  const music = document.createElement('li');
  music.textContent = li;
  music.classList.add('menu');
  const logOut = document.createElement('li');
  logOut.textContent = li;
  logOut.classList.add('menu');

  nav.appendChild(navList);
  navList.appendChild(students);
  navList.appendChild(faculty);
  navList.appendChild(whatsNew);
  navList.appendChild(tech);
  navList.appendChild(music);
  navList.appendChild(logOut);

  const navBtn = document.querySelector('.menu-button');
  navBtn.addEventListener('click', () => {
    navList.classList.toggle('menu-open');
  });

  return navMenu;
}

document.createElement(navBtn);
