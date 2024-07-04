let copySlideNews = document.querySelector('.slider-list').cloneNode(true);
document.querySelector('.slider').appendChild(copySlideNews);

let copySliderSoc = document.querySelector('.soc_slider_list').cloneNode(true);
document.querySelector('.sliderSoc').appendChild(copySliderSoc);

let userName = document.getElementsByClassName("login")[0];
let userPas = document.getElementsByClassName("password")[0];
const buttonReg = document.querySelectorAll('.button-reg');
const forma = document.querySelector('.forma');
const reply = document.querySelector('.reply-container');


const header = document.querySelector('.intro-header');
const arrowTopScroll = document.querySelector('.scrollTopButton');
const intro = document.querySelector('.section-home');

const navItem = document.querySelector('.ni-log');

const dataMass = [];

const body = document.querySelector('body');



function logIn(){
	if(dataMass.length == 0){
		forma.classList.add('active');
		body.classList.add('active');
	}
}

navItem.addEventListener("click", logIn);

for(let i = 0;i < buttonReg.length; i++){
	buttonReg[i].addEventListener("click", namechange);
}

function visHeader(){
	if(document.documentElement.scrollTop >= intro.scrollHeight){
		header.classList.add("active");
		arrowTopScroll.classList.add("active");
	}
	else{
		header.classList.remove("active");
		arrowTopScroll.classList.remove("active");
	}
}

setInterval(visHeader, 100);


function namechange(){
		userName = document.getElementsByClassName("login")[0].value;
		userPas = document.getElementsByClassName("password")[0].value;
		if (userName.length >= 3 && userPas.length >= 8){
			dataMass.push(userName, userPas);
			document.querySelector('.hidden-area a').innerHTML = userName;
			forma.classList.remove('active');
			body.classList.remove('active');
			document.querySelector('.hidden-area a').href = "../18.html";
		}	if(userName.length < 3 && userPas.length >= 8) {
			reply.innerHTML = "Ваш ник маленький. Он должен быть не менее 3 символов."
		} if(userName.length >= 3 && userPas.length < 8) {
			reply.innerHTML = "Ваш пароль маленький. Он должен быть не менее 8 символов."
		} if(userName.length < 3 && userPas.length < 8) {
			reply.innerHTML = "Ваш пароль и ник слишком малы."
		}
}

// настройки
let options = {
	root: null,
	rootMargin:"0px",
	threshold:0.25
}

// функция обратного вызова
let callback = function(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting){
			console.log('find', entry);
			outNum(num, 'out-1');
			outNum(numTwo, 'out-2');
			outNum(numThree, 'out-3');
			entry.target.classList.add("active");
			header.classList.add('active');
		}
	})
}

// сам наблютатель
let observer = new IntersectionObserver(callback, options)

// определяет наблюдаемы элементы
let targets = document.querySelectorAll('.ha');
targets.forEach(target => {
	observer.observe(target);
});

const num = 3000;
const numTwo = 6000;
const numThree = 1000;
const time = 5000;
const step = 10;

function outNum(num, elem){
	let l = document.querySelector('#' + elem);
	n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if(n >= num){
			clearInterval(interval);
			l.innerHTML = num;
		}else{
			l.innerHTML = n;
		}
	}, t)
}

const wrappMod = document.querySelector('.wrapper-mod');
const modAbout = document.querySelector('.about');
const modContact = document.querySelector('.contact');
const buttonAbout = document.querySelector('.footer-about');
const buttonContact = document.querySelector('.footer-contact');
const buttonCloseMod = document.querySelectorAll('.cross');

const contArticle = document.querySelector('.container-article');
const modSupport = document.querySelector('.mod-support');
const buttonModSupport = document.querySelector('.support');
const winMin = document.querySelector('.win-minimize');
const supportArea = document.querySelector('.support-area');
const supportSendButtton = document.querySelector('.support-button-send');

let supportAreaVal;
let SupportProblems = [];

function openWrappModAbout(){
	wrappMod.classList.add('active');
	modAbout.classList.add('active');
}

function closeWrappModAbout(){
	wrappMod.classList.remove('active');
	modAbout.classList.remove('active');
}


function openWrappModContact(){
	wrappMod.classList.add('active');
	modContact.classList.add('active');
}

function closeWrappModContact(){
	wrappMod.classList.remove('active');
	modContact.classList.remove('active');
}


function openSupportMod(){
	contArticle.classList.add('active');
}
function closeSupportMod(){
	contArticle.classList.remove('active');
}

function SendSupport(){
	supportAreaVal = supportArea.value;
	
	if(dataMass.length == 0){
		alert("Сначала авторизуйся!")
		logIn();
		closeSupportMod();
	}else{
		SupportProblems.push(dataMass[0],supportAreaVal)
		alert(SupportProblems);
	}
	if(supportAreaVal == ""){
		alert("Тут пусто!")
	}
}

buttonAbout.addEventListener('click', openWrappModAbout);
buttonCloseMod[0].addEventListener('click', closeWrappModAbout);

buttonContact.addEventListener('click', openWrappModContact);
buttonCloseMod[1].addEventListener('click', closeWrappModContact);

buttonModSupport.addEventListener('click', openSupportMod);
winMin.addEventListener('click', closeSupportMod);

supportSendButtton.addEventListener('click', SendSupport);