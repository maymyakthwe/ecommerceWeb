import homeScreen from "./screens/homeScreen.js";
import productScreen from "./screens/productScreen.js";
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";
import error404Screen from "./screens/error404Screen.js";
import cartScreen from "./screens/cartScreen.js";
import signInScreen from './screens/signInScreen'
import Header from "./component/headers.js";
import registerScreen from "./screens/registerScreen.js";
import profileScreen from "./screens/profileScreen.js";
import shippingScreen from "./screens/shippingScreen.js";
import paymentScreen from "./screens/paymentScreen.js";

const routes = {
    "/": homeScreen,
    "/product/:id": productScreen,
    '/cart/:id': cartScreen,
    '/cart': cartScreen,
    '/signin': signInScreen,
    '/register': registerScreen,
    '/profile': profileScreen,
    '/shipping': shippingScreen,
    '/payment': paymentScreen,
};

const router = async () => {
    showLoading();
    const request = parseRequestUrl();
    const parseUrl =
        (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();

    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
    hideLoading();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router)

//is routes an object ??
//what is axios/ajex ??
//eslint //how to disable lf/crlf error??