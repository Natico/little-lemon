import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage/CustomerDetailsPage";
import BookingReviewPage from "./pages/BookingReviewPage/BookingReviewPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage/ConfirmedBookingPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route
            path="/booking/details"
            element={<CustomerDetailsPage />}
          />
          <Route path="/booking/review" element={<BookingReviewPage />} />
          <Route
            path="/booking/confirmed"
            element={<ConfirmedBookingPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;