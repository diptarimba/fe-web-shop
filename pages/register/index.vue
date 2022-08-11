<template>
<div class="row flex-grow-1 broder container mx-auto">
    <div class="col-12 align-self-start p-0">
        <div class="text-header my-4">Alamat</div>
        <b-form class="" id="register-form" @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="register-email-group" label="Nama Warung" label-class="text-label-muted" label-for="register-email">
                <b-form-input id="register-email" v-model="form.name" type="text" class="input-rounded-xd" placeholder="Warung SRC" required></b-form-input>
            </b-form-group>

            <b-form-group id="register-name-group" label-class="text-label-muted" label="Invitation Code" label-for="register-name">
                <b-form-input id="register-name" v-model="form.code" class="input-rounded-xd" placeholder="WR12345678" required></b-form-input>
            </b-form-group>
            <b-form-group id="register-username-group" label-class="text-label-muted" label="Username" label-for="register-username">
                <b-form-input id="register-username" v-model="form.username" class="input-rounded-xd" placeholder="wsrc" required></b-form-input>
            </b-form-group>
            <b-form-group id="register-password-group" label-class="text-label-muted" label="Password" label-for="register-password">
                <b-form-input id="register-password" v-model="form.password" class="input-rounded-xd" type="password" placeholder="******" required></b-form-input>
            </b-form-group>
            <b-form-group id="register-re-password-group" label-class="text-label-muted" label="Re-insert Password" label-for="register-re-password">
                <b-form-input id="register-re-password" class="input-rounded-xd" v-model="form.repassword" type="password" placeholder="******" required></b-form-input>
            </b-form-group>
        </b-form>
    </div>
    <div class="col-12 align-self-end text-center p-0">
        <b-button type="submit" form="register-form" class="col-12 mb-3 btn-xd"><span class="registrasi-xd">Registrasi</span></b-button>
    </div>
</div>
</template>

<style>

</style>

<script>
export default {
    layout: 'default',
    data() {
        return {
            form: {
                name: '',
                code: '',
                username: '',
                password: '',
                repassword: '',
            },
            foods: [{
                text: 'Select One',
                value: null
            }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
            this.form.name = ''
            this.form.code = ''
            this.form.username = ''
            this.form.password = ''
            this.form.repassword = ''
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
