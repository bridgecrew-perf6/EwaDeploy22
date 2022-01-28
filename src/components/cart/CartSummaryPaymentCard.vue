<template>
  <div class="cart-item-card">
    <h3>Gesamtpreis: {{ cart_total.toFixed(2) }} €</h3>
    <button class="view-product-button" @click="goToStripe()">
      Bezahlen mit Stripe
    </button>
  </div>
</template>

<script>
export default {
  props: ["itmes"],
  methods: {
    goToStripe() {
      window.open(
        "https://iws107.informatik.htw-dresden.de/ewa/g11/PHP/Stripe/receive_order.php?order=" +
          this.cart_string.slice(0, -1)
      );
      console.log(this.cart_string.slice(0, -1));
    },
  },
  computed: {
    cart_total() {
      return this.$store.getters.cartItems.reduce(
        (a, b) => a + b.PreisBrutto * b.quantity,
        0
      );
    },
    cart_string() {
      return this.$store.getters.cartItems.reduce(
        (a, b) => b.ProduktID + "-" + b.quantity + ("_" + a),
        ""
      );
    },
  },
};
</script>