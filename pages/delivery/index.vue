<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Alamat Pengiriman</div>
        <p class="address-title">Warung Src (08123456789)</p>
        <p class="address-detail mb-2">Jl. Mampang Prapatan Raya No.3, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12790</p>
        <hr>
        <div class="text-header my-4">Jasa Pengiriman</div>
        <div class="form-check mb-4">
          <div class="row justify-content-between">
          <div class="col-auto">
          <input class="form-check-input" type="radio" name="deliveryOptions" id="deliveryRadios1" value="option1" checked>
          <label class="address-title" for="deliveryRadios1">
            Dikirim
          </label>
          </div>
          <div class="col-auto align-self-center text-label-delivery">1-2 Hari</div>
          </div>
          <span>Biaya jasa pengiriman = Gratis Jadwal pengiriman barang hanya akan dikirimkan pada hari Senin, Rabu, Kamis, dan Sabtu. Jika barang ingin dikirim di luar jadwal di atas, silahkan pilih pengiriman instan.</span>
        </div>
        <div class="form-check">
          <div class="row justify-content-between">
          <div class="col-auto">
          <input class="form-check-input" type="radio" name="deliveryOptions" id="deliveryRadios2" value="option1" checked>
          <label class="address-title" for="deliveryRadios2">
            Diambil
          </label>
          </div>
          <div class="col-auto align-self-center text-label-delivery">1-2 Hari</div>
          </div>
        </div>
        <hr>
        <div class="text-header my-4">Pesan</div>
        <b-form-input class="input-rounded-xd mb-4" v-model="message" placeholder="Tulis pesan untuk penjual"></b-form-input>
    </div>
    <div class="col-12 align-self-start p-0">
    </div>
    <div class="col-12 align-self-end p-0">
      <div class="row justify-content-center col-12">
        <b-button type="submit" form="register-form" class="col-5 m-1 btn-xds outline-blue-base split-two" variant="outline-primary">Belanja Lagi</b-button>
        <b-button type="submit" form="register-form" class="col-5 m-1 btn-xd split-two blue-base">Lanjut</b-button>
      </div>
    </div>
</div>
</template>

<style>
.address-title {
font-weight: 700;
font-size: 16px;
color: #000000DE;
letter-spacing: 0;
line-height: 19px;
}
</style>

<script>
export default {
    layout: 'default',
    data() {
        return {
          message: ''
        }
    },
}
</script>
