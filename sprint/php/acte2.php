
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
    <li><?= var_dump($prenom) ?></li>
    <li><?= var_dump($nbre) ?></li>
    <li><?= var_dump($float) ?></li>
    <li><?= var_dump($bool) ?></li>
    <li><?= var_dump($tab) ?></li>
    <li><?= var_dump($null) ?></li>
    <li><?= var_dump($obj) ?></li>
</ul>
