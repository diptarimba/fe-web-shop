<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        class="btns btn--minus rounded"
        @click="changeCounter('-1')"
        type="button"
        name="button"
      >
        -
      </button>
      <input
        class="quantity border-left-0 border-right-0"
        type="text"
        name="name"
        :value="counter"
      />
      <button
        class="btns btn--plus rounded"
        @click="changeCounter('1')"
        type="button"
        name="button"
      >
        +
      </button>
    </div>
  </div>
</template>
<style scoped>
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  font-size: 14px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
  width: 30px;
}

.btns {
  border: 1px solid #e1e8ee;
  /*   border-radius: 6px; */
  cursor: pointer;
  width: 30px;
  background: none;
}
button:focus,
input:focus {
  outline: 0;
}
</style>
<script>
export default {
  props: {
    counters: { required: true, type: Number },
  },
  data() {
    return {
      counter: this.counters,
    };
  },
  methods: {
    changeCounter: function (num) {
      this.counter += +num;
      console.log(this.counter);
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);

      return this.counter;
    },
  },
};
</script>
