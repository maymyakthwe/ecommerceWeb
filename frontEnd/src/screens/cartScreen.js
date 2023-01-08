import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import { parseRequestUrl } from "../utils";

const addtoCart = (item, forceUpdate = false) => {
    let cartItems = getCartItems();
    const existItem = cartItems.find(x => x.product === item.product);
    if (existItem) {
        cartItems = cartItems.map((x) =>
            x.product === existItem.product ? item : x
        );
    } else {
        cartItems = [...cartItems, item];
    }
    setCartItems(cartItems);
};

const cartScreen = {
    after_render: () => {

    },
    render: async () => {
        const request = parseRequestUrl();
        if (request.id) {
            const product = await getProduct(request.id);
            addtoCart({
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty: 1,
            });
        }
        return (`<div> Cart Screen</div>
        <div>${getCartItems().length}</div>`);
    }
};
export default cartScreen;