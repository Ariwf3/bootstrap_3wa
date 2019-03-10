<?php

function vd($v){
var_dump($v);
}



$nom = trim(urldecode($_POST["nom"]));
$prenom = trim(urldecode($_POST["prenom"]));
$objet = trim(urldecode($_POST["objet"]));
$message = trim(urldecode($_POST["message"]));
$societe = trim(urldecode($_POST["societe"]));

//variables mail
$from = trim(urldecode($_POST['email']));

if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $from)) // On filtre les serveurs qui rencontrent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}

$subject  = "Message de " . $nom ." ". $prenom . $passage_ligne.
" Objet: ". $objet . " de la société " . $societe;
$destinataire = 'aribassmulti@gmail.com';


// Pour les champs $expediteur / $copie / $destinataire, séparer par une virgule s'il y a plusieurs adresses
$expediteur = $from;
$copie = 'bassole.aristide@laposte.net';
$copie_cachee = 'aristide.bassole@laposte.net';
$objet = $subject; // Objet du message
$headers  = 'MIME-Version: 1.0' . "\n"; // Version MIME
$headers .= 'Reply-To: '.$expediteur."\n"; // Mail de reponse
$headers .= 'From: ' . $nom .' '. $prenom .' '. '<'.$expediteur.'>'."\n"; // Expediteur
$headers .= 'Delivered-to: '.$destinataire."\n"; // Destinataire
$headers .= 'Cc: '.$copie."\n"; // Copie Cc
$headers .= 'Bcc: '.$copie_cachee."\n\n"; // Copie cachée Bcc        
$message = $message;

// j'initialise un booleen
$bool = false;

// si les données existent et ne sont pas vides
if (isset($_POST) && !empty($_POST)) {
    // je passe mon booleen a true
    $bool = true;
    // si mon booleen et mon mail sont true
    if ($bool === true) 
    {
        $bool = '1';
        if ($bool === '1' && mail($destinataire, $objet, $message, $headers) === true) 
        {
            // on renvoie au script ajax 1 sinon 0(false)
            echo $bool; //1
        } else {
            echo '0';
        }
    } 
} else {
    echo '0';
}

