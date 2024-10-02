let btnNav = document.querySelector('#btn-navbar')
let profileBtn = document.getElementById('my-profile-btn')
let dropdowncCntent = document.querySelector('.dropdown-content')
let profileContent = document.querySelector('.my-dropdown-content')
let aboutdropdown = document.querySelector('.dropdown-links-one')
let smMenueBtn = document.getElementById('sm-menue-btn')
let smMenue = document.querySelector('.sm-manue')
// location btn
let locationBtn = document.querySelector('#location-btn')
let locationContent = document.querySelector('.location-content')
// location btn sm 
let locationBtnSm = document.querySelector('#location-btn-sm')
let locationContentSm = document.querySelector('.location-content-sm')
// my div sm
let myDivarBtnSm = document.querySelector('#my-div-btn-sm')
let myDivContent = document.querySelector('.my-div-content-sm')
// Box menue
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
function locationBtnHandeler () {
    locationContent.classList.toggle('dis-flex')
}

function locationBtnHandelerSm () {
    locationContentSm.classList.toggle('flex-display')
}
function mydivBtnSmHandeler () {
    myDivContent.classList.toggle('flex-display')
}
function openBoxHandeler1 () {
    boxMenu1.classList.toggle('dis-block')
}
function openBoxHandeler2 () {
    boxMenu2.classList.toggle('dis-block')
}
function showContent(num) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.getElementById('content' + num).classList.toggle('active');
}

btnNav.addEventListener('click', addClasList)
profileBtn.addEventListener('click', myProfile)
smMenueBtn.addEventListener('click', HambergerMenue)
locationBtn.addEventListener('click', locationBtnHandeler)
locationBtnSm.addEventListener('click', locationBtnHandelerSm)
myDivarBtnSm.addEventListener('click', mydivBtnSmHandeler)
