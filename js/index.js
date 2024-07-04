$('.icon').on('click', function () {
    
    $('.navbar-hide').show(500)
    $('.icon').hide(0)
    $('.icon-x').show(0)
})
$('.icon-x').on('click', function () {
    
    $('.navbar-hide').hide(500)
    $('.icon-x').hide(0)
    $('.icon').show(0)
})

$('.nav-item a').on('click', function(e) {
const sectionId = $(e.target).attr("href")  
const sectionTop =  $(sectionId).offset().top
$('html , body').animate({scrollTop: sectionTop },1000)
  });
  
const singerConfig = {
  '.singer': '.about-singer',
  '.singer2': '.about-singer2',
  '.singer3': '.about-singer3',
  '.singer4': '.about-singer4'
};

Object.keys(singerConfig).forEach(key => {
  $(key).on('click', function() {
    const currentValue = $(singerConfig[key]).css('display');
    Object.values(singerConfig).forEach(value => $(value).slideUp(500));
    if (currentValue === 'none') {
      $(singerConfig[key]).slideToggle(500);
      setTimeout(function() {
        $(singerConfig[key]).slideUp(500);
      }, 5000);
    }
  });
});

const countdownElementDay = document.getElementById('day');
const countdownElementHours = document.getElementById('hours');
const countdownElementMin = document.getElementById('min');
const countdownElementSeconds = document.getElementById('seconds');

const targetDate = new Date('2025-05-31T00:00:00.000Z'); 

function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdownElementDay.innerText = `${days} Days`;
  countdownElementHours.innerText = `${hours} Hours`;
  countdownElementMin.innerText = `${minutes} Minutes`;
  countdownElementSeconds.innerText = `${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000); 



const inputField = document.getElementById('exampleFormControlTextarea1');
const messageElement = document.getElementById('character');

let characterCount = 100;
messageElement.innerText = `${characterCount} characters remaining`;

inputField.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  const inputLength = inputValue.length;

  if (inputLength > 100) {
    e.target.value = inputValue.substring(0, 100);
  }

  characterCount = 100 - inputLength;

  if (characterCount >= 0) {
    messageElement.innerText = `${characterCount} characters remaining`;
  } else {
    messageElement.innerText = `Character limit reached 100 you can't typing !!!`;
  }
});