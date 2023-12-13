export type MenuItem = {
    id: number;
    title: string;
    info: string;
    price: number;
    img: string;
 
    urlparams: string;
  };

  export interface Item {
    id: number;
    price: number;
    quantity: number;
    totalprice: number;
    name: string;
    img: string; // Assuming img is a string representing the image URL
  }
 export  interface CartState {
    OrderHistory: any[]; // You might want to define a type for OrderHistory
    CurrentCart: Item[];
    totalQuantity: number;
    showCart:boolean | undefined
  }