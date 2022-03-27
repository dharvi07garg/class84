
nsa=[]

function submit()
{
 var n1 = document.getElementById("ns1").value;
 var n2 = document.getElementById("ns2").value;
 var n3 = document.getElementById("ns3").value;
 var n4 = document.getElementById("ns4").value;
 

 nsa.push(n1);
 nsa.push(n2);
 nsa.push(n3);
 nsa.push(n4);

 nsa.sort();

 console.log(nsa);

 document.getElementById("display_name").innerHTML=nsa

}