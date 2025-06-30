import { memo } from "react";

const HomepageHeader = () => {
  return (
    <>
      <h1 className="home-header">Welcome to the FakeStore</h1>
      <p className="home-description">
        Welcome to FakeStore — your one-stop shop for everything from gadgets to
        fashion! Browse by category, explore top-rated items, and enjoy a smooth
        and simple shopping experience.
      </p>

      <p className="home-description">Browse products by category below:</p>
    </>
  );
};

export default memo(HomepageHeader);
