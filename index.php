<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=jaco', 'root', '');
} catch (PDOException $e) {
    print $e->getMessage();
}
$query = $pdo->query('SELECT * FROM users');
$query = $query->fetchAll(PDO::FETCH_OBJ);

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function plus() {
            document.getElementById("bouton").style.display = 'none';
            document.getElementById("form").style.display = 'block';
        }
    </script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

</head>

<body>
    <main class="container">
        <table class="table">
            <tr>
                <th>#</th>
                <th>Mail</th>
                <th>Password</th>
            </tr>

            <?php
            for ($i = 0; $i < count($query); $i++) { ?>
                <tr>
                    <th><?= $i ?></th>
                    <td><?php print_r($query[$i]->mail) ?> </td>
                    <td><?php print_r($query[$i]->pass) ?></td>
                </tr>
            <?php } ?>

        </table>
        <button id="bouton" class="btn btn-primary" onclick="plus()">Ajouter</button>
        <form style="display: none;" id="form" action="" method="POST">
            <div class="form-group mb-3">
                <label for="mail" class="form-label">Mail</label>
                <input name="mail" type="email" class="form-control" required>
            </div>
            <div class="form-group mb-3">
                <label for="pass" class="form-label">Password</label>
                <input type="password" class="form-control" name="pass">
            </div>
            <button type="submit" class="btn btn-primary">Valider</button>
        </form>
    </main>
</body>

</html>
<?php
if (isset($_POST['mail']) and isset($_POST['pass'])) {
    $mail = $_POST['mail'];
    $pass = $_POST['pass'];
    $error = $pdo->query("INSERT INTO `users`( `mail`, `pass`) VALUES ('$mail','$pass')");
    header('Location: index.php');
    if ($error == false) {
        echo "ça marche po";
    }
} ?>