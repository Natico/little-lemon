# Little Lemon Reservation App

A responsive React reservation application built for the Meta Front-End Developer Capstone project on Coursera.

## Features

- Responsive Little Lemon home page
- Multi-step table reservation flow
- Dynamic available reservation times
- Booking form validation
- Customer details form
- Booking review and confirmation
- Local storage persistence
- Accessible form labels and error states
- Keyboard-friendly focus states
- Responsive mobile navigation
- 404 page
- Unit and component tests

## Booking Flow

Home → Booking → Customer Details → Review → Confirmation

## Technologies

- React
- React Router
- CSS
- CSS Grid
- Flexbox
- Jest
- React Testing Library
- Local Storage

## Project Structure

    src/
    ├── components/
    ├── features/
    │   └── booking/
    ├── pages/
    ├── services/
    ├── App.js
    └── index.js

## Booking API

The project uses the booking API logic provided by the Coursera Little Lemon Capstone exercise.

The original API reference is:

    https://raw.githubusercontent.com/courseraap/capstone/main/api.js

The API code is included as a local ES module so it can be imported and tested reliably.

## Run the Project

Install dependencies:

    npm install

Start the development server:

    npm start

By default, the application is available at:

    http://localhost:3000

If port `3000` is already in use, Create React App may offer to run the application on another available port.

## Run Tests

Run all tests:

    npm test -- --watchAll=false

The project includes unit and component tests for the booking flow, validation, local storage, and other application behavior.

## Production Build

Create a production build:

    npm run build

## Accessibility

The application includes several accessibility considerations:

- Semantic HTML elements
- Associated form labels
- Fieldsets and legends for grouped controls
- Keyboard-visible focus indicators
- Form validation feedback
- `aria-invalid` for invalid form fields
- Alert and status messages for validation and booking states
- Accessible mobile navigation controls

## Testing

The automated tests cover areas including:

- Booking time initialization
- Booking time updates based on the selected date
- Local storage writing
- Local storage reading
- Booking form rendering
- Required form fields
- Guest number restrictions
- Form validity
- Booking form submission
- Customer details validation
- Email input configuration
- Date restrictions
- Empty availability states
- Unknown routes and the 404 page

## Design System

The user interface follows the Little Lemon style guide provided during the course.

### Primary Colors

- Green: `#495E57`
- Yellow: `#F4CE14`

### Secondary Colors

- Salmon: `#EE9972`
- Peach: `#FBDABB`
- Light Gray: `#EDEFEE`
- Dark Gray: `#333333`

### Typography

The application uses the typography specified by the Little Lemon design system:

- Markazi Text for display typography
- Karla for body text and user interface elements

## Responsive Design

The application uses CSS Grid and Flexbox to provide responsive layouts across desktop and mobile screen sizes.

CSS Grid is primarily used for two-dimensional layouts such as:

- Hero content
- Specials cards
- Booking and form layouts

Flexbox is used for one-dimensional layouts such as:

- Navigation
- Button groups
- Form actions

## Reservation Persistence

The reservation flow uses Local Storage to preserve relevant data while the user moves through the booking process.

The application stores:

- Booking draft
- Customer details draft
- Last confirmed reservation

Draft information is cleared after a successful reservation while the last confirmed booking is retained so the confirmation page can survive a page refresh.

Sensitive information such as passwords or payment card details is not stored.

## Reservation Flow

The reservation process consists of the following steps:

1. The user starts from the Little Lemon home page.
2. The user selects a reservation date, available time, number of diners, occasion, and seating preference.
3. The user enters their customer details.
4. The user reviews the reservation.
5. The reservation is submitted through the booking API.
6. A confirmation page displays the completed reservation.

Users can return to previous steps without losing their draft information.

## Error Handling

The application handles several common edge cases, including:

- Missing required form fields
- Invalid guest counts
- Invalid email addresses
- Dates in the past
- No available reservation times
- Failed reservation submissions
- Missing booking data
- Unknown application routes

## Project Goals

This project demonstrates concepts covered throughout the Meta Front-End Developer program, including:

- React components
- React state management
- Controlled forms
- React Router
- Form validation
- API integration
- Local Storage
- Responsive design
- Semantic HTML
- Accessibility
- CSS Grid
- Flexbox
- Unit testing
- Component testing
- Git and GitHub workflow

## Notes

Authentication and payment processing are intentionally outside the scope of this project.

The focus of the application is the Little Lemon table reservation experience and the front-end concepts required by the Meta Front-End Developer Capstone project.