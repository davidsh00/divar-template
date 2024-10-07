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
// side bar js
        document.querySelectorAll('.dropdown-toggles').forEach(item => {
        item.addEventListener('click', event => {
            
            event.preventDefault();
            
            
            document.querySelectorAll('.dropdown-desk').forEach(drop => {
                if (drop !== item.nextElementSibling) {
                    drop.style.display = 'none';
                    drop.previousElementSibling.classList.remove('active');
                }
            });
    
          
            const dropdownMenu = item.nextElementSibling;
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
                item.classList.remove('active');
            } else {
                dropdownMenu.style.display = 'block';
                item.classList.add('active');
            }
        });
    });
    // دسته ها
    document.querySelectorAll('.nav-items-links').forEach((link, index) => {
        link.addEventListener('mouseover', function() {
            document.querySelectorAll('.nav-item-desks').forEach((desk, deskIndex) => {
                desk.style.display = deskIndex === index ? 'flex' : 'none';
            });
        });
    });
btnNav.addEventListener('click', addClasList)
profileBtn.addEventListener('click', myProfile)
smMenueBtn.addEventListener('click', HambergerMenue)
locationBtn.addEventListener('click', locationBtnHandeler)
locationBtnSm.addEventListener('click', locationBtnHandelerSm)
myDivarBtnSm.addEventListener('click', mydivBtnSmHandeler)
