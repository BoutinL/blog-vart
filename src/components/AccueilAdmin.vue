<template>
<div class="gestionnaire">
    <h1>Liste des utilisateurs</h1>
    <hr>
    <section class="section-utilisateurs">
        <div class="liste-utilisateurs" v-for="userlist in allUserslist">
            <span class="info-utilisateurs">ID: {{ userlist.id }}</span>
            <span class="info-utilisateurs">Nom: {{ userlist.name }}</span>
            <span class="info-utilisateurs">Pseudo: {{ userlist.username }}</span>
            <span class="info-utilisateurs">E-mail: {{ userlist.email }}</span>
            <input type="button" @click="afficherModal(userlist.id , userlist.username, supActive)" class="btn-supr" value="Supprimer">
        </div>
        <Teleport to="body">
        <modalSupprimer :show="showModalSup" :userId="activeUserId" :userName="activeUserName" @cancel="showModalSup = false" @confirm="removeUser"></modalSupprimer>
        </Teleport>
    </section>
    <h2>Demandes d'inscription</h2>
    <hr>
    <section class="section-utilisateurs-demandes">
        <div class="liste-utilisateurs-demandes" v-for="usersRequest in allUsersRequest">
            <span class="info-utilisateurs">ID: {{ usersRequest.id }} </span>
            <span class="info-utilisateurs">Nom: {{ usersRequest.name }}</span>
            <span class="info-utilisateurs">Pseudo: {{ usersRequest.username }}</span>
            <span class="info-utilisateurs">E-mail: {{ usersRequest.email }}</span>
            <div class="btn-box">
                <input type="button" @click="ajouterUser(usersRequest.id)" value="Valider" class="btn-valider">
                <input type="button" @click="afficherModal(usersRequest.id , usersRequest.username, null)" class="btn-refuser" value="Refuser">
            </div>
        </div>
        <Teleport to="body">
        <ModalRefus :show="showModal" :userId="activeUserId" :userName="activeUserName" @cancel="showModal = false" @confirm="removeRequest"></ModalRefus>
        </Teleport>
    </section>
</div>
</template>

<script>
import ModalSupprimer from "@/components/ModalSupprimer.vue"
import ModalRefus from "@/components/ModalRefus.vue"
export default {
    name: 'AccueilAdmin',
    components: {
    ModalSupprimer,
    ModalRefus,
},
data: 
function() {
    return {
        userlist:[],
        allUserslist:[],
        usersRequest:[],
        allUsersRequest:[],
        showModalSup: false,
        showModal: false,
        activeUserId: 0,
        activeUserName: "",
        supActive: "sup"
    }
},
methods:{
    afficherModal(idUser, usernameUser, modal) {
        this.activeUserId = idUser;
        this.activeUserName = usernameUser;
        if (modal === "sup") {
            this.showModalSup = true;
        } else {
            this.showModal = true;
        }
    },
    removeUser(userId){
        this.$store.commit("removeUser", userId);
        this.showModalSup = false;
    },
    removeRequest(userId){
        this.$store.commit("refuseRequest", userId);
        this.showModal = false;
    },
    ajouterUser(userId){
        this.$store.commit("validateUser", userId)
    }
}
,
beforeMount() {
    this.allUsersRequest = this.$store.state.usersrequest;
    this.allUserslist= this.$store.state.userlist;
},
}
</script>

<style>
h1, h2{
    font-size: 1.5rem;
    font-weight: 900;
}

hr{
    border: 1px solid #62a1a9;
    border-radius: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.section-utilisateurs-demandes, .section-utilisateurs{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem;
}

.liste-utilisateurs{
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    box-shadow: 2px 2px 2px 2px rgb(90, 90, 90);
    border-radius: 10px;
    background-color: #F2F2F2;
    width: 17rem;
    margin-bottom: 2rem;
}

.liste-utilisateurs-demandes{
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    box-shadow: 2px 2px 2px 2px rgb(90, 90, 90);
    border-radius: 10px;
    background-color: #F2F2F2;
    width: 17rem;
    margin-bottom: 2rem;
}

.btn-supr{
    background-color: #FF3838;
    color: white;
    padding: 0.2rem;
    border-radius: 30px;
    width: 60%;
    margin: auto;
    margin-top: 0.5rem;
    font-weight: 700;
    border: none;
}

.btn-box{
    display: flex;
    padding: 0.5rem;
}
.btn-valider{
    background-color:#2DFF35;
    color: white;
    padding: 0.2rem;
    border-radius: 30px;
    width: 40%;
    margin: auto;
    font-size: 1rem;
    font-weight: 700;
    border: none
}
.btn-valider:hover{
  background-color: #88ff8c;
}

.btn-refuser{
  background-color: #FF3838;
  color: white;
  padding: 0.2rem;
  border-radius: 30px;
  width: 40%;
  margin: auto;
  font-size: 1rem;
  font-weight: 700;
  border: none
}

.btn-refuser:hover{
  background-color: #ff6969;
}
</style>
