<?php
	
	include('./MailChimp.php');

	use \DrewM\MailChimp\MailChimp;
	
	// connect to mailchimp
	$MailChimp = new MailChimp('f366c593a84843d5ba4c6790c945a760-us3');
	$list = '2f732cfce7'; 
	$email = $_GET['EMAIL'];
	$id = md5(strtolower($email));
	
	$mergeFields = array(
        'NAME'=>$_GET['NAME'],
        'MESSAGE' => $_GET['MESSAGE'],
		);
	
	$mergeFields = array_filter($mergeFields);
	$result = $MailChimp->put("lists/$list/members/$id", array(
									'email_address'     => $email,
									'status'            => 'subscribed',
									'merge_fields'      => $mergeFields,
									'update_existing'   => true,
							));
	echo json_encode($result);