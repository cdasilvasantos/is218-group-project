// pages/index.js
import { Box, Container } from '@chakra-ui/react';
import Header from '../components/Header';

const Home = () => {
  return (
    <Box>
      <Header />
      <Container mt={8}>
        <Box>
          <p>Welcome to Luxcore Steakhouse!</p>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
