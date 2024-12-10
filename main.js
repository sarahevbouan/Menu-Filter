let sideBarMenu = document.querySelector('.side-bar > .categories');
let sideBarMenuChildren = document.querySelectorAll('.categories > p');
let menuList = document.querySelectorAll('.item-container > .item');
let searchBar = document.querySelector('input');

// Adds an active class to all menu list items once window loads
// This ensures we can use the keyup eventlistener on items once the window loads
window.addEventListener('load', () => {
    menuList.forEach(menu => {
        menu.classList.add('active');
    });
});
let name = 'sasa';
// Function for conditional filtering of menu list items based on the category clicked on
let filterFunction = (category, event) => {
    menuList.forEach(menu => {
        if(menu.classList.contains(category)){
            menu.style.display = 'block';
            menu.classList.add('active');

        }
        else{
            menu.style.display = 'none';
            menu.classList.remove('active');
        }
    });
};

// Underlines the active category
// Displays only menu list items for the clicked category
sideBarMenu.addEventListener('click', event => {
    sideBarMenuChildren.forEach(child => {
        if(event.target.id === child.id){
            child.classList.add('activate');
        }
        else{
            child.classList.remove('activate');
        }
    });
    if(event.target.id === 'ikea'){
        filterFunction('ikea');
    }
    else if(event.target.id === 'marcos'){
        filterFunction('marcos');
    }
    else if(event.target.id === 'caressa'){
        filterFunction('caressa');
    }
    else if(event.target.id === 'liddy'){
        filterFunction('liddy');
    }
    else if(event.target.id === 'all'){
        filterFunction('item');
    }
});


// Checks if the search term is contained within active list items
// Displays items that meet the above criteria
searchBar.addEventListener('keyup', () => {
   let newMenuList = document.querySelectorAll('.active');
    newMenuList.forEach(listItem => {
        let searchValue = searchBar.value.toLowerCase();
        let listContent = listItem.children[1].textContent.toLowerCase();

        if(listContent.includes(searchValue)){
            listItem.style.display = 'block';
        }
        else{
            listItem.style.display = 'none';
        }
        console.log(searchValue);
        
    });
});

