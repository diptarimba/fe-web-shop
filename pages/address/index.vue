<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Alamat</div>
    </div>
    <div class="col-12 align-self-start text-center p-0">
      <img class="mb-1" :src="require(`~/assets/images/Empty State - Address.png`)">
      <p class="address-bold-title">Belum ada Alamat terdaftar nih</p>
      <p class="address-regular-desc">Klik "Tambah Alamat" untuk menambahkan Alamat pengiriman dan mulai pesananmu</p>
      <b-button :to="{path: '/address/add'}" class="address-btn" variant="outline-primary"><span class="address-text-btn">Tambah Alamat</span></b-button>
      <!-- <nuxt-link :to=""><button class="address-btn"><span class="address-text-btn">Tambah Alamat</span></button></nuxt-link> -->
    </div>
    <div class="col-12 align-self-start text-center p-0">
    </div>
</div>
</template>

<style>

</style>

<script>
export default {
    layout: 'default',
    data() {

    }
}
</script>
