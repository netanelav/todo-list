$(document).ready(function () {
    $("#id_username").attr('placeholder', 'username:');
    $("#id_password1").attr('placeholder', 'password:');
    $("#id_password2").attr('placeholder', 'password confirmation:');
});

let createBtn = document.getElementById('create');

createBtn.addEventListener("click", function (e) {
    password = document.getElementById('id_password1').value;
    confirmation = document.getElementById('id_password2').value;
    if (password.length < 8) {
        document.getElementById('error').innerHTML = "please enter at least 8 digits for password";
        showMsg(e);
    } else if (password != confirmation) {
        document.getElementById('error').innerHTML = "password are not match, please make sure to type the same password for confirmation";
        showMsg(e);
    }
});

function showMsg(e) {
    document.getElementById('error').style.display = "block";
    e.preventDefault();
}