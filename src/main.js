import {createApp} from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductsList from "./components/ProductsList";
import CartButton from "./components/CartButton";
import CartModal from "./components/CartModal";

const app = createApp({
    data:() => ({
        cartProducts:[]
    }),
    methods: {
        addToCart(product) {
            this.cartProducts.push(product)
        }
    }
});

app.component('products-list', ProductsList)
app.component('cart-button', CartButton)
app.component('cart-modal', CartModal)
app.mount("#app");
