<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
      <!-- <div class="thumbnail"> -->
        <img src="https://placeimg.com/200/300/any" alt="" class="w-100 rounded mx-auto image-croped">
      <!-- </div> -->
        <div class="row justify-content-between col-12 mt-2">
            <span class="col-auto p-0 m-0 goods-title flex-shrink-1">Sachet Soto Lamongan</span>
            <span class="col-auto p-0 m-0 goods-price">18.000</span>
        </div>
        <span class="text-label-muted">Min. Pembelian. 5</span>
    </div>
    <div class="col-12 align-self-start text-center p-0">
        <button class="btns btn--minus" @click="changeCounter('-1')" type="button" name="button">
            -
        </button>
        <input class="quantity" type="text" name="name" :value="counter">
        <button class="btns btn--plus" @click="changeCounter('1')" type="button" name="button">
            +
        </button>
    </div>
    <div class="col-12 align-self-end text-center p-0">
       <b-button type="submit" class="col-12 mb-3 btn-xd"><span class="registrasi-xd">Tambah Keranjang</span></b-button>
    </div>
</div>
</template>

<style>
.goods-title,
.goods-price {
    font-weight: 700;
    font-size: 18px;
    color: #000000DE;
    letter-spacing: 0;
    line-height: 22px;
}



*, *::before, *::after {
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
    width: 20px;

  font-size: 16px;
  color: #43484D;
  font-weight: 300;
	border: 1px solid #E1E8EE;
}

.btns {
	border: 1px solid #E1E8EE;
  width: 20px;
  background-color: #E1E8EE;
/*   border-radius: 6px; */
  cursor: pointer;
}
button:focus,
input:focus {
  outline:0;
}
img.image-croped {
  max-height: 150px;
  height: 100%;
  object-fit: cover !important;
  background-repeat: no-repeat;
}

</style>

<script>
export default {
    layout: 'default',
    data() {
        return {
            counter: 1,
        }
    },
    methods: {
        changeCounter: function(num){
				this.counter += +num
				console.log(this.counter)
				!isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;

			}
		},
}
</script>
