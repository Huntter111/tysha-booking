// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';
//!  Added on click to button in block FAQ
document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.faq')) {
		const faqButton = document.querySelector('.faq__button');
		const faqItems = document.querySelectorAll('.faq-spollers__item');
		let displayedQuestions = 4; // Починаємо з чотирьох питань, які вже відображені

		// Ховаємо всі питання, що не відображені
		for (let i = displayedQuestions; i < faqItems.length; i++) {
			faqItems[i].style.display = 'none';
		}

		faqButton.addEventListener('click', function () {
			addMoreQuestions();
		});

		function addMoreQuestions() {
			const remainingQuestions = faqItems.length - displayedQuestions;
			const questionsToAdd = Math.min(4, remainingQuestions); // Додаємо максимум 4 питання або менше, якщо залишилося менше

			for (let i = displayedQuestions; i < displayedQuestions + questionsToAdd; i++) {
				faqItems[i].style.display = 'block';
			}

			displayedQuestions += questionsToAdd;

			// Приховуємо кнопку "Більше запитань", якщо не залишилося більше питань для відображення
			if (displayedQuestions >= faqItems.length) {
				faqButton.style.display = 'none';
			}
		}
	}
});
//  ! Arrow UP and Menu-button
document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.button-menu')) {
		var mainDiv = document.getElementById('main-button');

		mainDiv.addEventListener('click', function (event) {
			var icon = this.children.item(0);
			icon.classList.toggle('fa-times');
			this.classList.toggle('open');
			event.stopPropagation(); // Щоб подія кліку на #main-button не спричиняла виклик обробника кліків документа
		});

		document.addEventListener('click', function (event) {
			var clickedElement = event.target;
			var mainDiv = document.getElementById('main-button');

			// Перевірка чи клікнуто на посилання або елемент з класом main-button__link
			if (!mainDiv.contains(clickedElement) || clickedElement.classList.contains('main-button__link')) {
				mainDiv.classList.remove('open');
			}
		});
	}
});
if (document.querySelector('.arrow-up')) {
	window.addEventListener('scroll', function () {
		var target = document.getElementById('target');
		var arrowUp = document.querySelector('.arrow-up');

		if (window.scrollY > target.offsetTop) {
			// arrowUp.style.display = 'block';
			arrowUp.style.opacity = '1';
			arrowUp.style.pointerEvents = 'auto';
			arrowUp.style.cursor = 'pointer';
		} else {
			// arrowUp.style.display = 'none';
			arrowUp.style.pointerEvents = 'none';
			arrowUp.style.cursor = 'default';
			arrowUp.style.opacity = '0';
		}
	});
}
