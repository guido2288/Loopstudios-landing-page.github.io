const hambBtn = document.getElementById('hambBtn');
const responsiveNav = document.getElementById('responsiveNav');
const closeBtn = document.getElementById('closeBtn');


hambBtn.addEventListener('click' , function() {

    responsiveNav.classList.remove('responsiveNav');
    responsiveNav.classList.add('show');

});


closeBtn.addEventListener('click' , function() {

    responsiveNav.classList.remove('show');
    responsiveNav.classList.add('responsiveNav');

});