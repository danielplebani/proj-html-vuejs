<script>
import AppSeparator from './utility/AppSeparator.vue';
import ContactsQuick from '../componentsFather/ContactsQuick.vue';
import ContactsContact from '../componentsFather/ContactsContact.vue';

export default{
    name: 'FooterContacts',

    components: {
        AppSeparator,
        ContactsContact,
        ContactsQuick
    },

    data(){
        return{
            quicks:['Careers', 'News', 'Terms of Use', 'Privacy Projects', 'About', 'Contact'],

            address: {
                street: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051',
                mail: 'info@yourdomain.com',
                number: '+99 (0) 101 0000 888'
            }
        }
    }
}
</script>

<template>
    <div class="d-flex">
        <!--company-->
        <div class="col-3 d-flex flex-column px-3">
            <img style="width: 60%;" class="mb-3" src="../assets/img/cropped-Group-39-2x.png">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, nobis. Delectus sunt quo perferendis provident vitae blanditiis, sit deleniti saepe odio laboriosam laborum earum repudiandae.</p>
        </div>

        <!--quick links-->
        <div class="col-3 d-flex flex-column px-3">
            <h5 class="mb-4"><strong>QUICK LINKS</strong></h5>

            <AppSeparator class="mb-3"></AppSeparator>

            <ul>
                <ContactsQuick v-for="quick in quicks" :text="quick"></ContactsQuick>
            </ul>
        </div>
 
        <!--contacts-->
        <ContactsContact :street="address.street" :mail="address.mail" :number="address.number"></ContactsContact>

        <!--location-->
        <div class="col-3 d-flex flex-column px-3">
            <h5 class="mb-4"><strong>LOCATION ON MAP</strong></h5>

            <AppSeparator class="mb-3"></AppSeparator>

            <img src="../assets/img/map.png" alt="map">
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/colors/AppColors.scss' as *;

p{
    color: $text-gray_80;
    font-family: 'Ar one sans', monospace;
    font-size: small;
}

h5{
    font-family: 'AR One Sans', sans-serif;
}

ul{
    list-style: none;
    padding: 0;
}

img{
    cursor: pointer;
}
</style>