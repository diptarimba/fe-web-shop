<template>
  <div class="flex-grow-1 broder mx-auto container">
    <div class="align-self-start p-0">
      <div class="text-header my-4">Cart</div>
      <div
        v-for="(each, index) in good"
        :key="index"
        class="d-flex justify-content-start mb-3"
      >
        <img
          :src="each.image"
          style="width: 30%"
          class="img-reponsive rounded d-inline-flex"
        />
        <div class="ml-3">
          <div class="goods-title">
            {{ $options.filters.truncate(each.name, 20) }}
          </div>
          <div class="goods-requirement mt-1 mb-4">
            Min. Pembelian : {{ each.min }}
          </div>
          <div>
            <Counter :counters="each.stock" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 text-center p-0 mt-5">
      <b-button
        type="submit"
        form="register-form"
        class="w-100 mb-3 btn-xd border-0"
        ><span class="registrasi-xd">Selanjutnya</span></b-button
      >
    </div>
  </div>
</template>

<style scoped>
.goods-title {
  font-weight: 700;
  width: 201px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
img {
  max-height: 100px;
  object-fit: cover;
}
</style>

<script>
export default {
  layout: "default",
  data() {
    return {
      good: [
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Soto Ayam",
          min: 5,
          stock: 12,
          price: 18000,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Soto Lamongan",
          min: 5,
          stock: 20,
          price: 16000,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Makanan Panjang Pokoknya",
          min: 6,
          stock: 13,
          price: 14000,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Soto Tamanwinangun",
          min: 7,
          stock: 9,
          price: 12000,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Soto Boyolali",
          min: 5,
          stock: 27,
          price: 12400,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Bakso Urat",
          min: 6,
          stock: 30,
          price: 15300,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Bakso Mercon",
          min: 8,
          stock: 15,
          price: 14500,
        },
        {
          image: "https://placeimg.com/300/300/any",
          name: "Sachet Pecel Mercon",
          min: 5,
          stock: 6,
          price: 12100,
        },
      ],
    };
  },
};
</script>
