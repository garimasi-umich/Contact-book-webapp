export default function ContactItem({ contact, onDelete }) {
    return (
        <li className="card contact">
            <div className="contact-info">
                <strong>{contact.name}</strong>
                <span>{contact.email}</span>
                {contact.phone && <span>{contact.phone}</span>}
            </div>
            <button
                className="btn btn-danger"
                onClick={() => onDelete(contact.id)}
                aria-label={`Delete ${contact.name}`}
            >
                Delete
            </button>
        </li>
    );
}