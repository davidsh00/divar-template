let btnNav = document.querySelector('#btn-navbar')
let profileBtn = document.getElementById('my-profile-btn')
let dropdowncCntent = document.querySelector('.dropdown-content')
let profileContent = document.querySelector('.my-dropdown-content')
let aboutdropdown = document.querySelector('.dropdown-links-one')
let smMenueBtn = document.getElementById('sm-menue-btn')
let smMenue = document.querySelector('.sm-manue')

function addClasList () {
    dropdowncCntent.classList.toggle('dis-block')
}
function myProfile () {
    profileContent.classList.toggle('dis-flex')            
}
function HambergerMenue () {
    smMenue.classList.toggle('dis-grid')
}

btnNav.addEventListener('click', addClasList)
profileBtn.addEventListener('click', myProfile)
smMenueBtn.addEventListener('click', HambergerMenue)