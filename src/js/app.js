// todo list
const inputTodo = document.querySelector('.todolist__input');
const todoAddBtn = document.querySelector('.todolist__add');
const todoList = document.querySelector('.todolist__items');
const todoFilterBtn = document.querySelectorAll('.filter-icon');
const todoFilterItem = document.querySelector('.todolist__filter');
const sortBtn = document.querySelectorAll('.sort');
//  dark mood
const darkBtn = document.querySelector('.nav__darkmood');
const lightBtn = document.querySelector('.nav__lightmood');
//  timer
const showTime = document.querySelector('.nav__timer');
// search
const searchInput = document.querySelector('.search__input');
// view all btn
const viewBtn = document.querySelector('.view-all-btn');
const orderTable = document.querySelector('.main__table');
// calenadr
const calBtn = document.querySelectorAll('.calendar-icon');
const calendar = document.querySelector('.calendar');
const backDrop = document.querySelector('.backdrop');
const calendarDays = calendar.querySelector('.calendar__days');
const calendarYear = calendar.querySelector('.calendar__year');
const monthPicker = calendar.querySelector('.calendar__month');
const prevMonth = document.querySelector('#prev-month');
const nextMonth = document.querySelector('#next-month');
const prevYear = document.querySelector('#prev-year');
const nextYear = document.querySelector('#next-year');
// event listener
backDrop.addEventListener('click', closeBackDrop);
todoAddBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', checkEditRemove);
todoFilterItem.addEventListener('click', todoFilters);
viewBtn.addEventListener('click', viewAll);
prevYear.addEventListener('click', prevYearFunction);
nextYear.addEventListener('click', nextYearFunction);
prevMonth.addEventListener('click', prevMonthFunction);
nextMonth.addEventListener('click', nextMonthFunction);
document.addEventListener('DOMContentLoaded', () => {
  getLocalStorageTodo();
  generateCalendar(currentMonth.value, currentyear.value);
});

//  add to todolist
function addTodo(event) {
  event.preventDefault();
  if (inputTodo.value.trim() != 0) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todolist__items');
    const newTodo = `<div class="todos">
    <span class="edit">${inputTodo.value}</span>
    <div class="todos__icon">
      <span ><i class="fa-solid fa-check" title = "check"></i></span>
      <span><i class="fa-solid fa-pen-to-square" title = "edit"></i></span>
      <span ><i class="fa-solid fa-trash-can" title = "remove"></i></span>
    </div>
  </div>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    saveLocalStorageTodo(inputTodo.value);
    inputTodo.value = '';
  } else {
    alert('Please enter a task');
  }
}
// tick and edit and delete todolist
function checkEditRemove(event) {
  const item = event.target;
  const todoItem = item.parentElement.parentElement.parentElement;
  if (item.classList.contains('fa-check')) {
    todoItem.classList.toggle('completed');
  } else if (item.classList.contains('fa-trash-can')) {
    todoItem.remove();
    removeLocalStorageTodo(todoItem);
  } else if (item.classList.contains('fa-pen-to-square')) {
    const value = todoItem.innerText;
    inputTodo.value = value;
    todoItem.remove();
    // todoItems = todoItems.filter((item) => item != event);
    removeLocalStorageTodo(todoItem);
  }
}
// todolist filter

todoFilterBtn.forEach((event) => {
  event.addEventListener('click', (e) => {
    const filterParent = e.target.parentElement.parentElement;
    if (filterParent.classList.toggle('show-filter')) {
      todoFilterItem.style.display = 'none';
    } else {
      todoFilterItem.style.display = 'flex';
    }
  });
});

function todoFilters() {
  //   const todos = [...todoList.childNodes];
  //   const filter = event.target.classList.value;
  //   console.log(filter);
  //   todos.forEach((todo) => {
  //     switch (filter) {
  //       case 'all':
  //         todo.style.display = 'flex';
  //         break;
  //       case 'completed':
  //         if (todo.classList.contains('completed')) {
  //           todo.style.display = 'flex';
  //         } else {
  //           todo.style.display = 'none';
  //         }
  //         break;
  //       case 'uncompleted':
  //         if (!todo.classList.contains('completed')) {
  //           todo.style.display = 'flex';
  //         } else {
  //           todo.style.display = 'none';
  //         }
  //         break;
  //     }
  //   });
  //   sortBtn.forEach((item) => {
  //     item.addEventListener('click', (e) => {
  //       const _todoList = [...document.querySelectorAll('.todolist__items')];
  //       const filter = e.target.dataset.filter;
  //       _todoList
  //       if (filter === 'all') {
  //         e.style.display = 'block';
  //       } else if (e.classList.contains(filter)) {
  //         e.style.display = 'block';
  //       } else {
  //         e.style.display = 'none';
  //       }
  //       console.log(filter);
  //     });
  //   });
}

// todo localstorage setting
function saveLocalStorageTodo(todo) {
  let savedTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  savedTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(savedTodos));
}

function getLocalStorageTodo() {
  let savedTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

  savedTodos.forEach((todo) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todolist__items');
    const newTodo = `<div class="todos">
    <span class="edit" >${todo}</span>
    <div class="todos__icon">
    <span ><i class="fa-solid fa-check" title = "check"></i></span>
    <span><i class="fa-solid fa-pen-to-square" title = "edit"></i></span>
    <span ><i class="fa-solid fa-trash-can" title = "remove"></i></span>
    </div>
  </div>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
  });
}
function removeLocalStorageTodo(todo) {
  let savedTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  const filteredTodos = savedTodos.filter((t) => t !== todo.children[0].innerText);
  localStorage.setItem('todos', JSON.stringify(filteredTodos));
}

// dark mood
darkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const body = document.body;
  if (body.classList.toggle('dark')) {
    lightBtn.style.opacity = '1';
    darkBtn.style.opacity = '0';
  } else {
    lightBtn.style.opacity = '0';
    darkBtn.style.opacity = '1';
  }
  if (body.classList.toggle('light')) {
    lightBtn.style.opacity = '0';
    darkBtn.style.opacity = '1';
  } else {
    lightBtn.style.opacity = '1';
    darkBtn.style.opacity = '0';
  }

  // console.log(body);
});

// timer
setInterval(timer, 1000);
function timer() {
  const time = new Date();
  showTime.innerHTML = time.toLocaleTimeString();
}
// search
const filters = {
  searchItem: '',
};

function search(event) {
  event.filter((item) => {
    item.title.toLowerCase().includes(event.searchItems.toLowerCase());
  });
}
searchInput.addEventListener('input', (e) => {
  console.log(e.target.value);
  filters.searchItem = e.target.value;
  search(e);
});

// show full table by cliking view all btn
function viewAll() {
  orderTable.style.height = '100%';
}

// show calendar btn toggle

calBtn.forEach((event) => {
  event.addEventListener('click', (e) => {
    const calParent = e.target.parentElement.parentElement;
    console.log(calParent);
    if (calParent.classList.toggle('show-calendar')) {
      calendar.style.display = 'block';
      backDrop.style.display = 'block';
    } else {
      calendar.style.display = 'none';
      backDrop.style.display = 'none';
    }
  });
});

// backdrop
function closeBackDrop() {
  calendar.style.display = 'none';
  backDrop.style.display = 'none';
}
// calendar js
const currDate = new Date();
const currentMonth = { value: currDate.getMonth() };
const currentyear = { value: currDate.getFullYear() };
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
}
function getFebDays(year) {
  return isLeapYear(year) ? 29 : 28;
}
function generateCalendar(month, year) {
  const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  calendarDays.innerHTML = '';
  const currentMonth = `${monthNames[month]}`;
  monthPicker.innerHTML = currentMonth;
  calendarYear.innerHTML = year;
  // get first day of month
  const firstDay = new Date(year, month, 1);
  for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
    const day = document.createElement('div');
    if (i >= firstDay.getDay()) {
      day.innerHTML = i - firstDay.getDay() + 1;
      day.innerHTML += `<span></span>`;
      if (i - firstDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
        day.classList.add('curr-date');
      }
    }
    calendarDays.appendChild(day);
  }
}
// next and previouse month and year
function nextMonthFunction() {
  ++currentMonth.value;
  if (currentMonth.value > 11) {
    currentMonth.value = 0;
    ++currentyear.value;
  }
  generateCalendar(currentMonth.value, currentyear.value);
}

function prevMonthFunction() {
  --currentMonth.value;
  if (currentMonth.value < 0) {
    currentMonth.value = 11;
    --currentyear.value;
  }
  generateCalendar(currentMonth.value, currentyear.value);
}

function nextYearFunction() {
  ++currentyear.value;
  generateCalendar(currentMonth.value, currentyear.value);
}

function prevYearFunction() {
  --currentyear.value;
  generateCalendar(currentMonth.value, currentyear.value);
}
