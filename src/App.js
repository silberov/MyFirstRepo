import React from "react";
import "./App.css";

function App() {
  const studentList = [
    "Inna",
    "Sebastian",
    "Zsofia T.",
    "Fakhira",
    "Annika",
    "Said",
    "Hamid",
    "Omar",
    "Guilherme",
    "Sofia D.",
    "Angel",
  ];

  function pickRandomStudent() {
    if (studentList.length === 0) alert("You ran out of students!");
    const randomIndex = Math.floor(Math.random() * studentList.length);
    const randomStudent = studentList[randomIndex];
    alert("A random student: " + randomStudent);
    studentList.splice(randomIndex, 1);
  }

  return (
    <div className="App">
      <button onClick={() => pickRandomStudent()}>Pick Someone!</button>
    </div>
  );
}

export default App;
