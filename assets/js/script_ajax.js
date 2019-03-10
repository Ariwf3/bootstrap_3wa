$(function() {

    
    //variables
    let $contact = $("#form_contact");
    let $nom     = $("#nom");
    let $prenom  = $("#prenom");
    let $societe = $("#societe");
    let $email   = $("#email");
    let $objet   = $("#objet");
    let $message = $("#message");
    let $reinit  = $("#reinit");
    let $lien    = $("#lienContact");
    let $reload  = $("#bouton_retour");
    
    let serialized = $contact.serialize();
    console.log(serialized);
    

    // fonction de vérification des erreurs



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
            // reset messages d'erreur
            $("div.invalid-feedback, div.valid-feedback, div.text-success, div.text-danger").remove(".valid-feedback, .invalid-feedback, .all-success, #erreur-validation");
            // reset couleurs des champs
            $("#nom.is-invalid, #nom.is-valid, #prenom.is-invalid, #prenom.is-valid, #societe.is-invalid, #societe.is-valid, #email.is-invalid, #email.is-valid, #objet.is-invalid, #objet.is-valid, #message.is-invalid, #message.is-valid").removeClass("is-valid is-invalid");
        })
    }

    //Vérifications nom prenom societe email objet message
    
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

    
    //Message quand tous les champs requis semblent corrects à peaufiner avec l'event keyup.
    $contact.on("keyup",function(){

        $('#form_contact .text-success').remove();
        $('#form_contact .text-danger').remove();

        if ($contact.find(".is-invalid").length === 0 && $prenom.hasClass("is-valid") && $nom.hasClass("is-valid") && $email.hasClass("is-valid") && $objet.hasClass("is-valid") && $message.hasClass("is-valid") ) 
        {
            $contact.append("<div class='text-success all-success'><i>Tout semble correct ! </i><i class='fas fa-space-shuttle'></i></div>")
            $("#erreur-validation").remove();
        } else {
            $("#form_contact .text-success").remove();
        }
    })

    // RESET REINIT
    reset();


    // Soumission formulaire event submit
    $contact.on("submit", function(e){
        e.preventDefault();

        // variables de données à envoyer
        let $nom = encodeURIComponent($("#nom").val()),
        $prenom = encodeURIComponent($("#prenom").val()),
        $email = encodeURIComponent($("#email").val()),
        $societe = encodeURIComponent($("#societe").val()),
        $objet = encodeURIComponent($("#objet").val()),
        $message = encodeURIComponent($("#message").val());
    
        console.log($prenom);
        console.log($nom);
        $.post("contact.php",{
            prenom:$prenom,
            nom:$nom,
            email: $email,
            societe:$societe,
            objet:$objet,
            message:$message
        },
            function(data) {
                if (data === "1") {
                    //Verif erreurs
                 $('main #erreur-validation').remove();

                 if ($contact.find(".is-invalid").length === 0) {
                     // remplacement form par message de succès
                     $contact.remove();
                     $("main").append("<div style = 'font-size : 2em;' class = 'text-success'> Je vous remercie " + decodeURIComponent($prenom).charAt(0).toUpperCase() + decodeURIComponent($prenom).substring(1).toLowerCase() + " votre demande a bien été envoyée ! Je vous répondrai dans les meilleurs délais.</div><a href ='contact.html' id='bouton_retour'><button class='btn btn-success mt-4'>Revenir au formulaire</button></a>").hide().fadeIn(700);
                     $(".iframe").remove();

                     // rechargement de la page au click de contact ou du bouton ajouté dynamiquement
                     $lien.on("click", function () {
                         location.reload();
                     })
                     $reload.on("click", function () {
                         location.reload();
                     })
                 } else {
                    //  $contact.remove();
                    $('main .text-danger').remove();
                    
                     $("main").append("<div style = 'margin : 1em;' class = 'text-danger' id = 'erreur-validation'>Nous n\'avons pas été en mesure de valider votre demande. Veuillez vérifier vos informations s'il vous plaît.</div>").hide().fadeIn(400);

                     // rechargement de la page au clic de contact
                     $lien.on("click", function () {
                         location.reload();
                     })

                 } // fin else

                 // s'il y a une erreur
                } else {
                    $('main .text-danger').remove();

                    $("main").append("<div style = 'margin : 1em;' class = 'text-danger' id = 'erreur-validation'>Une erreur serveur est survenue veuillez réésayer ultérieurement s'il vous plaît.</div>").hide().fadeIn(400);
                }
            },//fin fonction retour
            "html"
        );
                 

        }); // fin event submit
    
    // FIN Soumission formulaire event submit

}) // fin jQuery