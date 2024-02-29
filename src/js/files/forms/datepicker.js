/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from '../modules.js';

// Підключення модуля
import datepicker from 'js-datepicker';

// if (document.querySelector('[data-datepicker]')) {
// 	const picker = datepicker('[data-datepicker]', {
// 		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
// 		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
// 		overlayButton: 'Застосувати',
// 		overlayPlaceholder: 'Рік (4 цифри)',
// 		startDay: 1,
// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString();
// 			input.value = value;
// 		},
// 		onSelect: function (input, instance, date) {},
// 	});
// 	flsModules.datepicker = picker;
// }
//   ! РОБОЧИЙ
// if (document.querySelector('[data-datepicker]')) {
// 	const startDatePicker = datepicker('#startDatePicker', {
// 		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
// 		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
// 		overlayButton: 'Застосувати',
// 		overlayPlaceholder: 'Рік (4 цифри)',
// 		startDay: 1,
// 		range: true,

// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString();
// 			input.value = value;
// 		},
// 		onSelect: function (date, instance) {
// 			endDatePicker.data = {
// 				...endDatePicker.data,
// 				minDate: date,
// 			};
// 		},
// 	});

// 	const endDatePicker = datepicker('#endDatePicker', {
// 		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
// 		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
// 		overlayButton: 'Застосувати',
// 		overlayPlaceholder: 'Рік (4 цифри)',
// 		startDay: 1,
// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString();
// 			input.value = value;
// 		},
// 		onSelect: function (date, instance) {
// 			startDatePicker.data = {
// 				...startDatePicker.data,
// 				maxDate: date,
// 			};
// 		},
// 	});

// 	flsModules.startDatePicker = startDatePicker;
// 	flsModules.endDatePicker = endDatePicker;
// }
// ! РОбочий

if (document.querySelector('[data-datepicker]')) {
	const currentDate = new Date();
	const startDatePicker = datepicker('#startDatePicker', {
		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
		overlayButton: 'Застосувати',
		overlayPlaceholder: 'Рік (4 цифри)',
		startDay: 1,
		range: true,
		minDate: currentDate,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString();
			input.value = value;
		},
		onSelect: function (date, instance) {
			// Встановлюємо мінімальну дату для endDatePicker як обрану дату в startDatePicker
			endDatePicker.data = {
				...endDatePicker.data,
				minDate: date,
			};

			// Перевіряємо, чи існують обрані дати в endDatePicker перед зверненням до властивості selectedDates
			if (endDatePicker.selectedDates && endDatePicker.selectedDates.length > 0) {
				const selectedEndDate = endDatePicker.selectedDates[0];
				if (selectedEndDate && selectedEndDate < date) {
					endDatePicker.setDate(date); // Встановлюємо обрану дату в endDatePicker, якщо вона раніше, ніж обрана дата в startDatePicker
				}
			}
		},
	});

	const endDatePicker = datepicker('#endDatePicker', {
		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
		overlayButton: 'Застосувати',
		overlayPlaceholder: 'Рік (4 цифри)',
		startDay: 1,
		minDate: currentDate,
		range: true,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString();
			input.value = value;
		},
		onSelect: function (date, instance) {
			// Встановлюємо максимальну дату для startDatePicker як обрану дату в endDatePicker
			startDatePicker.data = {
				...startDatePicker.data,
				maxDate: date,
			};
		},
	});

	flsModules.startDatePicker = startDatePicker;
	flsModules.endDatePicker = endDatePicker;
}
