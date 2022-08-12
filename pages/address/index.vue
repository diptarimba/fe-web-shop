<template>
  <div class="row flex-grow-1 broder mx-auto container">
    <div class="col-12 align-self-start p-0">
      <div class="text-header my-4">Alamat</div>
    </div>
    <div class="col-12 align-self-start text-center p-0">
      <img
        :src="require(`~/assets/images/Empty State - Address.png`)"
        width="154"
      />
      <p class="address-bold-title my-3">Belum ada Alamat terdaftar nih</p>
      <p class="address-regular-desc">
        Klik "Tambah Alamat" untuk menambahkan Alamat pengiriman dan mulai
        pesananmu
      </p>
      <b-button
        :to="{ path: '/address/add' }"
        class="address-btn address-text-btn"
        variant="outline-primary"
        >Tambah Alamat</b-button
      >
      <!-- <nuxt-link :to=""><button class="address-btn"><span class="address-text-btn">Tambah Alamat</span></button></nuxt-link> -->
    </div>
    <div class="col-12 align-self-start text-center p-0"></div>
  </div>
</template>

<style></style>

<script>
export default {
  layout: "default",
  data() {},
};
</script>
