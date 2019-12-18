<?php
if(isset($_POST['letter'])){
   //Convert it to an Associative Array
   $person = json_decode($_POST['letter'], true);
   //Save In MySQL
   $conn = new mysqli("localhost", "root", "", "web2");
   if($conn->connect_error){
  	die($conn->connect_error);
   }
   //print_r($person);
   $type = $letter["typeDb"];
   $target = $letter["targetDb"];
   $time = $letter["timeDb"];
   $sql = "Insert Into store values('$type', '$target', '$time')";
   $conn->query($sql);
   if($conn->affected_rows > 0){
     echo "Inserted Successfully";
   }
   else{
     echo "Sorry: Problem With Insertion";	
   } 
}



if(isset($_GET['person'])){
  $sql = "Select * from person"; 
  $conn = new mysqli("localhost", "root", "", "web2");
  if($conn->connect_error){
     die($conn->connect_error);
  }
  if ($result = $conn->query($sql)){
       $rows = array();
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                array_push($rows, $row);
            }
     //Convert to JSON Before Sending to Client
            echo json_encode($rows);
        }
  }
  else{
      echo "No Data to Retrieve";
  }
}

?>