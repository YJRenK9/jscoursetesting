const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $21.99', 'Oatmeal - $9', 'Frittata - $16'];
const mainCourseMenu = ['Steak - $24', 'Pasta - $19.99', 'Burger - $14.99', 'Salmon - $15.65'];
const dessertMenu = ['Cake - $17.99', 'Ice Cream - $10.99', 'Pudding - $7.99', 'Jello - $6.99'];

// use map function to return a copy of the array of items in p tags, then use join('') to reduce the array into a string
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
// display the breakfast menu items on the webpage
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;Item