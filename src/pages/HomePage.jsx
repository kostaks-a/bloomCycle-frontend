import { Box, Text } from "@mantine/core";
const HomePage = () => {
  return (
    <div>
      <div>
        <h6 style={{ display: "flex", justifyContent: "center" }}>
          Welcome to BloomCycle
        </h6>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p style={{}}>
          Welcome to website where you can find a diverse range of plants and
          bikes. We are passionate about promoting a sustainable lifestyle and
          creating a positive impact on the environment, and we believe that
          plants and bikes are the perfect combination to achieve this goal.
        </p>

        <div>
          <h2>Bikes for Sale</h2>
          <img
            style={{ height: "auto", width: "700px" }}
            src={`/homepageimg.jpg`}
            alt="Bike for Sale"
          />
        </div>
      </div>
      <p>
        Check out our selection of bikes for sale! From road bikes to mountain
        bikes, we have something for everyone.
      </p>
      <button>View Bikes</button>

      <div>
        <h2>Plants for Sale</h2>

        <p>
          Looking to spruce up your home or garden? Check out our selection of
          plants for sale!
        </p>
        <button>View Plants</button>
      </div>
    </div>
  );
};

export default HomePage;
