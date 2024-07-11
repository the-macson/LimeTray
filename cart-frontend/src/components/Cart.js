import { useState, useEffect } from "react";
import { Box, Button, Text, useToast, Flex } from "@chakra-ui/react";
import { getCart, updateCart } from "@/services/cartService";
import CartItem from "@/components/CartItem";
import { z } from "zod";
import Loader from "./Loader";

const Cart = () => {
  const [items, setItems] = useState([]);
  const toast = useToast();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const cartSchema = z
    .array(
      z.object({
        id: z.number(),
        quantity: z.number(),
        product_id: z.number(),
      })
    )
    .nonempty("Cart cannot be empty");

  useEffect(() => {
    fetchCart();
  }, []);

  const showToast = (title, status, duration) => {
    toast({
      title,
      status,
      duration: duration ? duration : 2000,
      isClosable: true,
    });
  };

  const fetchCart = async () => {
    try {
      const { data } = await getCart();
      setItems((prev) => {
        return data.map((item) => {
          return {
            id: item.id,
            name: item.product.name,
            description: item.product.description,
            imageUrl: item.product.image,
            price: item.product.price,
            quantity: item.quantity,
            product_id: item.product.id,
          };
        });
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showToast("Failed to fetch cart", "error");
    }
  };

  const handleIncrement = (id, idx) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[idx] = {
        ...updatedItems[idx],
        quantity: updatedItems[idx].quantity + 1,
      };
      return updatedItems;
    });
    showToast(`${items[idx].name} quantity increased`, "success", 500);
  };

  const handleDecrement = (id, idx) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[idx] = {
        ...updatedItems[idx],
        quantity:
          updatedItems[idx].quantity > 1 ? updatedItems[idx].quantity - 1 : 1,
      };
      return updatedItems;
    });
    if (items[idx].quantity === 1) return;
    showToast(`${items[idx].name} quantity decreased`, "success", 500);
  };

  const handleDelete = (id, idx) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    showToast(`${items[idx].name} removed from cart`, "error", 1000);
  };

  const handleSave = async () => {
    const cart = items.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        product_id: item.product_id,
      };
    });

    const result = cartSchema.safeParse(cart);
    if (!result.success) {
      showToast(result.error.errors[0].message, "error");
      return;
    }
    setSaving(true);
    try {
      const { data } = await updateCart(cart);
      showToast(data.message, "success");
    } catch (error) {
      showToast("Failed to save cart", "error");
    }
    setSaving(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <Box border="1px solid" borderColor="green.400" borderRadius="md" p={4} m={8}>
      <Text fontSize="2xl" mb={4}>
        Shopping Bag
      </Text>
      {items.map((item, idx) => (
        <CartItem
          key={item.id}
          idx={idx}
          item={item}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
      <Flex align={"center"} mt={4}>
        <Button
          colorScheme="teal"
          onClick={handleSave}
          isLoading={saving}
          loadingText={"Saving..."}
        >
          Save Cart
        </Button>
        <Text
          ml={4}
          fontSize="lg"
          fontWeight="bold"
          color="green.500"
          textAlign="right"
        >
          Total: &#8377;
          {items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
        </Text>
      </Flex>
    </Box>
  );
};

export default Cart;
