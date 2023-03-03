import { Box, Button, Text, TextInput } from '@mantine/core'

const PlantForm = ({
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
    handleSubmit,
    isUpdate = false,
  }) => {
    const submitCallback = event => {
      event.preventDefault()
      handleSubmit()
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
            onSubmit={submitCallback}
        >
            <TextInput label='Variety' variant='filled' withAsterisk value={variety} onChange={(e) => setVariety(e.target.value)} />
            <TextInput label='Size' variant='filled' withAsterisk value={size} onChange={(e) => setSize(e.target.value)} />
            <TextInput label='Age' variant='filled' withAsterisk value={age} onChange={(e) => setAge(e.target.value)} />
            <TextInput label='Description' variant='filled' withAsterisk value={description} onChange={(e) => setDescription(e.target.value)} />
            <TextInput label='Price' variant='filled' withAsterisk value={price} onChange={(e) => setPrice(e.target.value)} />
            <TextInput label='Image' variant='filled' withAsterisk value={image} onChange={(e) => setImage(e.target.value)} />

            <Button
                type='submit'
                variant='filled'
                color='cyan'
                sx={{ marginTop: '1rem', alignSelf: 'center' }}
            >
                {isUpdate ? 'Update the ad' : 'Create an ad'}
            </Button>
        </Box>
    </Box>
    )
  }
  
  export default PlantForm