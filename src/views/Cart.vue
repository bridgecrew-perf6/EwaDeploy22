<template>
  <div>
    <h1>Ihr Einkaufswagen</h1>

    <CartItemCard v-for="item in items" :key="item.ProduktID" :item="item" />

    <CartSummaryPaymentCard :items="items" />
  </div>
</template>

<script>
import CartItemCard from "../components/cart/CartItemCard.vue";
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard.vue";
export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>