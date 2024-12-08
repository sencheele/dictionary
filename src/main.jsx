import './index.css';
import { TermList } from "./TermList.jsx";
import { createRoot } from 'react-dom/client';

const descriptionList = document.getElementById('description-list');

// Инициализируем "корень" React-приложения. Это точка, где React будет контролировать DOM.
// Передаём в него descriptionList, чтобы React знал, в какой элемент вставлять компоненты.
const reactRoot = createRoot(descriptionList);

// Вызываем метод render у корня, чтобы отрисовать компонент TermCard.
// Компонент TermCard будет добавлен внутрь элемента description-list в DOM.
reactRoot.render(<TermList />);

const form = document.getElementById('add-description');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  form.reset();

  console.log(title, description);
})
