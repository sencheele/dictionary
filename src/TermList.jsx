import { TermCard } from "./TermCard.jsx";
import "./TermList.css";

export const TermList = () => {
  return (
    <ul className="term-list">
      <li>
        <TermCard />
      </li>

      <li>
        <TermCard />
      </li>
    </ul>
  );
}
