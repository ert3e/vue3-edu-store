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
            if(this.cartProducts.length){
                //if has n
               if (!this.cartProducts.some(e => e.id === product.id)){
                   this.cartProducts.push(product);
               } else {
                   this.incrementProduct(product)
               }
            } else {
                this.cartProducts.push(product);
            }
        },
        removeProduct(product) {
            this.cartProducts = this.cartProducts.filter(function(value, index, arr){
                return value.id !== product.id;
            });
        },

        incrementProduct(product){
            this.cartProducts.forEach(function (value, key, array) {
                if (product.id === value.id) {
                    value.quantity++;
                    return false
                }
            })
        },
        decrementProduct(product){
            if(this.cartProducts.length) {
                this.cartProducts.forEach(function (value, key) {
                    if (product.id === value.id && value.quantity > 1) {
                        value.quantity--;
                    }
                })
            }
        },
        totalCount(){
            let total = 0;
            this.cartProducts.forEach(function (value) {
                total += value.quantity
            });
            return total;
        },
        totalPrices(){
            let total = 0;
            this.cartProducts.forEach(function (value) {
                total += value.quantity * value.price
            });
            return total;
        }
    }
});

app.component('products-list', ProductsList)
app.component('cart-button', CartButton)
app.component('cart-modal', CartModal)
app.mount("#app");
