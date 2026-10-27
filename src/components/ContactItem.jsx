
function ContactItem({ contact, onDeleteContact }) {
  // Create initials from the contact's name
  const initials = contact.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')

  return (
    <li className="contact-item">

      {/* Contact initials avatar */}
      <div className="contact-avatar" aria-hidden="true">
        {initials}
      </div>

      {/* Contact information */}
      <div className="contact-details">
        <h3>{contact.name}</h3>

        <p>
          <span className="detail-icon" aria-hidden="true">✉</span>
          {contact.email}
        </p>

        {contact.phone && (
          <p>
            <span className="detail-icon" aria-hidden="true">☎</span>
            {contact.phone}
          </p>
        )}
      </div>

      {/* Delete contact button */}
      <button
        type="button"
        className="delete-button"
        onClick={() => onDeleteContact(contact.id)}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>

    </li>
  )
}

export default ContactItem