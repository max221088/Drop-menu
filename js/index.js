let ab = " ";
document.querySelectorAll('.drop-btn').forEach(function (el) {
    el.addEventListener('click', function () {
        this.parentNode.classList.toggle('active');
    });
});

document.querySelectorAll('a').forEach(function(li){
    li.addEventListener('click', function() {
     ab = document.querySelectorAll('.dop-menu.active');
     if (ab.length == 0) {
        this.nextElementSibling.classList.toggle('active')
     } else {
        document.querySelector('.dop-menu.active').classList.remove('active')
        this.nextElementSibling.classList.toggle('active');
     };
    });
});