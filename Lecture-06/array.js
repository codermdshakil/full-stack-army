/**
 * store 10 student information
 *
 * - id
 * - name
 * - email
 *
 */

// Id Generator
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const students = [
  {
    id: "323985ae-d3da-4dee-b87d-7f1d5a6e0ca6",
    name: "Md Al-Amin",
    email: "alamin@test.com",
  },
  {
    id: "84ca1b1b-b087-4c85-9b48-14c204f5e55c",
    name: "Akib Ahmed",
    email: "akib@test.com",
  },
  {
    id: "63ecd4d0-2a92-41a5-acbb-cd54450f66dc",
    name: "Elias Emon",
    email: "elias@test.com",
  },
];



/**
 * what can we do in Array
 * - Create a new one (easy)
 * - Update
 * - Delete
 * - Filter
 * - Easily Traverse
 *
 */

// 1 Create a new person
students.push({
	id: '0a2c956c-a9f4-48b9-83fa-551b432dfb2b',
	name: 'Fahim Faisal',
	email: 'fahim@test.com',
});


