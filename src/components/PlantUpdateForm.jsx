import { Box, Button, Text, TextInput , NumberInput } from '@mantine/core'
import { useEffect } from 'react'
import axios from 'axios'
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
    token
  }) => {

    console.log(params)
    const navigate = useNavigate();

    const fetchPlantData = async () => {
        try{
         const response = await axios.get(`http://localhost:5005/plants/${params}`)
         const plant = response.data
         console.log(plant)
        setVariety(plant.variety)
        setSize(plant.size)
        setAge(plant.age)
        setDescription(plant.description)
        setPrice(plant.price)
        setImage(plant.image)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        fetchPlantData();
        console.log("fetching plant data");
      }, []);

      const handleSubmit = async (event) => {
        event.preventDefault()
        const body = { variety: variety, size: size, age: age, price: price, description: description, image: image }
        try {
            await axios.put(`http://localhost:5005/plants/update/${params}`, body , {
                headers : {
                    Authorization: `Bearer ${token}`
                },
            });
            navigate("/allplants");
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <Box
        sx={{
            margin: '0 auto',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: 'calc(100vh - 100px)',
        }}
         >
        <Text align='center' size='xl' weight='bold'>
            Give us some details of your plant
        </Text>
        <Box
            component='form'
            sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '2rem' }}
            onSubmit={handleSubmit}
        >
            <TextInput label='Variety' variant='filled' withAsterisk value={variety} onChange={(e) => setVariety(e.currentTarget.value)} />
            <TextInput label='Size' variant='filled' withAsterisk value={size} onChange={(e) => setSize(e.currentTarget.value)} />
            <TextInput label='Age' variant='filled' withAsterisk value={age} onChange={(e) => setAge(e.currentTarget.value)} />
            <TextInput label='Description' variant='filled' withAsterisk value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
            <NumberInput label='Price' variant='filled' withAsterisk value={price} onChange={setPrice} />
            <TextInput label='Image' variant='filled' withAsterisk value={image} onChange={(e) => setImage(e.currentTarget.value)} />

            <Button
                type='submit'
                variant='filled'
                color='cyan'
                sx={{ marginTop: '1rem', alignSelf: 'center' }}
            >
                Update the ad
            </Button>
        </Box>
    </Box>
    )
  
}

export default PlantUpdateForm