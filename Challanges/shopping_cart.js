
// Method 1
function shoppingCart(){
    let cart = [];
    function addItems(item){
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
function shoppingCart2(){
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
amazon.addItems("Mouse");
amazon.addItems("Keyboard");
amazon.addItems(`Display 24"`);
amazon.getCartItem() // ['Mouse', 'Keyboard', 'Display 24"']
amazon.removeItem()
amazon.getCartItem() // ['Mouse', 'Keyboard']
