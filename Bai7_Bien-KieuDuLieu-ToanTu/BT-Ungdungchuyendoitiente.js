function chuyendoi() {
    let giatrivao =document.getElementById('dauvao').value;
    let $1 = document.getElementById('$1').value;
    let $2 = document.getElementById('$2').value;
if ($1==$2){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao;
}
if ($1 =='VND'&& $2 == 'NDT'){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao/3500 + "NDT";
}
if ($1 =='VND'&& $2 == 'US'){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao/23000 +'US';
}
if ($1 =='NDT'&& $2 == 'VND'){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao*3500 +'VND';
}
if ($1 =='NDT'&& $2 == 'US'){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao/23000 + 'US';
}
if ($1 =='US'&& $2 == 'VND'){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao*23000 +'VND';
}
if ($1 =='US'&& $2 == 'NDT'){
    document.getElementById("hienthigiatri").innerHTML = "Result:"+ giatrivao/300 + "NDT";
}

}