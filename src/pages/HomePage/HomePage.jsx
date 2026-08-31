import Button from "../../components/Button/Button";

function HomePage() {
  return (
    <>
      <h1 className="display-title">Little Lemon</h1>
      <h2 className="sub-title">Chicago</h2>
      <p className="paragraph">
        We are a family owned Mediterranean restaurant.
      </p>
      <Button>Reserve a Table</Button>
    </>
  );
}

export default HomePage;