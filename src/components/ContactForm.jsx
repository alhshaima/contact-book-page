
import { useState } from 'react'

function ContactForm({ onAddContact }) {
  // State for controlled form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // Validation error state
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedPhone = phone.trim()

    // Validate required fields
    if (!trimmedName || !trimmedEmail) {
      setError('Name and email are required.')
      return
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    // Add the new contact to App state
    onAddContact({
      id: crypto.randomUUID(),
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone
    })

    // Clear form after successful submission
    setName('')
    setEmail('')
    setPhone('')
    setError('')
  }

  return (
    <section className="contact-form-section">

      <h2 className="section-title">Add a New Contact</h2>

      <form onSubmit={handleSubmit} noValidate>

        <div className="form-row">

          <div className="form-group">
            <label htmlFor="contact-name">Name*</label>
            <input
              type="text"
              id="contact-name"
              placeholder="Enter full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email*</label>
            <input
              type="email"
              id="contact-email"
              placeholder="Enter email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone">Phone (optional)</label>
            <input
              type="tel"
              id="contact-phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

        </div>

        {/* Show validation errors */}
        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="add-button">
          + Add Contact
        </button>

      </form>
    </section>
  )
}

export default ContactForm