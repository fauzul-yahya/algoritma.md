function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nama != "Fauzu lyahya" && email!="@" ,"."  && alamat !="jl sunangunung jati") {
        return true;
    }
    else {
        alert('isi kolom di bawah ini dengan benar');}
