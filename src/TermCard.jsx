import "./TermCard.css";

export const TermCard = ({ title, description, onDelete, id}) => {
  const handleDeleteClick = () => {
    onDelete(id);
  }

  return (
    <div className="term-card">
      <h2 className="term-card__title">
        {title}
      </h2>

      { description && (
        <p className="term-card__description">
          {description}
        </p>
      )}

      <button className="term-card__delete" type="button" onClick={handleDeleteClick}>
        Удалить
      </button>
    </div>
  );
}
