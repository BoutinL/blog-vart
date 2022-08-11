<template>
    <div class="form">
        <Inscription />
        <Connexion />
    </div>
</template>

<script>
import Inscription from '@/components/Inscription.vue'
import Connexion from '@/components/Connexion.vue'

export default {
    name: 'FormView',
    components: {
        Inscription,
        Connexion,
    },
    data() {
        return {
            connexionStatus : false ,
            inscriptionStatus : false ,
        }   
    },
    methods:{ 
        displayForm(status){
            if(status == true) {
                connexionStatus = !connexionStatus;
                inscriptionStatus = false;
            } else if (status == false) {
                inscriptionStatus = !inscriptionStatus;
                connexionStatus = false;
            }
        }
    }
}
</script>