import { TermCard } from "./TermCard.jsx";
import "./TermList.css";

export const TermList = ({ terms }) => {
  return (
    <ul className="term-list">
      {terms.map((item) => (
        <li>
          <TermCard
            title={item.title}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
}
