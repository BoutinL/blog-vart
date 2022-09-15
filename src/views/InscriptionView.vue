<template>
    <form class="form-inscription" id="create_user">
        <fieldset class="identifiants">
            <h1>Inscription</h1>
            <hr>
            <label>
                <span>Nom</span>
                <input type="text" name="firstname">
            </label>
            <label>
                <span>Prénom</span>
                <input type="text" name="lastname">
            </label>
            <label>
                <span>Nom d'utilisateur</span>
                <input type="text" name="username" required>
            </label>
            <label>
                <span>Email</span>
                <input type="text" name="email" required>
            </label>
            <label>
                <span>Mot de passe</span>
                <input type="password" name="pass" required>
            </label>
            <label>
                <span>Confirmation du mot de passe</span>
                <input type="password" name="repass" required>
            </label>
            <input type="submit" name="submit" value="S'inscrire" class="btn-submit">
            <span class="note-text">Déja inscrit ?</span><a class="note-lien" href="ConnexionView.vue">Se connecter</a>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'InscriptionView',
    data() {
        return {
            newUser: {},
        }   
    },
    methods:{ 
        sendForm(e) {
            const formData = new FormData(document.getElementById("create_user"));
            for (let data of formData.entries()) {
                this.newUser[data[0]] = data[1];
            }
            console.log(this.usersList);
            const ids = this.usersList.map((object) => object.id);
            const max = Math.max.apply(null, ids);
            this.newUser.id = max + 1;
            this.usersList.push(this.newUser);
            this.$store.commit("setuserList", this.usersList);
            e.preventDefault();
            router.push("/users");
        },
    }
}
</script>

<style scoped>
.form-inscription{
    background-color: #cbcbcb;
}
h1{
    font-size: 1.5rem;
    text-align: left;
}
hr{
    border: 1px solid #62a1a9;
    border-radius: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.identifiants{
    border: none;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
input{
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    height: 2rem;
    text-align: center;
    border: none;
}

.btn-submit{
    background-color: #62a1a9;
    color: white;
    box-shadow: 2px 2px 2px black;
}

.btn-submit:hover{
    background-color: #7bcad5;
}

.note-lien{
    color: #62a1a9;
    display: flex;
    justify-content: center;
}
.note-text{
    display: flex;
    justify-content: center;
}
</style>