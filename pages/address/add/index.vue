<template>
  <div id="add" class="container">
    <div class="flex-grow-1 broder mx-auto">
      <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">
          <nuxt-link :to="{ path: '/address' }">
            <img src="/img/arrow.svg" height="16" class="mr-2" alt="" />
          </nuxt-link>
          Alamat
        </div>
        <b-form
          class=""
          id="address-form"
          @submit="onSubmit"
          @reset="onReset"
          v-if="show"
        >
          <b-form-group
            id="address-add-province-group"
            label="Provinsi"
            label-class="text-label-muted"
            label-for="address-add-province"
          >
            <b-form-input
              id="address-add-province"
              v-model="form.province"
              type="text"
              class="input-rounded-xd"
              placeholder="DKI Jakarta"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="address-add-city-group"
            label-class="text-label-muted"
            label="Kota"
            label-for="address-add-city"
          >
            <b-form-input
              id="address-add-city"
              v-model="form.city"
              class="input-rounded-xd"
              placeholder="Jakarta Selatan"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="address-add-district-group"
            label-class="text-label-muted"
            label="Kecamatan"
            label-for="address-add-district"
          >
            <b-form-input
              id="address-add-district"
              v-model="form.district"
              class="input-rounded-xd"
              placeholder="Mampang Prapatan"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="address-add-subdistrict-group"
            label-class="text-label-muted"
            label="Kelurahan"
            label-for="address-add-subdistrict"
          >
            <b-form-input
              id="address-add-subdistrict"
              v-model="form.subdistrict"
              class="input-rounded-xd"
              type="text"
              placeholder="Mampang Prapatan"
              required
            ></b-form-input>
          </b-form-group>
          <div class="row">
            <div class="col-6 pr-1">
              <b-form-group
                id="address-add-rt-group"
                label-class="text-label-muted"
                label="RT"
                label-for="address-add-rt"
              >
                <b-form-input
                  id="address-add-rt"
                  class="input-rounded-xd"
                  v-model="form.rt"
                  type="text"
                  placeholder="01"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="col-6 pl-1">
              <b-form-group
                id="address-add-rw-group"
                label-class="text-label-muted"
                label="RW"
                label-for="address-add-rw"
              >
                <b-form-input
                  id="address-add-rw"
                  class="input-rounded-xd"
                  v-model="form.rw"
                  type="text"
                  placeholder="08"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <b-form-group
            id="address-add-detail-group"
            label-class="text-label-muted"
            label="Alamat Detail"
            label-for="address-add-detail"
          >
            <b-form-textarea
              id="address-add-detail"
              class="input-rounded-xd"
              size="lg"
              rows="4"
              v-model="form.detail"
              placeholder="Small textarea"
            ></b-form-textarea>
          </b-form-group>
        </b-form>
      </div>
    </div>
    <div class="row mt-5 justify-content-between p-2">
      <div class="col-6 px-1">
        <b-button
          type="submit"
          form="address-form"
          class="btn-save w-100"
          variant="primary"
          >Simpan</b-button
        >
      </div>
      <div class="col-6 px-1">
        <b-button
          form="address-form"
          class="btn-cancel w-100"
          variant="outline-secondary"
          ><span>Batal</span></b-button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-save {
  background: #3f37c9 0% 0% no-repeat padding-box !important;
  color: white;
  border: 1px solid #3f37c9;
  padding: 0.75rem 1rem;
  border-radius: 10px;
}
.btn-save:hover {
  background: #1f18b1 !important;
}
.btn-cancel {
  border-radius: 10px;
  padding: 0.75rem 1rem;
}
</style>

<script>
import { BIcon, BIconArrowLeftCircle } from "bootstrap-vue";

export default {
  layout: "default",
  components: {
    BIcon,
    BIconArrowLeftCircle,
  },
  data() {
    return {
      form: {
        province: "",
        city: "",
        district: "",
        subdistrict: "",
        rt: "",
        rw: "",
        detail: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.province = "";
      this.form.city = "";
      this.form.district = "";
      this.form.subdistrict = "";
      this.form.rt = "";
      this.form.rw = "";
      this.form.detail = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
