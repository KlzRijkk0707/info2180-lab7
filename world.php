<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$query = $_GET['country'];
$query2 = $_GET['all'];
echo $query2;

if( $query2 == true){
    
    $stmt = $conn->query("SELECT * FROM countries");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo '<ul>';
    foreach ($results as $row) {
    echo '<li id="ya">' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';

} else {

    $stmt = $conn->query("SELECT * FROM countries WHERE name='$query'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo '<ul>';
    foreach ($results as $row) {
    echo '<li id="ya">' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}