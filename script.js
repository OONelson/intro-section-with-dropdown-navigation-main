const hoverFeature = document.querySelector('.hover-features');
const hoverContacts = document.querySelector('.hover-contacts');
const featureCard = document.querySelector('.features-card');
const contactCard = document.querySelector('.contacts-card');
const arrowUpOne = document.querySelector('.upmain');
const arrowDownOne = document.querySelector('.downmain');
const arrowUp = document.querySelector('.upmainn');
const arrowDown = document.querySelector('.downmainn');

hoverFeature.addEventListener('click', () => {
	featureCard.classList.toggle('displaycard');
	arrowDownOne.classList.toggle('displayoff');
	arrowUpOne.classList.toggle('displaycard');
});
hoverContacts.addEventListener('click', () => {
	contactCard.classList.toggle('displaycard');
	arrowDown.classList.toggle('displayoff');
	arrowUp.classList.toggle('displaycard');
});

//SIDE MENU FOR MOBILE
const closeMenu = document.querySelector('.close-menu');
const sideMenu = document.querySelector('.side-menu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', () => {
	sideMenu.classList.add('displaycard');
});
closeMenu.addEventListener('click', () => {
	sideMenu.classList.remove('displaycard');
});

const sideMenuFeatures = document.querySelector('.side-menu-features');
const sideMenuContact = document.querySelector('.side-menu-contacts');
const sideMenufeaturesCard = document.querySelector('.Features-card');
const sideMenuContactsCard = document.querySelector('.contacts');
const sideMenuFeaturesArrowUp = document.querySelector('.side-menu__arrowup');
const sideMenuFeaturesArrowDown = document.querySelector(
	'.side-menu__arrowdown'
);

sideMenuFeatures.addEventListener('click', () => {
	sideMenufeaturesCard.classList.toggle('displaycard');
	sideMenuFeaturesArrowDown.classList.toggle('displayoff');
	sideMenuFeaturesArrowUp.classList.toggle('displaycard');
});

const contactsArrowup = document.querySelector('.contacts-arrowup');
const contactsArrowdown = document.querySelector('.contacts-arrowdown');

sideMenuContact.addEventListener('click', () => {
	sideMenuContactsCard.classList.toggle('displaycard');
	contactsArrowdown.classList.toggle('displayoff');
	contactsArrowup.classList.toggle('displaycard');
});
