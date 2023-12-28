<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor;
 */;
include "database.php";

function compressImage($source, $destination, $quality) { 
    // Get image info 
    $imgInfo = getimagesize($source); 
    $mime = $imgInfo['mime']; 
     
    // Create a new image from file 
    switch($mime){ 
        case 'image/jpeg': 
            $image = imagecreatefromjpeg($source); 
           imagejpeg($image, $destination, $quality);
            break; 
        case 'image/png': 
            $image = imagecreatefrompng($source); 
            imagepng($image, $destination, $quality);
            break; 
        case 'image/gif': 
            $image = imagecreatefromgif($source); 
            imagegif($image, $destination, $quality);
            break; 
        default: 
            $image = imagecreatefromjpeg($source); 
           imagejpeg($image, $destination, $quality);
    } 
	


   



  
     
     
    // Return compressed image 
    return $destination; 
} 



function clear($mysqli,$input)
{
 
    // if(get_magic_quotes_gpc())
    // {
        //Remove slashes that were used to escape characters in post.
        $input = stripslashes($input);
    // }
    //Remove ALL HTML tags to prevent XSS and abuse of the system.
    $input = strip_tags($input);
    //Escape the string for insertion into a MySQL query, and return it.
    return mysqli_real_escape_string($mysqli,$input);
}






 class liveclass {
	private $mysqli = null;
    private $error = null;
function __construct($mysqli){
		  $this->mysqli = $mysqli; 
		  
		
	
				
	
				
				
				}
	
		
	public function contact ($name,$email,$subject,$message){ $err="";
	
	$name=trim($name);
	$email=trim($email);
	$subject=trim($subject);
	$message=trim($message);
	

		

	if($name==""){$err="<li>Name is empty</li>";  $GLOBALS['erro1']=$err;}
	if($email==""){$err="<li>Email is empty</li>";  $GLOBALS['erro2']=$err;}
	if($subject==""){$err="<li>Subject is empty</li>";  $GLOBALS['erro3']=$err;}
	if($message==""){$err="<li>message is empty</li>";  $GLOBALS['erro4']=$err;}

	$coomentid = mt_rand(1000000, 9999999);	

	if($err=="")
		{
	$to = "mgbemeleikechukwu@gmail.com";
$subject = "New Contact";
$txt = "The person name is .".$name.". the person email is .".$email.". the person subject is .".$subject.". the person message is .".$message.".";
$headers = "From: webmaster@example.com" . "\r\n" .

mail($to,$subject,$txt,$headers);


		
			{
				return true;
			}
		}
    
        $this->error = $this->mysqli->error;
        return false;		
	}
	

	
 }


