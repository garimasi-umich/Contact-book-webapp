import ContactItem from "./ContactItem";

export default function ContactList({ contacts, totalCount, filter, onDelete }) {
    if (totalCount === 0) {
        return <p className="message">No contacts yet. Add one above!</p>;
    }

    if (contacts.length === 0) {
        return <p className="message">No matches found for ‘{filter}’</p>;
    }

    return (
        <ul className="list">
            {contacts.map((c) => (
                <ContactItem key={c.id} contact={c} onDelete={onDelete} />
            ))}
        </ul>
    );
}