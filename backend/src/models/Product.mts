// Define a TypeScript class to represent a Product object
export class Product {
  // Class fields
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;

  // Constructor is called whenever we create a new product
  constructor(name: string, price: number, description: string, image: string) {
    // Generate a unique ID using Date.now()
    // In a real-world app we might use MongoDB's _id or a UUID instead
    this.id = Date.now();
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = image;
  }
}
