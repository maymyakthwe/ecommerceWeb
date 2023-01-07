import { getProduct } from '../api';
import {parseRequestUrl} from '../utils'


const productScreen = {
    render: async() => {
        const request =parseRequestUrl();
        const product = await getProduct(request.id);
        return `<h1>${product.name}</h1>`
    },
};
export default productScreen;