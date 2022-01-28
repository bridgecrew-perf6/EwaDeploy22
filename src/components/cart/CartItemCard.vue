<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ item.Produkttitel }}</h3>
      <h4>Im Einkaufswagen: {{ item.quantity }}</h4>
      <h4>Gesamtpreis: {{ item_cost.toFixed(2) }}€</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    item_cost() {
      return this.item.PreisBrutto * this.item.quantity;
    },
  },
};
</script>

<style lang="css">
.cart-item-card {
  width: 90%;
  margin: 3%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 5px;
  text-align: left;
}
.header {
  display: flex;
  justify-content: space-around;
}
</style>