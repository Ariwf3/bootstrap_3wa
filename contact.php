<?php

function vd($v){
var_dump($v);
}


vd($_POST);
vd($_POST['societe']);


if (isset($_POST)) {
    echo '1';
} else {
    echo 'non';
}