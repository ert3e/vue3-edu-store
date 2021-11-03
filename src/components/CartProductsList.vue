<template>
  <table class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>

    <!-- CartProductItem component -->
    <cart-item
        v-for="(product, index) in $root.cartProducts"
        :id="product.id"
        :key="index"
        :title="product.title"
        :category="product.category"
        :is-available="product.is_available"
        :price="product.price"
        :image="product.image"
        :quantity="product.quantity"
    />

    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{ $root.totalCount()}}</td>
      <td class="text-end">$ {{$root.totalPrices()}}</td>
    </tr>
    </tfoot>
  </table>
</template>

<script>
import CartItem from "./CartProductItem";

export default {
  components: { CartItem },
  name: "CartProductsList",

}
</script>

<style scoped>

</style>