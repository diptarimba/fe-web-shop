<template>
<div>
  <button class="btns btn--minus" @click="changeCounter('-1')" type="button" name="button">
      -
  </button>
  <input class="quantity" type="text" name="name" :value="counter">
  <button class="btns btn--plus" @click="changeCounter('1')" type="button" name="button">
      +
  </button>
</div>
</template>
<style>
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
    width: 20px;
  font-size: 12px;
  margin-bottom: 10px;
  color: #43484D;
  font-weight: 300;
	border: 1px solid #E1E8EE;
}
.btns {
	border: 1px solid #E1E8EE;
  width: 20px;
  background-color: #E1E8EE;
  border-radius: 6px;
  cursor: pointer;
}
button:focus,
input:focus {
  outline:0;
}
</style>
<script>
export default {
  props: {
    counters: {required: true, type: Number},
  },
  data() {
    return {
        counter: this.counters,
    }
  },
  methods: {
    changeCounter: function(num){
      this.counter += +num;
      console.log(this.counter);
      !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;
    }
}
}
</script>
