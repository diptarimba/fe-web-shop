<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Kupon</div>
        <b-form-input class="input-rounded-xd search-button mb-4" v-model="searchText" placeholder="Search"></b-form-input>
        <b-card class="input-rounded-xd mb-3" v-for="(each, index) in listCoupon" :key="index">
            <!-- <b-card-body> -->
            <div class="col-12">
                <b-card-title class="card-coupon-title">{{each.title}}</b-card-title>
                <b-card-text class="card-coupon-body">{{each.description}}</b-card-text>
                <b-card-text class="text-label-muted">{{each.expired}}</b-card-text>
            </div>
            <!-- </b-card-body> -->
        </b-card>
    </div>
    <div class="col-12 align-self-start text-center p-0">
    </div>
    <div class="col-12 align-self-start text-center p-0">
    </div>
</div>
</template>

<style>
.card-coupon-title {
    font-weight: 700;
    font-size: 24px;
    text-align: left;
    color: #3F37C9;
    letter-spacing: 0;
    line-height: 29px
}

.card-coupon-body {
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    letter-spacing: 0;
    line-height: 18px
}
</style>

<script>
export default {
    layout: 'default',
    data() {
        return {
            searchText: '',
            listCoupon: [{
                    title: 'Potongah harga 25.000 1',
                    description: 'Dengan minimun berbelanja Rp 100.000 di Grosir 1',
                    expired: 'Berlaku hingga 29 Agustus 2022'
                },
                {
                    title: 'Potongah harga 25.000 2',
                    description: 'Dengan minimun berbelanja Rp 100.000 di Grosir 1',
                    expired: 'Berlaku hingga 30 Agustus 2022'
                },
                {
                    title: 'Potongah harga 25.000 3',
                    description: 'Dengan minimun berbelanja Rp 100.000 di Grosir 1',
                    expired: 'Berlaku hingga 31 Agustus 2022'
                },
                {
                    title: 'Potongah harga 25.000 4',
                    description: 'Dengan minimun berbelanja Rp 100.000 di Grosir 1',
                    expired: 'Berlaku hingga 32 Agustus 2022'
                },
            ]
        }
    }
}
</script>
