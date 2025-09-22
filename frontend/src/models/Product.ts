export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;

  constructor(name: string, price: number, description: string, image: string) {
    this.id = Date.now();
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = image;
  }
}
