import "./HomePage.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import restaurantFood from "../../assets/restauranfood.jpg";
import greekSalad from "../../assets/greek salad.jpg";
import bruschetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <div>
            <h1 className="display-title hero__title">Little Lemon</h1>
            <h2 className="sub-title hero__subtitle">Chicago</h2>

            <p className="paragraph hero__description">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>

            <Button onClick={() => navigate("/booking")}>Reserve a Table</Button>
          </div>

          <img
            className="hero__image"
            src={restaurantFood}
            alt="Little Lemon restaurant food"
          />
        </div>
      </section>

      <section className="specials">
        <div className="specials__header">
          <h2 className="sub-title">This week's specials!</h2>
          <Button disabled>Online Menu</Button>
        </div>

        <div className="specials__grid">
          <article className="special-card">
            <img src={greekSalad} alt="Greek salad" />

            <div className="special-card__content">
              <div className="special-card__header">
                <h3 className="card-title">Greek salad</h3>
                <span>$12.99</span>
              </div>

              <p className="paragraph">
                The famous Greek salad of crispy lettuce, peppers, olives and
                Chicago style feta cheese.
              </p>

              <span className="special-card__disabled-action">Order a delivery</span>
            </div>
          </article>

          <article className="special-card">
            <img src={bruschetta} alt="Bruschetta" />

            <div className="special-card__content">
              <div className="special-card__header">
                <h3 className="card-title">Bruschetta</h3>
                <span>$5.99</span>
              </div>

              <p className="paragraph">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>

              <span className="special-card__disabled-action">Order a delivery</span>
            </div>
          </article>

          <article className="special-card">
            <img src={lemonDessert} alt="Lemon dessert" />

            <div className="special-card__content">
              <div className="special-card__header">
                <h3 className="card-title">Lemon Dessert</h3>
                <span>$5.00</span>
              </div>

              <p className="paragraph">
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>

              <span className="special-card__disabled-action">Order a delivery</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;
