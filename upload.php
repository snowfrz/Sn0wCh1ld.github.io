<?php
# Full path to folder
$full = 'uploads';
# If needed, make the dir
if (!file_exists($full)) {
mkdir($full, 0777, true);
}
$target_path = $full;
# the fileToUpload is the <input id="THIS" /> you used
# Try print_r($_FILES['fileToUpload']) to see all avaliable array things
########## EXAMPLE 1 ###########
# Checks if file has the right extension (['name'] returns file name.)
if (end((explode(".", $_FILES['fileToUpload']['name']))) == 'swf'){
# Moving the file from php's tmp dir to the desired folder, just adds filename to end of the dir. basename gets rid of any / after or before name
if(move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_path.'/'.basename($_FILES['fileToUpload']['name']))) {
echo "The file ".basename( $_FILES['fileToUpload']['name'])." has been uploaded<br>";
} else {
echo "There was an error uploading the file, please try again!";
}
} else {
echo 'Extension must be .swf';
}
?>