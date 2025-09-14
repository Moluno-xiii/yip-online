import { Product } from "./store/slices/products";

interface NewProductInput {
  products: Product[];
  productTitle: string;
  productPrice: string;
  selectedImage: string | undefined;
}

const numberRegex = /^\d+(\.\d+)?$/;

const validateInput = ({
  products,
  productPrice,
  productTitle,
  selectedImage,
}: NewProductInput): { success: boolean; error: string | undefined } => {
  const doesProductAlreadyExist = products.find(
    (p) => p.name.toLowerCase() === productTitle.toLowerCase()
  );

  if (products.length >= 5) {
    return {
      success: false,
      error:
        "You've reached the maximum allowed capacity (5) for products, delete an existing product before you can add another.",
    };
  }

  if (!numberRegex.test(productPrice) || Number(productPrice) <= 0) {
    return { success: false, error: "Invalid price, price must be >= 1" };
  }

  if (productTitle.length < 1) {
    return { success: false, error: "Product name is required!" };
  }

  if (!selectedImage) {
    return { success: false, error: "You haven't selected any Image." };
  }

  if (doesProductAlreadyExist) {
    return {
      success: false,
      error:
        "A product with this name already exists, change the name and try again.",
    };
  }
  return { success: true, error: undefined };
};

export { validateInput };
