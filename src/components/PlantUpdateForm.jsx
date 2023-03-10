import {
  Box,
  Button,
  Text,
  TextInput,
  NumberInput,
  FileInput,
  Image
} from "@mantine/core";
import { useEffect } from "react";
import axios from "axios";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const PlantUpdateForm = ({
  variety,
  size,
  age,
  description,
  price,
  image,
  setVariety,
  setSize,
  setAge,
  setDescription,
  setPrice,
  setImage,
  params,
  token,
  currentUser
}) => {
  console.log(params);
  const navigate = useNavigate();

  const fetchPlantData = async () => {
    const grabToken = window.localStorage.getItem("bearer");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_HOST}/plants/${params}` , {
          headers : {
            'Authorization': `Bearer ${grabToken}`
        },
        })
      const plant = response.data;
      console.log(plant);
      setVariety(plant.variety);
      setSize(plant.size);
      setAge(plant.age);
      setDescription(plant.description);
      setPrice(plant.price);
      setImage(plant.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlantData();
    console.log("fetching plant data");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const grabToken = window.localStorage.getItem("bearer")
    const image = event.target.image.files[0];
    let formData = new FormData();
    formData.append("variety", variety);
    formData.append("size", size);
    formData.append("age", age);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("imageUrl", image);
    try {
      await axios.put(
        `${import.meta.env.VITE_HOST}/plants/update/${params}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${grabToken}`,
          },
        }
      );
      navigate(`/ads/${currentUser._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <div style = {{ display: "flex" , flexDirection: 'column' , }}>
    <div style = {{ alignSelf: "center"}}>
          <Image
            width={250}
            height={250}
            fit="contain"
            radius="md"
            src={image}
            alt={variety}
          />
    </div>

    <div>
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
        Update the details of your ad
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
        <TextInput
          label="Variety"
          variant="filled"
          withAsterisk
          value={variety}
          onChange={(e) => setVariety(e.currentTarget.value)}
        />
        <TextInput
          label="Size"
          variant="filled"
          withAsterisk
          value={size}
          onChange={(e) => setSize(e.currentTarget.value)}
        />
        <TextInput
          label="Age"
          variant="filled"
          withAsterisk
          value={age}
          onChange={(e) => setAge(e.currentTarget.value)}
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
          color="green.8"
          sx={{ marginTop: "1rem", alignSelf: "center" }}
        >
          Update the ad
        </Button>
      </Box>
    </Box>
    </div>
    </div>
  
  </>
  
  );
};

export default PlantUpdateForm;

