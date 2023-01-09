export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItem')
        ? JSON.parse(localStorage.getItem('cartItem'))
        : [];
    return cartItems;
};

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItem', JSON.stringify(cartItems));
};
