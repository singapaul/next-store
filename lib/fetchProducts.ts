import type { ProductType } from "@/types";

export async function fetchProducts(
  category?: string | undefined,
  sort?: string | undefined
): Promise<ProductType[]> {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";

  const withParams = sort ? url + `?&sort=${sort}` : url;

  const res = await fetch(withParams);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
