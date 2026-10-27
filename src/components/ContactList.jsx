import ContactItem from './ContactItem'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <section className="contact-list-section">
      <h2>Your Contacts</h2>

      {contacts.length === 0 ? (
        <p className="empty-message">
          No contacts yet. Add one above!
        </p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default ContactList