const students = [
  { name: "Cici", score: 90 },
  { name: "Andi", score: 85 },
  { name: "Eka", score: 75 },
  { name: "Budi", score: 72 },
  { name: "Doni", score: 60 }
];

students.sort((a, b) => b.score - a.score);

const total = students.reduce((sum, student) => sum + student.score, 0);
const average = total / students.length;

const aboveAverage = students
  .filter(student => student.score > average)
  .map(student => student.name);

console.log("DumbWays Leaderboard");

students.forEach((student, index) => {
  console.log(`${index + 1}. ${student.name} - ${student.score}`);
});

console.log(`\nNilai rata-rata: ${average}`);
console.log(`Siswa di atas rata-rata: ${aboveAverage.join(", ")}`);
