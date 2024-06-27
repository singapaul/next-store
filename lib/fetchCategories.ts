export async function fetchCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories', {
      cache: 'no-store', // ensures fresh data on each request
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
  
    return res.json();
  }