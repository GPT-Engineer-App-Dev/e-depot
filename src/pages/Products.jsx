import { Box, SimpleGrid, Image, Text, Link, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">
                <Link as={RouterLink} to={`/products/${product.id}`}>
                  {product.name}
                </Link>
              </Text>
              <Text mt={2}>{product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;