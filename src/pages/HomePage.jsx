import { Box, Text } from '@mantine/core'

const HomePage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 100px)',
            }}
        >
            <Text size='xl' weight='bold' align='center'>
                Welcome to BloomCycle! 
            </Text>
        </Box>
    )
}

export default HomePage