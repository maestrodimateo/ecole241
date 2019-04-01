<?php include 'data.php'; ?>
<!doctype html>
<html lang="en">
  <head>
    <title>Etudiants d'okacode</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <main class="container">
        <h1>Tous les étudiants de OKACODE</h1>
        <div class="row">
            <div class="col">
                <table class="table table-striped table-sm table-bordered">
                    <thead class="bg-danger text-white">
                        <tr>
                            <th>#</th>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Age</th>
                            <th>Profil</th>
                        </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($students as $key => $student) : ?>
                            <tr>
                                <td><?= $key + 1 ?></td>
                                <td><?= $student['prenom'] ?></td>
                                <td><?= $student['nom'] ?></td>
                                <td><?= $student['age'] ?></td>
                                <td><a href="<?= $student['profil'] ?>" class="btn btn-sm btn-primary" target="_blank">Consulter</a></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                </table>
            </div>
        </div>
      </main>
  </body>
</html>