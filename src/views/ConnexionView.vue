<template>
    <form class="form-connexion">
        <fieldset class="identifiants">
            <h1>Connexion</h1>
            <hr>
            <label>
                <span>Nom d'utilisateur</span>
                <input type="text" name="username">
            </label>
            <label>
                <span>Mot de passe</span>
                <input type="password" name="pass">
            </label>
            <input type="submit" name="submit" value="Connexion" class="btn-submit">
            <span class="note-text">Pas encore inscrit ?</span><a class="note-lien" href="inscriptionView.vue"> Créer un compte</a>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'ConnexionView',

    data() {
        return {
            usersList: [],
        };
    },
};
</script>

<style scoped>
.form-connexion{
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