// Ini file javascript

function displayMessage() {
    document.getElementById("currentTime").innerText = new Date().toString();
    document.getElementById("outName").innerText = document.getElementById("name").value;
    document.getElementById("outDob").innerText = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    document.getElementById("outGender").innerText = gender ? gender.value : "";
    document.getElementById("outMessage").innerText = document.getElementById("message").value;
}