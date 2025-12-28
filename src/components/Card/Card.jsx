export default function Card({ title, children }) {
    return (
        <div className="card">
            {title && <div className="card__header">{title}</div>}
            <div>
                {children}
            </div>
        </div>
    )
}