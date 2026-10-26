import { useState } from "react";
import ContactForm from "./components/ContactForm";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";

export default function App() {
  // STATE: the two pieces of data the whole app needs
  const [contacts, setContacts] = useState([]);   // list of all contacts
  const [filter, setFilter] = useState("");       // text typed in search box

  // Function to add a contact (will be called by ContactForm)
  const addContact = (newContact) => {
    setContacts((prev) => [
      ...prev,                                  // copy all old contacts
      { id: Date.now().toString(), ...newContact }, // add the new one at the end
    ]);
  };

  // Function to delete a contact (will be called by ContactItem)
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id)); // keep everyone except this id
  };

  // Compute the list to display based on the search text
  const query = filter.trim().toLowerCase();
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query)
  );

  return (
    <main className="container">
      <h1>Contact Book</h1>
      <ContactForm onAdd={addContact} />
      <SearchBar value={filter} onChange={setFilter} />
      <ContactList
        contacts={filteredContacts}
        totalCount={contacts.length}
        filter={filter}
        onDelete={deleteContact}
      />
    </main>
  );
}