<template>
    <form class="form-connexion">
        <fieldset>
            <h1>Connexion</h1>
            <label>
                <span>Nom d'utilisateur</span>
                <input type="text" name="username">
            </label>
            <label>
                <span>Mot de passe</span>
                <input type="password" name="pass">
            </label>
            <input type="submit" name="submit" value="Connexion" class="btn-submit">
            <span>Pas encore inscrit ?<a href="inscription.php">Créer un compte</a></span>
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

<style>

</style>