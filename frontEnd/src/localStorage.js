export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItem')
        ? JSON.parse(localStorage.getItem('cartItem'))
        : [];
    return cartItems;
};

export const setCartItems = (cartItems) => {
    localStorage.setItem('cartItem', JSON.stringify(cartItems));
};

export const setUserInfo = ({
    _id = '',
    name = '',
    email = '',
    password = '',
    token = '',
    isAdmin = false,
}) => {
    localStorage.setItem('userInfo', JSON.stringify({
        _id, name, email, password, token, isAdmin,
    }));
};

export const clearUser = () => {
    localStorage.removeItem('userInfo');
}

export const getUserInfo = () => {
    return localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) :
        { name: '', email: '', password: '' };
}