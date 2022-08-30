<template>
  <div class="row flex-grow-1 broder mx-auto">
    <div class="col-12 align-self-start p-0">
      <!-- <div class="thumbnail"> -->
      <img src="/img/menu.png" alt="" class="w-100 mx-auto image-croped" />
      <!-- </div> -->
      <div class="d-flex justify-content-between mt-3">
        <h6 class="p-0 m-0 goods-title flex-shrink-1">
          Sari Roti Roti Tawar Jumbo
        </h6>
        <h6 class="p-0 m-0 goods-price text-end">18.000</h6>
      </div>
      <span class="text-label-muted">Min. Pembelian. 5</span>
      <hr />
      <div class="text-center p-0">
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
    </div>

    <div class="col-12 align-self-end text-center p-0">
      <b-button type="submit" class="col-12 mb-3 btn-xd border-0"
        ><span class="registrasi-xd">Tambah Keranjang</span></b-button
      >
    </div>
  </div>
</template>

<style scoped>
.goods-title,
.goods-price {
  font-weight: 700;
  font-size: 18px;
  color: #000000de;
  letter-spacing: 0;
  line-height: 22px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
/* For decoration only */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
}
/* Product Quantity */
.wrapper {
  height: 30px;
  display: flex;
}
.quantity {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  font-size: 16px;
  color: #43484d;
  font-weight: 300;
  border: 1px solid #e1e8ee;
  width: 50px;
}

.btns {
  border: 1px solid #e1e8ee;
  /*   border-radius: 6px; */
  cursor: pointer;
  width: 30px;
  background: none;
}
.btn-group {
  height: 32px;
}
button:focus,
input:focus {
  outline: 0;
}
img.image-croped {
  max-height: 220px;
  height: 100%;
  object-fit: cover !important;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  name: "MenuDetail",
  layout: "default",
  // async asyncData ({ route }) {
  //   const api = 'http://localhost:8000/api/transaction/' + route.params.id
  //   // eslint-disable-next-line no-unused-vars
  //   const trxs = await axios.get(api).then((response) => {
  //     return response.data.data
  //   })
  //   // eslint-disable-next-line no-console
  //   console.log(trxs)
  //   return { trxs }
  // },
  data() {
    return {
      product: "",
      counter: 1,
      products: [
        {
          product_image: "/img/menu.png",
          product_name: "Sari Roti Roti Tawar Jumbo",
          product_price: "18.000",
          minimum_order: "5",
        },
      ],
    };
  },
  methods: {
    changeCounter: function (num) {
      this.counter += +num;
      console.log(this.counter);
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
    },
    dataProduct() {
      this.$axios.get("/product/" + this.$route.params.id).then((response) => {
        if (response.data.status === "OK") {
          this.product = response.data.data;
        }
      });
    },
  },
  created() {
    this.dataProduct();
  },
};
</script>
