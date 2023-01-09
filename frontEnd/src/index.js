import homeScreen from "./screens/homeScreen.js";
import productScreen from "./screens/productScreen.js";
import { parseRequestUrl } from "./utils.js";
import error404Screen from "./screens/error404Screen.js";
import cartScreen from "./screens/cartScreen.js";
import signInScreen from './screens/signInScreen'
import Header from "./component/headers.js";

const routes = {
    "/": homeScreen,
    "/product/:id": productScreen,
    '/cart/:id': cartScreen,
    '/cart': cartScreen,
    '/signin': signInScreen,
};

const router = async () => {
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
    await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router)

//is routes an object ??
//what is axios/ajex ??
//eslint //how to disable lf/crlf error??