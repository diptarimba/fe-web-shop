<template>
  <div id="delivery" class="container">
    <div class="row flex-grow-1 broder mx-auto">
      <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Alamat Pengiriman</div>
        <p class="address-title mb-2">Warung Src (08123456789)</p>
        <p class="address-detail mb-2">
          Jl. Mampang Prapatan Raya No.3, <br />
          Mampang Prapatan, Jakarta Selatan, <br />
          DKI Jakarta 12790
        </p>
        <hr />
        <div class="text-header mt-4 mb-3">Jasa Pengiriman</div>
        <div class="form-check mb-4">
          <div class="row justify-content-between">
            <div class="col-auto">
              <input
                class="form-check-input"
                type="radio"
                name="deliveryOptions"
                id="deliveryRadios1"
                value="option1"
                checked
              />
              <label class="address-title mb-0" for="deliveryRadios1">
                Dikirim
              </label>
            </div>
            <div class="col-auto align-self-center text-label-delivery">
              1-2 Hari
            </div>
          </div>
          <span class="address-detail"
            >Biaya jasa pengiriman =
            <span class="font-weight-bold">Gratis</span>
            <br />
            Jadwal pengiriman barang hanya akan dikirimkan pada hari
            <span class="font-weight-bold"> Senin, Rabu, Kamis, dan Sabtu</span
            >.
            <br />

            Jika barang ingin dikirim di luar jadwal di atas, silahkan pilih
            <span class="font-weight-bold"> pengiriman instan </span>.</span
          >
        </div>
        <div class="form-check">
          <div class="row justify-content-between">
            <div class="col-auto">
              <input
                class="form-check-input"
                type="radio"
                name="deliveryOptions"
                id="deliveryRadios2"
                value="option1"
                checked
              />
              <label class="address-title mb-0" for="deliveryRadios2">
                Diambil
              </label>
            </div>
            <div class="col-auto align-self-center text-label-delivery">
              1-2 Hari
            </div>
          </div>
        </div>
        <hr />
        <div class="text-header mt-4 mb-3">Pesan</div>
        <b-form-textarea
          id="textarea"
          v-model="message"
          placeholder="Tulis pesan untuk penjual"
          rows="3"
          class="input-rounded-xd mb-4"
        ></b-form-textarea>
      </div>
    </div>
    <div class="row mt-5 mb-2 justify-content-between">
      <div class="col-6 pr-1">
        <b-button
          type="submit"
          form="register-form"
          class="w-100 btn-order"
          variant="outline-primary"
          >Belanja Lagi</b-button
        >
      </div>
      <div class="col-6 pl-1">
        <b-button
          type="submit"
          form="register-form"
          class="border-0 btn-next w-100"
          >Lanjut</b-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.address-title {
  font-weight: 700;
  font-size: 16px;
  color: #000000de;
}
input[type="radio"]:active {
  outline: none;
}
.address-detail,
textarea {
  font-size: 14px;
}
.btn-next {
  background: #3f37c9 0% 0% no-repeat padding-box !important;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.btn-next:hover {
  background: #1f18b1 !important;
}
.btn-order {
  color: #3f37c9 !important;
  border: 1px inset #3f37c9 !important;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.btn-order:hover {
  background: #1f18b1 !important;
  color: white !important;
}
</style>

<script>
export default {
  layout: "default",
  data() {
    return {
      message: "",
    };
  },
};
</script>
