import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">Welcome to Travel Booking</Heading>
        <Text fontSize="lg">Book flights, hotels, and car rentals all in one place.</Text>
        <Box display="flex" justifyContent="center" alignItems="center" gap={6}>
          <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">Book a Flight</Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">Book a Hotel</Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">Rent a Car</Button>
        </Box>
        <Image src="/images/travel-hero.jpg" alt="Travel" borderRadius="md" boxShadow="lg" />
      </VStack>
    </Container>
  );
};

export default Index;