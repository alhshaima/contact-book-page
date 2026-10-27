
import { useState } from 'react'
import ContactForm from './components/ContactForm'
import SearchBar from './components/SearchBar'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  // Store all contacts in the main App component
  const [contacts, setContacts] = useState([])

  // Store the current search text
  const [searchTerm, setSearchTerm] = useState('')

  // Add a new contact
  function addContact(newContact) {
    setContacts((previousContacts) => [
      ...previousContacts,
      newContact
    ])
  }

  // Delete a contact using its unique ID
  function deleteContact(id) {
    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact.id !== id)
    )
  }

  // Filter contacts by name or email
  const filteredContacts = contacts.filter((contact) => {
    const search = searchTerm.trim().toLowerCase()

    return (
      contact.name.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search)
    )
  })

  return (
    <div className="app-container">

      {/* Page header */}
      <header className="app-header">

        <h1>Shaima's Contact Book</h1>
        <p>All my contacts in one place.</p>

      </header>

      <main>
        {/* Add contact form */}
        <ContactForm onAddContact={addContact} />

        {/* Decorative section divider */}
        <div className="section-divider" aria-hidden="true">
        </div>

        {/* Total number of saved contacts */}
        <p className="contact-count">
          {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
        </p>

        {/* Search contacts */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Display contacts or empty state */}
        {contacts.length === 0 ? (
          <p className="empty-message">
            No contacts yet. Add one above!
          </p>
        ) : filteredContacts.length === 0 ? (
          <p className="empty-message">
            No matches found for "{searchTerm}".
          </p>
        ) : (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        )}
      </main>

      {/* footer */}
      <footer className="app-footer">
        <p>Shaima Al-Harethi | CIS 435 Fall 2026</p>
      </footer>

    </div>
  )
}

export default App