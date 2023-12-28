<?php  ob_start();  session_start();  

include('include/liveclass.php');



//insert into database
if(isset($_POST['name'])) {
 $erro=""; $erro1=""; $erro2=""; $erro3=""; $erro4=""; $erro5=""; $erro6=""; $erro7=""; $erro8=""; $erro9=""; $erro10="";  $erro11=""; 
 
  
 
 
 
 

	$mysqlis= new liveclass($mysqli);

	if($mysqlis->contact ($_POST['name'],$_POST['email'],$_POST['subject'],$_POST['message'])){ 
		
		$erro="good";

	}else{$erro="danger";
	
}


}


if($erro=="good"){ 	$to = "mgbemeleikechukwu@gmail.com";
$subject = "New Contact";
$txt = "The person name is .".$name.". the person email is .".$email.". the person subject is .".$subject.". the person message is .".$message.".";
$headers = "From: webmaster@example.com" . "\r\n" .

mail($to,$subject,$txt,$headers); ?> 
<div class="alert alert-primary" role="alert">
Successful
</div>
									
									<?php }elseif($erro=="danger"){?> 
									
									
		<div class="alert alert-danger alert-dismissible fade show" role="alert">
			<?php echo "<ul>".$erro1."".$erro2."".$erro3."".$erro4."".$erro5."".$erro6."".$erro7."".$erro8."".$erro9."".$erro10."".$erro11."</ul>"; ?>
										<button type="button" class="close" data-dismiss="alert" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>

				
					<?php } 
					
					
					
					
?>

