/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from '../modules.js';

// Підключення модуля
import datepicker from 'js-datepicker';

// if (document.querySelector('[data-datepicker]')) {
// 	const picker = datepicker('[data-datepicker]', {
// 		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
// 		customMonths: ["Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"],
// 		overlayButton: 'Застосувати',
// 		overlayPlaceholder: 'Рік (4 цифри)',
// 		startDay: 1,
// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString()
// 			input.value = value
// 		},
// 		onSelect: function (input, instance, date) {

// 		}
// 	});
// 	flsModules.datepicker = picker;
// }

if (document.querySelector('[data-datepicker]')) {
	const startDatePicker = datepicker('#startDatePicker', {
		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
		overlayButton: 'Застосувати',
		overlayPlaceholder: 'Рік (4 цифри)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString();
			input.value = value;
		},
		onSelect: function (date, instance) {
			endDatePicker.data = {
				...endDatePicker.data,
				minDate: date,
			};
		},
	});

	const endDatePicker = datepicker('#endDatePicker', {
		customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
		customMonths: ['Січ', 'Лют', 'Берез', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Верес', 'Жовт', 'Листоп', 'Груд'],
		overlayButton: 'Застосувати',
		overlayPlaceholder: 'Рік (4 цифри)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString();
			input.value = value;
		},
		onSelect: function (date, instance) {
			startDatePicker.data = {
				...startDatePicker.data,
				maxDate: date,
			};
		},
	});

	flsModules.startDatePicker = startDatePicker;
	flsModules.endDatePicker = endDatePicker;
}
