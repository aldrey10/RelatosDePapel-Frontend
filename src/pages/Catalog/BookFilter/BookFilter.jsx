import "./BookFilter.scss";

export default function BookFilter({ value, onChange }) {
    return (
        <div className="book-filter">
            <input
                type="text"
                placeholder="Buscar por título, autor o código..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="book-filter__input"
            />
        </div>
    )
}