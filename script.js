function cambio(){
    var dol = 4822; 
var re ;   
var pe =parseInt(document.getElementById('pesos').value, 10);

re = pe / dol ;
document.getElementById('resul').innerHTML= re;
}