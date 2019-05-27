<!DOCTYPE html>
<html>
    <head>
        <title>Forms</title>
    </head>
    <body>
        <section>
            Welcome
            <?php
            $un = $_GET["reg_un"];
            $pw = $_GET["reg_pass"];

            if ($un == "Chaim" && $pw == "Chaim123")
{
            header('Location:index.html');
            end(); 
}          
             else
                echo "<h2>inalid password or username</h2>";
            ?>
        </section>
    </body>
</html>