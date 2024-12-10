import './index.css';
import { TermList } from "./TermList.jsx";
import { createRoot } from 'react-dom/client';

function saveTermList(terms) {
  localStorage.setItem('termList', JSON.stringify(terms));
}

function restoreTermList() {
  const rawTermList = localStorage.getItem('termList');

  if (!rawTermList) {
    return [];
  }

  return JSON.parse(rawTermList);
}

let terms = restoreTermList();

const descriptionList = document.getElementById('description-list');

// Инициализируем "корень" React-приложения. Это точка, где React будет контролировать DOM.
// Передаём в него descriptionList, чтобы React знал, в какой элемент вставлять компоненты.
const reactRoot = createRoot(descriptionList);

function syncTermList() {
  saveTermList(terms);
  // Вызываем метод render у корня, чтобы отрисовать компонент TermCard.
  // Компонент TermCard будет добавлен внутрь элемента description-list в DOM.
  reactRoot.render(<TermList terms={terms} onDelete={deleteItem} />);
}

function addTerm(title, description) {
  terms.push({
    id: Date.now(),
    title,
    description
  });

  terms.sort((term1, term2) => term1.title < term2.title ? -1 : 1);

  syncTermList();
}

function deleteItem(id) {
  terms = terms.filter((item) => item.id !== id);

  syncTermList();
}

syncTermList();

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  form.reset();

  addTerm(title, description);
})
