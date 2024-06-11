import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699", description: "Latest model with all the new features." },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999", description: "High performance laptop for all your needs." },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199", description: "Noise-cancelling headphones with superior sound quality." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Heading mt={4}>{product.name}</Heading>
      <Text fontSize="xl" mt={2}>{product.price}</Text>
      <Text mt={4}>{product.description}</Text>
    </Box>
  );
};

export default ProductDetail;