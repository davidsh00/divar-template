let btnNav = document.querySelector('#btn-navbar')
let profileBtn = document.getElementById('my-profile-btn')
let dropdowncCntent = document.querySelector('.dropdown-content')
let profileContent = document.querySelector('.my-dropdown-content')
let aboutdropdown = document.querySelector('.dropdown-links-one')
let smMenueBtn = document.getElementById('sm-menue-btn')
let smMenue = document.querySelector('.sm-manue')
let amlakMenu = document.getElementById('menu-amlak')
let Vehicles = document.getElementById('Vehicles')
let boxMenu1 = document.querySelector('.about-link-menue1')
let boxMenu2 = document.querySelector('.about-link-menue2')

function addClasList () {
    dropdowncCntent.classList.toggle('dis-block')
}
function myProfile () {
    profileContent.classList.toggle('dis-flex')            
}
function HambergerMenue () {
    smMenue.classList.toggle('dis-grid')
}
function openBoxHandeler1 () {
    boxMenu1.classList.toggle('dis-block')
}
function openBoxHandeler2 () {
    boxMenu2.classList.toggle('dis-block')
}

btnNav.addEventListener('click', addClasList)
profileBtn.addEventListener('click', myProfile)
smMenueBtn.addEventListener('click', HambergerMenue)
amlakMenu.addEventListener('click', openBoxHandeler1)
Vehicles.addEventListener('click', openBoxHandeler2)