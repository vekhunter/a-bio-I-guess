// Practice with JavaScript Array Methods — Interactive Learning Page
// All code is organized by section for clarity.

// 1. forEach() Demonstration
const steps = ['one', 'two', 'three'];
console.log('forEach() demonstration:');
steps.forEach(step => console.log(step));

// 2. map() + Template Literals + DOM Injection
const listItems = steps.map(step => `<li>${step}</li>`);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#myList').innerHTML = listItems.join('');
});

// 3. GPA Conversion Example (switch + map + reduce)
function convert(grade) {
  let points;
  switch (grade) {
    case 'A': points = 4; break;
    case 'B': points = 3; break;
    case 'C': points = 2; break;
    case 'D': points = 1; break;
    case 'F': points = 0; break;
    default: alert('not a valid grade');
  }
  return points;
}
const grades = ['A', 'B', 'C'];
const gpaPoints = grades.map(convert);
const totalPoints = gpaPoints.reduce((sum, val) => sum + val, 0);
const averageGPA = (totalPoints / gpaPoints.length).toFixed(2);
console.log('GPA Points:', gpaPoints);
console.log('Total Points:', totalPoints);
console.log('Average GPA:', averageGPA);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#gpaSummary').innerHTML = `
    <strong>GPA Points:</strong> ${gpaPoints.join(', ')}<br>
    <strong>Total Points:</strong> ${totalPoints}<br>
    <strong>Average GPA:</strong> ${averageGPA}
  `;
});

// 4. filter() Example
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(word => word.length < 6);
console.log('Words with length < 6:', shortWords);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#filteredWords').textContent = shortWords.join(', ');
});

// 5. indexOf() Example
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber);
console.log(`Index of lucky number (${luckyNumber}):`, luckyIndex);
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#luckyIndex').textContent = luckyIndex;
});

// 6. Array of Objects — Student Directory
const students = [
  {last: 'Andrus', first: 'Aaron'},
  {last: 'Masa', first:'Manny'},
  {last: 'Tanda', first: 'Tamanda'}
];
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#studentDirectory');
  students.forEach(student => {
    const div = document.createElement('div');
    div.className = 'format';
    div.innerHTML = `<span>${student.first}</span> <span>${student.last}</span>`;
    container.appendChild(div);
    const hr = document.createElement('hr');
    container.appendChild(hr);
  });
});