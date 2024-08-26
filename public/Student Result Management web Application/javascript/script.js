function Sub(){
    let n, k, r, e, v, sum, avg;
    n=(document.getElementById('aname').value);
    k=parseFloat(document.getElementById('am').value);
    r=parseFloat(document.getElementById('aj').value);
    e=parseFloat(document.getElementById('ad').value);
    v=parseFloat(document.getElementById('an').value);
    // Calculating Total
    sum=k+r+e+v;
    avg=sum/4;
    // Display on Student Data
    let newTable = document.getElementById('TableScore');
    let row = newTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(0);
    let cell3 = row.insertCell(0);
    let cell4 = row.insertCell(0);

    cell4.innerHTML= n;
    cell3.innerHTML=sum;
    cell2.innerHTML = avg;

    if(avg>=70){
        cell1.innerHTML="<font color=green>Pass</font>";
    }else{
        cell1.innerHTML="<font color=red>Fail</font>";
    }
}
document.getElementById('back').addEventListener('click', function() {
    history.back();
 });
