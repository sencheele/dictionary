import './index.css';
import { TermList } from "./TermList.jsx";
import { createRoot } from 'react-dom/client';

let terms = [];

function addTerm(title, description) {
  terms.push({
    title,
    description
  });

  terms.sort((term1, term2) => term1.title < term2.title ? -1 : 1);

  reactRoot.render(<TermList terms={terms} />);
}

const descriptionList = document.getElementById('description-list');

// Инициализируем "корень" React-приложения. Это точка, где React будет контролировать DOM.
// Передаём в него descriptionList, чтобы React знал, в какой элемент вставлять компоненты.
const reactRoot = createRoot(descriptionList);

// Вызываем метод render у корня, чтобы отрисовать компонент TermCard.
// Компонент TermCard будет добавлен внутрь элемента description-list в DOM.
reactRoot.render(<TermList terms={terms} />);

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  form.reset();

  addTerm(title, description);
})
