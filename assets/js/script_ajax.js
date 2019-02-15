$(function() {

    
    //variables
    let $contact = $("#form_contact");
    let $nom     = $("#nom");
    let $prenom  = $("#prenom");
    let $societe = $("#societe");
    let $email   = $("#email");
    let $objet   = $("#objet");
    let $message = $("#message");
    let $reinit   = $("#reinit");
    let $lien    = $("#lienContact");
    let $reload  = $("#bouton_retour");
    console.log($lien)

    // fonction de vérification des erreurs


    //     function checkErrors() {
    //     $('.is-invalid').removeClass('is-invalid');
    //     $(".is-valid").removeClass("is-valid");
    //     $(".invalid-feedback").remove();
    //     $(".valid-feedback").remove();
    // } 

    // FONCTIONS NETTOYAGE
    function checkNom(){
        $("#nom.is-invalid").removeClass("is-invalid");
        $("#nom.is-valid").removeClass("is-valid");
        $(".col-nom .invalid-feedback").remove();
        $(".col-nom .valid-feedback").remove();
    }

    function checkPrenom(){
        $("#prenom.is-invalid").removeClass("is-invalid");
        $("#prenom.is-valid").removeClass("is-valid");
        $(".col-prenom .invalid-feedback").remove();
        $(".col-prenom .valid-feedback").remove();
    }

    function checkSociete(){
        $("#societe.is-valid").removeClass("is-valid");
        $(".col-societe .valid-feedback").remove();
    }

    function checkEmail(){
        $("#email.is-invalid").removeClass("is-invalid");
        $("#email.is-valid").removeClass("is-valid");
        $(".col-email .invalid-feedback").remove();
        $(".col-email .valid-feedback").remove();
    }

    function checkObjet(){
        $("#objet.is-invalid").removeClass("is-invalid");
        $("#objet.is-valid").removeClass("is-valid");
        $(".col-objet .invalid-feedback").remove();
        $(".col-objet .valid-feedback").remove();
    }

    function checkMessage(){
        $("#message.is-invalid").removeClass("is-invalid");
        $("#message.is-valid").removeClass("is-valid");
        $(".col-message .invalid-feedback").remove();
        $(".col-message .valid-feedback").remove();
    }

    //Nettoyage classes bouton reset
    function reset(){
        $reinit.on("click", function () {
            $("div.invalid-feedback, div.valid-feedback").remove(".valid-feedback, .invalid-feedback");
            $("#nom.is-invalid, #nom.is-valid, #prenom.is-invalid, #prenom.is-valid, #societe.is-invalid, #societe.is-valid, #email.is-invalid, #email.is-valid, #objet.is-invalid, #objet.is-valid, #message.is-invalid, #message.is-valid").removeClass("is-valid is-invalid");
        })
    }

    //societe email objet message
    
    //Verification nom sur event keyup
    $nom.on("keyup",function(){

        // nettoyage erreurs
        checkNom();

        if ($nom.val().length <= 0 || $nom.val().length < 2) {
            $nom.addClass("is-invalid");
            $nom.parent().append("<div class='invalid-feedback'>Veuillez entrer au minimum 2 caractère s'il vous plaît.</div>")
        } else {
            $nom.addClass("is-valid");
            $nom.parent().append("<div class='valid-feedback'>Prêt à l'envoi Miaou !</div>");
        }
    })
    // FIN verification nom  sur event keyup

    //Verification prenom sur event keyup
    $prenom.on("keyup",function(){

        // nettoyage erreurs
        checkPrenom();

        if ($prenom.val().length <= 0 || $prenom.val().length < 2) {
            $prenom.addClass("is-invalid");
            $prenom.parent().append("<div class='invalid-feedback'>Veuillez entrer au minimum 2 caractère s'il vous plaît.</div>")
        } else {
            $prenom.addClass("is-valid");
            $prenom.parent().append("<div class='valid-feedback'>Prêt à l'envoi Miaou !</div>");
        }
    })
    // FIN verification nom sur event keyup

    // Vérification société sur event keyup (pas obligatoire donc pas d'ajout d'erreur)
    $societe.on("keyup",function(){

        //errors cleaning
        checkSociete();

        if ($societe.val().length > 0) {
            $societe.addClass("is-valid");
            $societe.parent().append("<div class='valid-feedback'>Prêt à l'envoi Miaou !</div>");
            } 
        })
    // FIN vérification société keyup
    

    // Vérification Email sur event keyup avec expression régulière
    $email.on("keyup", function(){

        //Vérification erreurs
        checkEmail();

        // Regex mail
        if (!(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test($email.val()) ) )
        {
            $email.addClass("is-invalid");
            $email.parent().append("<div class='invalid-feedback'>Veuillez entrer une adresse mail valide s'il vous plaît.</div>");
        } else {
            $email.addClass("is-valid");
            $email.parent().append("<div class='valid-feedback'>Prêt à l'envoi Miaou !</div>")
        }
    })
    // FIN Vérification Email keyup

    // Vérification objet keyup
    $objet.on("keyup", function(){
        // Vérification erreurs
        checkObjet();

        if ($objet.val().length <= 0 || $objet.val().length < 2) {
            $objet.addClass("is-invalid");
            $objet.parent().append("<div class='invalid-feedback'>Veuillez entrer au minimum 2 caractères s'il vous plaît.</div>");
        } else {
            $objet.addClass("is-valid");
            $objet.parent().append("<div class='valid-feedback'>Prêt à l'envoi Miaou!</div>");
        }
    })
    // FIN Vérification objet keyup

    
    // Vérification message
    $message.on("keyup", function(){

        // Vérifications erreurs
        checkMessage();

        if ($message.val().length <= 0 || $message.val().length < 15) {
            $message.addClass("is-invalid");
            $message.parent().append("<div class='invalid-feedback'>Veuillez entrer au minimum 15 caractères s'il vous plaît.</div>");
        } else {
            $message.addClass("is-valid");
            $message.parent().append("<div class='valid-feedback'>Prêt à l'envoi Miaou !</div>")
        }
    })
    // FIN vérification message keyup

    // RESET REINIT
    reset();

    // Soumission formulaire event submit
    $contact.on("submit", function(e){
        e.preventDefault();

        //Verif erreurs
        $('#form_contact .text-danger').remove();

        if ($contact.find(".is-invalid").length === 0) 
        {
            $contact.parent().replaceWith("<div style = 'font-size : 2em;' class = 'text-success'> Je vous remercie " + $prenom.val().charAt(0).toUpperCase() + $prenom.val().substring(1).toLowerCase() + " votre demande a bien été envoyée ! Je vous répondrai dans les meilleurs délais. <a href ='contact.html' id='bouton_retour'><button class='btn btn-success'>Revenir au formulaire</button></a></div>");
            $(".iframe").remove();

            // rechargement de la page au click de contact ou du bouton ajouté dynamiquement
            $lien.on("click",function(){
                location.reload();
            })
            $reload.on("click",function(){
                location.reload();
            })
        } else {
            $contact.append("<div style = 'margin : 1em;' class = 'text-danger'>Nous n\'avons pas été en mesure de valider votre demande. Veuillez vérifier vos informations s'il vous plaît.<a href ='contact.html'><button class='btn btn-danger' id='bouton_retour'>Revenir au formulaire</button></a></div>");

            // rechargement de la page au clic de contact ou du bouton ajouté dynamiquement
            $lien.on("click",function(){
                location.reload();
            })
            $reload.on("click", function(){
                location.reload();
            })
        }
    })
    // Soumission formulaire event submit

}) // fin jQuery