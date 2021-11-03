<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">
            <product
                v-for="product in products"
                :id="product.id"
                :key="product.id"
                :title="product.title"
                :category="product.category"
                :is-available="product.is_available"
                :price="product.price"
                :image="product.image"
                @add-to-cart="$root.addToCart(product)"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "./Product";

export default {
  name: "ProductsList",
  components: { product },
  data: () => ({
    products: [],
  }),
  methods: {
    async fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      this.products = await response.json();
    }
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style scoped>

</style>