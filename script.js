var btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    var name=document.getElementById("name").value;
    var about=document.getElementById("about").value;
    var address=document.getElementById("address").value;
    var email=document.getElementById("email").value;
    var ph=document.getElementById("ph").value;
    var college=document.getElementById("college").value;
    if(!name || !about || !address || !email || !ph || !college){
        alert("plz fill the boxes");
        return;
    }
    var show1=document.getElementById("show1");
    var show2=document.getElementById("show2");
    var show3=document.getElementById("show3");
    var show4=document.getElementById("show4");
    var show5=document.getElementById("show5");
    var show6=document.getElementById("show6");
    show1.innerHTML=name;
    show2.innerHTML=about;
    show3.innerHTML=address;
    show4.innerHTML=email;
    show5.innerHTML=ph;
    show6.innerHTML=college;
}); 


//table format
/*
var btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    var row=1;
    var name=document.getElementById("name").value;
    var about=document.getElementById("about").value;
    var address=document.getElementById("address").value;
    var email=document.getElementById("email").value;
    var ph=document.getElementById("ph").value;
    var college=document.getElementById("college").value;
    if(!name || !about || !address || !email || !ph || !college){
        alert("plz fill the boxes");
        return;
    }
    var show=document.getElementById("show");
    var newRow=show.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);
    cell1.innerHTML=name;
    cell2.innerHTML=about;
    cell3.innerHTML=address;
    cell4.innerHTML=email;
    cell5.innerHTML=ph;
    cell6.innerHTML=college;
    row++;
});


make a table in the html


*/