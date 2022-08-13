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
            <span class="note-text">Pas encore inscrit ?</span><a class="note-lien" href="inscription.php"> Créer un compte</a>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'ConnexionView',
    data() {
        return {
            
        }   
    },
    methods:{ 
        
    }
}
</script>

<style scoped>
.form-connexion{
    background-color: #c5b2ec;
}
h1{
    font-size: 1.5rem;
    text-align: left;
}
hr{
    border: 1px solid #9370dc;
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
    border-radius: 20px;
    height: 2rem;
    text-align: center;
    border: none;
}

.btn-submit{
    background-color: #9370dc;
    color: white;
    box-shadow: 2px 2px 2px black;
}

.btn-submit:hover{
    background-color: #a48bdb;
}

.note-lien{
    color: #9370dc;
    display: flex;
    justify-content: center;
}
.note-text{
    display: flex;
    justify-content: center;
}
</style>