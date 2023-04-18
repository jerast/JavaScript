
// Method 1
const shoppingCart = () => {
    let cart = [];
    const addItems = (item) => {
        cart.push(item);
        console.log(cart);
    }
    return addItems;
}

const amazon = shoppingCart();
amazon("Mouse");
amazon("Keyboard");
amazon(`Display 24"`);

// Method 2
const shoppingCart2 = () => {
    let cart = []
    return {
        addItems(item){
            cart.push(item);
        },
        getCartItem(){
            return cart
        },
        removeItem(){
            cart.pop()
        }
    };
}

const amazon2 = shoppingCart2();
amazon2.addItems("Mouse");
amazon2.addItems("Keyboard");
amazon2.addItems(`Display 24"`);
amazon2.getCartItem() // ['Mouse', 'Keyboard', 'Display 24"']
amazon2.removeItem()
amazon2.getCartItem() // ['Mouse', 'Keyboard']
console.log( amazon2.getCartItem() )
