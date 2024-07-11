import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const CartItem = ({ item, onIncrement, onDecrement, onDelete, idx }) => {
  const { id, name, description, imageUrl, quantity, price } = item;

  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex align="center">
        <IconButton
          icon={<FaTrashAlt />}
          variant="ghost"
          aria-label="Remove item"
          color="gray.500"
          size="sm"
          onClick={() => onDelete(id, idx)}
        />
        <Image
          src={imageUrl}
          alt={name}
          boxSize="100px"
          objectFit="cover"
          ml={5}
          borderRadius={8}
        />
        <Box ml={4}>
          <Text fontWeight="bold">{name}</Text>
          <Text color="gray.500">{description}</Text>
        </Box>
      </Flex>
      <Flex align="center" justifyContent={"space-between"} width={"40%"} maxW={"400px"}>
        <Flex align={"center"}>
          <IconButton
            icon={<AddIcon />}
            size="sm"
            onClick={() => onIncrement(id, idx)}
          />
          <Text mx={4}>{quantity}</Text>
          <IconButton
            cursor={quantity === 1 ? "not-allowed" : "pointer"}
            opacity={quantity === 1 ? 0.5 : 1}
            icon={<MinusIcon />}
            size="sm"
            onClick={() => onDecrement(id, idx)}
          />
        </Flex>
        <Text ml={4} width={"33%"}>
          &#8377;{price * quantity}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CartItem;
