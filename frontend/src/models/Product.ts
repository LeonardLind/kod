// Define a Product class to represent product objects
export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;

  // Constructor initializes a new Product instance
  constructor(name: string, price: number, description: string, image: string) {
    // Assign a unique id based on the current timestamp
    this.id = Date.now();
    // Assign the rest of the properties from arguments
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = image;
  }
}
