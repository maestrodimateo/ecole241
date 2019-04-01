<?php
$students = [
    array(
        'nom'    => "MEBALE", 
        'prenom' => "Noël",
        'age'    => 28,
        'profil' => "https://maestrodimateo.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "KAMGOUA", 
        'prenom' => "Grace",
        'age'    => 28,
        'profil' => "https://lacastafiore.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "LINE", 
        'prenom' => "Véïka",
        'age'    => 26,
        'profil' => "https://lineveika.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "LINE", 
        'prenom' => "Véïka",
        'age'    => 26,
        'profil' => "https://lineveika.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "MBELA", 
        'prenom' => "Kevinn",
        'age'    => 21,
        'profil' => "https://mbela-kevinn98.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "NGOUA", 
        'prenom' => "Ismael",
        'age'    => 21,
        'profil' => "https://ismael8.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "ITOUTOU", 
        'prenom' => "Berny François",
        'age'    => 21,
        'profil' => "https://bernyfrancois.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "CAPITAINE", 
        'prenom' => "Didier",
        'age'    => 28,
        'profil' => "https://capitaine7.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => "MAURIO", 
        'prenom' => "Joe",
        'age'    => 26,
        'profil' => "https://joemaurio.github.io/ecole241/profil/"
    ),
    array(
        'nom'    => " NOUBISSI", 
        'prenom' => "Yannick",
        'age'    => 34,
        'profil' => "https://elieyan.github.io/ecole241/profil/"
    )
];
?>

<!doctype html>
<html lang="fr">
  <head>
    <title>Tous les etudiants</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <div class="container">
      <h4>Les étudiants d'okacode</h4>
        <table class="table table-striped table-bordered table-hover table-sm">
        <caption>Tous les étudiants de OKACODE</caption>
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Age</th>
                    <th>Profil</th>
                </tr>
            </thead>
            <tbody>
                <?php for($i = 0;$i < count($students); $i++): ?>
                <tr>
                    <td><?= $i+1 ?></td>
                    <td><?= $students[$i]['prenom']?></td>
                    <td><?= $students[$i]['nom'] ?></td>
                    <td><?= $students[$i]['age'] ?> ans</td>
                    <td><a href="<?= $students[$i]['profil'] ?>" target="_blank" class="btn btn-primary">Consulter</a></td>
                </tr>
                <?php endfor; ?>
            </tbody>
        </table>
      </div>
  </body>
</html>