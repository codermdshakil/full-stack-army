let students = {
  101: { name: "Alice", age: 18, grade: "A" },
  102: { name: "Bob", age: 19, grade: "B" },
};

function addStudent() {
  const id = prompt("Enter student ID:");
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const grade = prompt("Enter grade:");
  students[id] = { name, age, grade };
  alert("✅ Student added successfully!");
}

function viewStudent() {
  const id = prompt("Enter student ID to view:");
  if (students[id]) {
    alert(
      `Name: ${students[id].name}\nAge: ${students[id].age}\nGrade: ${students[id].grade}`
    );
  } else {
    alert("❌ Student not found");
  }
}

function updateStudent() {
  const id = prompt("Enter student ID to update:");
  if (students[id]) {
    const name = prompt("Enter new name:", students[id].name);
    const age = parseInt(prompt("Enter new age:", students[id].age));
    const grade = prompt("Enter new grade:", students[id].grade);
    students[id] = { name, age, grade };
    alert("✅ Student updated successfully!");
  } else {
    alert("❌ Student not found");
  }
}

function deleteStudent() {
  const id = prompt("Enter student ID to delete:");
  if (students[id]) {
    delete students[id];
    alert("🗑️ Student deleted successfully!");
  } else {
    alert("❌ Student not found");
  }
}

function showAllStudents() {
  let all = "";
  for (let id in students) {
    all += `ID: ${id}, Name: ${students[id].name}, Age: ${students[id].age}, Grade: ${students[id].grade}\n`;
  }
  alert(all || "📭 No students found.");
}

function menu() {
  let choice;
  do {
    choice = prompt(`
    📘 Student Record Manager
    -----------------------------
    1. Add Student
    2. View Student
    3. Update Student
    4. Delete Student
    5. Show All Students
    6. Exit
    Enter your choice (1-6):
        `);

    switch (choice) {
      case "1":
        addStudent();
        break;
      case "2":
        viewStudent();
        break;
      case "3":
        updateStudent();
        break;
      case "4":
        deleteStudent();
        break;
      case "5":
        showAllStudents();
        break;
      case "6":
        alert("👋 Exiting...");
        break;
      default:
        alert("❌ Invalid choice");
    }
  } while (choice !== "6");
}

menu();

// CLI based google chrome console project awsome 
