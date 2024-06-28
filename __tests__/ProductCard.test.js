import { render, screen } from "@testing-library/react";
import { ProductCard } from "@/components/ProductCard";
import '@testing-library/jest-dom';


const mockProduct = {
  category: "Electronics",
  price: 199.99,
  image: "/path/to/image.jpg",
  rating: {
    count: 150,
    rate: 4.5,
  },
  title: "Sample Product",
  description: "This is a sample product description.",
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);
 
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("This is a sample product description.")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("£199.99")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders the button correctly", () => {
    render(<ProductCard product={mockProduct} />);
    const button = screen.getByRole("button", { name: /View Product/i });
    expect(button).toBeInTheDocument();
  });
});
