<?php
include("connection.php");

$sql = 'SELECT * FROM recipe';
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_all($result, MYSQLI_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Recipe</title>
  <link rel="stylesheet" href="detail.css">
</head>
<body>
  <div class="container">
    <div class="recipe">
      <div class="recipe-image">
        <img id="recipeImage" src="">
      </div>
      <div class="ingredients">
        <h2>Ingredients</h2>
        <p><?php foreach ($row as $recipe) {
          if($recipe['UNIQUE_CODE'] == 'BLB1'){
            echo '<p>' . htmlspecialchars($recipe['INGREDIENTS']) . '</p>';
          }
        }?></p>
      </div>
      <div class="instructions">
        <h2>Instructions</h2>
        <p><?php foreach ($row as $recipe) {
          if($recipe['UNIQUE_CODE'] == 'BLB1'){
            echo '<p>' . htmlspecialchars($recipe['INSTRUCTIONS']) . '</p>';
          }
        }?></p>
      </div>
      <div class="nutrition"></div>
    </div>
  </div>
  
  <script>
    window.onload = function() {
      const imageSrc = localStorage.getItem('selectedImage');
      if (imageSrc) {
        document.getElementById('recipeImage').src = imageSrc;
      }
    };
  </script>

</body>
</html>