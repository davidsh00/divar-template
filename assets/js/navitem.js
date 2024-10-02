function showSubLinks(num) {
    document.querySelectorAll('.sub-links').forEach(item => item.classList.remove('display'));
    document.getElementById('sub' + num).classList.toggle('display');
}