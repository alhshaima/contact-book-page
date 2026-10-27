Shaima's Contact Book

A simple and responsive Contact Book web application built using React and Vite.

This project allows users to organize their contacts by adding, viewing, searching, and deleting contact information. The application features a soft pink and lavender theme with a clean, responsive layout designed for desktop, tablet, and mobile devices.

Features

Add Contacts: Save a contact's name, email, and optional phone number.

View Contacts: Display contacts with personalized initials avatars.

Search Contacts: Filter contacts by name or email in real time.

Delete Contacts: Remove contacts from the list.

Form Validation: Check required fields and validate email addresses.

Responsive Design: Adjusts to desktop, tablet, and mobile screen sizes.

Conditional Rendering: Displays helpful messages when no contacts or search results are available.


Technologies Used

React

JavaScript (JSX)

HTML5

CSS3

Vite

Google Fonts (Nunito and Times New Roman)


Getting Started

To run this project locally:

1. Clone the repository

git clone https://github.com/alhshaima/contact-book-page.git

2. Navigate to the project folder

cd contact-book

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open the local URL displayed in the terminal, usually http://localhost:5173/.


React Concepts Demonstrated

This project demonstrates several fundamental React concepts, including:

Functional components and props

State management using useState

Controlled form inputs

Event handling (onChange, onSubmit, onClick)

Dynamic list rendering using map()

Array filtering using filter()

Conditional rendering

Unique keys for list items


Notes

This application uses React's local component state to manage contacts. No backend or database is required, and contacts reset when the webpage is refreshed.