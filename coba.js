function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    if (nama != "" && email!="@" ,"."  && alamat !="") {
        return true;
    }else{
        alert('isi kolom di bawah ini dengan benar');
    }
}
function checkInput(e,chars,field){
    if (chars.indexOf(e.key) != -1){
      return true;
    }else{
      return false;
    }
  }