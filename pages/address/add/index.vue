<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4"><nuxt-link :to="{path: '/address'}"><b-icon-arrow-left-circle></b-icon-arrow-left-circle></nuxt-link>  Alamat</div>
        <b-form class="" id="address-form" @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="address-add-province-group" label="Provinsi" label-class="text-label-muted" label-for="address-add-province">
                <b-form-input id="address-add-province" v-model="form.province" type="text" class="input-rounded-xd" placeholder="DKI Jakarta" required></b-form-input>
            </b-form-group>
            <b-form-group id="address-add-city-group" label-class="text-label-muted" label="Kota" label-for="address-add-city">
                <b-form-input id="address-add-city" v-model="form.city" class="input-rounded-xd" placeholder="Jakarta Selatan" required></b-form-input>
            </b-form-group>
            <b-form-group id="address-add-district-group" label-class="text-label-muted" label="Kecamatan" label-for="address-add-district">
                <b-form-input id="address-add-district" v-model="form.district" class="input-rounded-xd" placeholder="Mampang Prapatan" required></b-form-input>
            </b-form-group>
            <b-form-group id="address-add-subdistrict-group" label-class="text-label-muted" label="Kelurahan" label-for="address-add-subdistrict">
                <b-form-input id="address-add-subdistrict" v-model="form.subdistrict" class="input-rounded-xd" type="text" placeholder="Mampang Prapatan" required></b-form-input>
            </b-form-group>
            <div class="col-12">
            <div class="row justify-content-between">
            <b-form-group id="address-add-rt-group" class="col-6 p-0 pr-1" label-class="text-label-muted" label="RT" label-for="address-add-rt">
                <b-form-input id="address-add-rt" class="input-rounded-xd" v-model="form.rt" type="text" placeholder="01" required></b-form-input>
            </b-form-group>
            <b-form-group id="address-add-rw-group" class="col-6 p-0 pl-1" label-class="text-label-muted" label="RW" label-for="address-add-rw">
                <b-form-input id="address-add-rw" class="input-rounded-xd" v-model="form.rw" type="text" placeholder="08" required></b-form-input>
            </b-form-group>
            </div>
            </div>
            <b-form-group id="address-add-detail-group" label-class="text-label-muted" label="Alamat Detail" label-for="address-add-detail">
                <b-form-textarea id="address-add-detail" class="input-rounded-xd" size="lg" v-model="form.detail" placeholder="Small textarea"></b-form-textarea>
            </b-form-group>
        </b-form>
    </div>
    <div class="col-12 align-self-end text-center mb-3">
        <div class="row justify-content-between">
        <b-button type="submit" form="address-form" class="col-6 p-0 pr-1 btn-xd" variant="primary"><span class="registrasi-xd">Simpan</span></b-button>
        <b-button form="address-form" class="col-6 p-0 pl-1 btn-round-xd" variant="outline-secondary"><span>Batal</span></b-button>
        </div>
    </div>
</div>
</template>

<style>

</style>

<script>
import { BIcon, BIconArrowLeftCircle } from 'bootstrap-vue'

export default {
    layout: 'default',
    components: {
    BIcon,
    BIconArrowLeftCircle
  },
    data() {
        return {
            form: {
                province: '',
                city: '',
                district: '',
                subdistrict: '',
                rt: '',
                rw: '',
                detail: '',
            },
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            this.form.province = ''
            this.form.city = ''
            this.form.district = ''
            this.form.subdistrict= ''
            this.form.rt = ''
            this.form.rw = ''
            this.form.detail = ''
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
