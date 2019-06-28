function getDiemTb()
{
let a= document.getElementById("toan").value;
let b=document.getElementById("ly").value;
let c=document.getElementById( "hoa").value;

let d = parseInt(a);
let e = parseInt(b);
let f = parseInt(c);

let TB =(d+e+f)/3;

document.write("Diem trung binh:"+TB);


}
function tongdiem()
{
let a= document.getElementById("toan").value;
let b=document.getElementById("ly").value;
let c=document.getElementById( "hoa").value;

let d = parseInt(a);
let e = parseInt(b);
let f = parseInt(c);


let sum= d+e+f;

document.write("Tong diem:"+sum);

}