////upload.php\\\\
<?php
# Full path to folder
$full = '/uploads/';
 
# If needed, make the dir
mkdir($full, 0755)
chmod("uploads", 0755);
$target_path = $full;
 
# the inputfieldid is the <input id="THIS" /> you used
 
# Try print_r($_FILES['inputfieldid']) to see all avaliable array things
 
########## EXAMPLE 1 ###########
 
# Checks if file has the right extension (['name'] returns file name.)
if (end((explode(".", $_FILES['inputfieldid']['name']))) == 'swf'){
 
# Moving the file from php's tmp dir to the desired folder, just adds filename to end of the dir.  basename gets rid of any / after or before name
 
if(move_uploaded_file($_FILES['inputfieldid']['tmp_name'], $target_path.basename($_FILES['inputfieldid']['name']))) {
    echo "The file ".basename( $_FILES['inputfieldid']['name'])." has been uploaded<br>";
} else {
    echo "There was an error uploading the file, please try again!";
}
 
} else {
    echo 'Extension must be .swf';
}

if (is_writable($full)) {
    echo 'The folder is writable';
} else {
    echo 'The folder is not writable';
}

?>