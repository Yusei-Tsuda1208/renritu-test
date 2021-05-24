function mod(A){
    let Q = document.getElementById("mod").value;
    let B;
    B = Q+A;
    alert(B);
}


document.getElementById("keisan").addEventListener("click",function (){
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let b1 = document.getElementById("b1").value;
    let b2 = document.getElementById("b2").value;

    let Q = document.getElementById("mod").value;
    //各変数に値の代入ok//

    let A =a1*b2-a2*b1;
    alert(A);
    mod(A);
});

