import * as cart from "./services/cart.js";
import { createItem } from "./services/item.js";

const p1 = createItem("Brinquedo Carro do Batman", 12.99);
const p2 = createItem("Brinquedo Carro de Bombeiro", 9.99);
const p3 = createItem("Brinquedo Aviãozinho Teco-Teco", 21.19);

//Adiconando o mesmo produto ele soma nas quantidades
cart.addItem(p1, 2);
cart.addItem(p1, 3);

//Outros produtos
cart.addItem(p2, 2);
cart.addItem(p3, 1);

//Removendo item do carrinho
cart.deleteCartItem(p2.name);

//Removendo quantidade do item do carrinho
cart.decreaseItemQty(p1.name);
cart.decreaseItemQty(p1.name);

cart.showCart();
