function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-section">
      <h2>Search Contacts</h2>

      <label htmlFor="contact-search">
        Search by name or email
      </label>

      <input
        type="search"
        id="contact-search"
        placeholder="Enter name or email..."
        value={searchTerm}
        onChange={(event) =>
          onSearchChange(event.target.value)
        }
      />
    </section>
  )
}

export default SearchBar