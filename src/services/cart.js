const cart = [];

//adiciona itens ao carrinho
function addItem(item, qty) {
  const itemExists = cart.findIndex((el) => el.item.name === item.name);

  if (itemExists < 0) {
    const cartItem = {
      item,
      qty,
      subtotal: function () {
        return this.item.price * this.qty;
      },
    };
    cart.push(cartItem);
  } else {
    cart[itemExists].qty += qty;
  }
}

//remove uma unidade do item do carrinho ou o item caso o item seja 1
function decreaseItemQty(itemName) {
  cart.forEach((el, id) => {
    if (el.item.name === itemName) {
      if (el.qty > 1) {
        console.log("aqui");
        el.qty--;
      } else {
        cart.splice(id, 1);
      }
    }
  });
}

//remove o item do carrinho completamente
function deleteCartItem(itemName) {
  cart.splice(
    cart.findIndex((el) => el.item.name === itemName),
    1
  );
}

//mostra o carrinho na tela
function showCart() {
  console.log("\n[SHOPEE CART]\n");
  let cartTotal = 0;

  console.log("Cart items:");
  console.log("--------");

  cart.forEach((el, id) => {
    cartTotal += el.subtotal();
    console.log(
      `${id + 1} - ${el.item.name} | ${el.item.price} x ${
        el.qty
      } = ${el.subtotal()}`
    );
  });

  console.log("--------");
  console.log(`Total Items:${cart.length}`);
  console.log(`Total Cart: ${cartTotal}`);
}

export { addItem, showCart, decreaseItemQty, deleteCartItem };
