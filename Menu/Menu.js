/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
//create element
function createMenu(arr) {

  //create elements
  let menu = document.createElement('div');
  const ul = document.createElement('ul');

  // Setup structure of elements
  menu.appendChild(ul);

  // set class names
  menu.classList.add('menu');

  //loop through array and add li
  arr.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    ul.appendChild(listItem);
  });
  //creating a event listener
  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', e => {
    menu.classList.toggle('menu--open');
  });
  return menu;
}
const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));
