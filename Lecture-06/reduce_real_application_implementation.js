const names = [
	'Ayman',
	'Abu Rayhan',
	'Anik',
	'Elias Emon',
	'Engr. Sabbir',
	'Fahim Faisal',
	'Feroz Khan',
	'Habib',
	'HM Azizul',
	'Hridoy Saha',
	'Jahid Hassan',
	'Johir',
	'Md Al-Amin',
	'Md Arafatul',
	'Md Ashraful',
	'Parvez',
];

// this is i expect!

// const namesGroup = {
// 	A: ['Ayman', 'Abu Rayhan', 'Anik'],
// 	E: ['Elias Emon', 'Engr. Sabbir'],
// 	F: ['Fahim Faisal', 'Feroz Khan'],
// };

const namesGroup = names.reduce((acc, cur) => {

    const firstLetter = cur[0].toUpperCase();
	if (firstLetter in acc) {
		acc[firstLetter].push(cur);
	} else {
		acc[firstLetter] = [cur];
	}
	return acc;

}, {});

// console.log(namesGroup);


Object.keys(namesGroup).forEach((groupKey) => {
	console.log('-----------', groupKey, '-----------');
	namesGroup[groupKey].forEach((name) => console.log(name));
	console.log();
});


