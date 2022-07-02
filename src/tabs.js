'use strict';

let	tab = document.getElementsByClassName('tab'),
		tabContent = document.getElementsByClassName('tab-item-content'),
		selector = document.querySelector('.selector'),
		tabs = document.querySelector('.tabs');

function hideTabsContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('active');
			tab[i].classList.remove('active-item');
		}
	}

selector.style.width = (tab[0].offsetWidth + 'px');

tabs.addEventListener('click', function () {
	let target = event.target;
	if (target.className === 'tab') {
		for (let i = 0; i < tab.length; i++) {
			if (target === tab[i]) {
				showTabsContent(i);
				selector.style.left = (target.offsetLeft + 'px');
				selector.style.width = (target.offsetWidth + 'px');
				break;
			}
		}
	}
});


function showTabsContent(b) {
	hideTabsContent(0);
	tab[b].classList.add('active-item');
	tabContent[b].classList.add('active');
}

class ItcAccordion {
	constructor(target, config) {
		this._el = typeof target === 'string' ? document.querySelector(target) : target;
		const defaultConfig = {
			alwaysOpen: true
		};
		this._config = Object.assign(defaultConfig, config);
		this.addEventListener();
	}
	addEventListener() {
		this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.accordion__header');
			if (!elHeader) {
				return;
			}
			if (!this._config.alwaysOpen) {
				const elOpenItem = this._el.querySelector('.accordion__item_show');
				if (elOpenItem) {
					elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
				}
			}
			elHeader.parentElement.classList.toggle('accordion__item_show');
		});
	}
}

new ItcAccordion('#accordion-1');
new ItcAccordion('#accordion-2');

//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}