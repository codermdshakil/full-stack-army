let students = {
  101: {
    name: "Alice",
    age: 18,
    grade: "A",
  },
  102: {
    name: "Bob",
    age: 19,
    grade: "B",
  },
};

// create Student
function addStudent(id, name, age, grade) {
  students[id] = { name, age, grade };
}

addStudent(103, "shakil", 20, "A+");

// read student
function getStudent(id) {
  if (students[id]) {
    console.log(students[id]);
  } else {
    console.log("Student not found");
  }
}

// getStudent(103);

// Update student
function updateStudent(id, updatedInfo) {
  if (students[id]) {
    Object.assign(students[id], updatedInfo);
  } else {
    console.log("Student not found");
  }
}

// updateStudent(101, { age: 19, grade: "A+" });

// Delete student
function deleteStudent(id) {
  if (students[id]) {
    delete students[id];
    console.log(`Student ${id} deleted`);
  } else {
    console.log("Student not found");
  }
}
deleteStudent(102);
// console.log(students);

// console.log(Object.keys(students));
// get how money students in student
// console.log(Object.values(students).length);
