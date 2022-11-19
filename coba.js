function validasi() {
    var nomer = document.getElementById("nomer").value;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nomer =="" || nama =="" || email == "" ||alamat =="") {
        alert('data tidak boleh kosong')
    }else{
        alert('sukses')
    }
        }
