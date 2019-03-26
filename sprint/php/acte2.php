
<?php 
    $tab = array('nom' => 'noel');
    $prenom = 'noel';
    $nbre = 1;
    $float = 1.5;
    $bool = true;
    $null = null;
    $obj = new stdClass;
?>
<ul>
    <li><?php var_dump($prenom) ?></li>
    <li><?php var_dump($nbre) ?></li>
    <li><?php var_dump($float) ?></li>
    <li><?php var_dump($bool) ?></li>
    <li><?php var_dump($tab) ?></li>
    <li><?php var_dump($null) ?></li>
    <li><?php var_dump($obj) ?></li>
</ul>
