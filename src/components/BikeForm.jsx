import { Box, Button, Text, TextInput , NumberInput } from '@mantine/core'
import { Select } from '@mantine/core';


const BikeForm = ({
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
            Give us some details of your bicycle
        </Text>
        <Box
            component='form'
            sx={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '2rem' }}
            onSubmit={handleSubmit}
        >
            <Select withAsterisk 
                label="Select the type of your bicycle"
                onChange={setType}
                variant='filled'
                placeholder="Road bike"
                data={[
                    { value: 'Road bike', label: 'Road bike' },
                    { value: 'Mountain bike', label: 'Mountain bike' },
                    { value: 'City bike', label: 'City bike' },
                    { value: 'Electric bike', label: 'Electric bike' },
                    { value: 'Gravel bike', label: 'Gravel bike' },
                    { value: 'Fixie', label: 'Fixie' },
                    { value: 'Other', label: 'Other' },
                ]}
            />
            <TextInput label='Size' variant='filled' withAsterisk value={size} onChange={(e) => setSize(e.currentTarget.value)} />
            <TextInput label='Condition' variant='filled' withAsterisk value={condition} onChange={(e) => setCondition(e.currentTarget.value)} />
            <TextInput label='Description' variant='filled' withAsterisk value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
            <NumberInput label='Price' variant='filled' withAsterisk value={price} onChange={setPrice} />
            <TextInput label='Image' variant='filled' withAsterisk value={image} onChange={(e) => setImage(e.currentTarget.value)} />

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
  
  export default BikeForm