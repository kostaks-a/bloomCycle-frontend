import {
  Box,
  Button,
  Text,
  TextInput,
  NumberInput,
  FileInput,
} from "@mantine/core";
import { Select } from "@mantine/core";
import { useEffect } from "react";
import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const BikeUpdate = ({
  type,
  size,
  condition,
  description,
  price,
  image,
  setType,
  setSize,
  setCondition,
  setDescription,
  setPrice,
  setImage,
  params,
  token,
}) => {
  const navigate = useNavigate();

  const fetchBikeData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/bicycles/${params}`
      );
      const bike = response.data;
      console.log(bike);
      setType(bike.type);
      setSize(bike.size);
      setCondition(bike.condition);
      setDescription(bike.description);
      setPrice(bike.price);
      setImage(bike.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBikeData();
    console.log("fetching bike");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
    let formData = new FormData();
    formData.append("type", type);
    formData.append("size", size);
    formData.append("condition", condition);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imageUrl", image);
    try {
      await axios.put(
        `http://localhost:5005/bicycles/update/${params}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/allbicycles");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "calc(100vh - 100px)",
        }}
      >
        <Text align="center" size="xl" weight="bold">
          Give us some details of your bicycle
        </Text>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "2rem",
          }}
          onSubmit={handleSubmit}
        >
          <Select
            withAsterisk
            label="Select the type of your bicycle"
            onChange={setType}
            variant="filled"
            placeholder={type}
            data={[
              { value: "Road bike", label: "Road bike" },
              { value: "Mountain bike", label: "Mountain bike" },
              { value: "City bike", label: "City bike" },
              { value: "Electric bike", label: "Electric bike" },
              { value: "Gravel bike", label: "Gravel bike" },
              { value: "Fixie", label: "Fixie" },
              { value: "Other", label: "Other" },
            ]}
          />
          <TextInput
            label="Size"
            variant="filled"
            withAsterisk
            value={size}
            onChange={(e) => setSize(e.currentTarget.value)}
          />
          <TextInput
            label="Condition"
            variant="filled"
            withAsterisk
            value={condition}
            onChange={(e) => setCondition(e.currentTarget.value)}
          />
          <TextInput
            label="Description"
            variant="filled"
            withAsterisk
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <NumberInput
            label="Price"
            variant="filled"
            withAsterisk
            value={price}
            onChange={setPrice}
          />
          <FileInput label="Image" name="image" variant="filled" withAsterisk />

          <Button
            type="submit"
            variant="filled"
            color="cyan"
            sx={{ marginTop: "1rem", alignSelf: "center" }}
          >
            Update the ad
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default BikeUpdate;
