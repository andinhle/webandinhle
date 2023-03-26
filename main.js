//slider
var images = [
    "./images/pk-xk-800-200-800x200.png",
    "./images/sdptn800x200-800x200.png",
    "./images/pk-it-800-200-800x200.png",
    "./images/800-2001-800x200.png"
];
var mota = [
    "PHỤ KIỆN XẢ KHO",
    "PHỤ KIỆN XỊN",
    "CHUỘT GIÁ RẺ",
    "PHỤ KIỆN GIẢM 50%"
];
var num = 0;
const myInterval = setInterval(function next() {
        num++;
        if (num >= images.length) {
            num = 0;
        }
        document.getElementById("slider").src = images [num];
        document.getElementById("mota").innerHTML = mota [num];
},3000);
function next() {
        num++;
        if (num >= images.length) {
            num = 0;
        }
        document.getElementById("slider").src = images [num];
        document.getElementById("mota").innerHTML = mota [num];
        return myInterval;
};
function myStop() {
    clearInterval(myInterval);
}

function prev() {
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    document.getElementById("slider").src = images [num];
    document.getElementById("mota").innerHTML = mota [num];
}

// thay đổi backgruond
function dark() {
    document.getElementById("wrapper").style.backgroundColor = "black";
    document.getElementById("check-dr-li").innerHTML = '2 click off';
    
}
function light() {
    document.getElementById("wrapper").style.backgroundColor = "white";
    document.getElementById("check-dr-li").innerHTML = 'Ok white';
}
// function vote() {
//     document.getElementById("vote","vote2").style.color = "aqua";
// }
// function novote() {
//     document.getElementById("vote").style.color = "";
// }
function vote(){
    var votecheck = document.getElementsByClassName("fa-thumbs-up");
    votecheck[0].style.color = "navy";
    votecheck[1].style.color = "navy";
    votecheck[2].style.color = "navy";
    votecheck[3].style.color = "navy";
    votecheck[4].style.color = "navy";
    votecheck[5].style.color = "navy";
}
function novote(){
    var novotecheck = document.getElementsByClassName("fa-thumbs-up");
    novotecheck[0].style.color = "";
    novotecheck[1].style.color = "";
    novotecheck[2].style.color = "";
    novotecheck[3].style.color = "";
    novotecheck[4].style.color = "";
    novotecheck[5].style.color = "";
}
function chuyenhuong() {
    location.href = "form.html";
}



