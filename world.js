// JavaScript source code

//620043175



//FUNCTION



function searchCountry(wrd) {

    var q = wrd;
    console.log('wrd:'+wrd);

    var chk = document.getElementById('checkbox');
        
    var httpRequest = new XMLHttpRequest(); 
    var url = "https://info2180-lab7-rijkaa.c9users.io/world.php";
    var resultDiv = document.getElementById('result');
    
    if (chk.value == 'true') {
        var url2 = url + '?all=true' ;
        console.log(url2);
    }else if(chk.value === ''){
        var url2 = url;
    }else {
        var url2 = url + '?country=' + q ;
    }

    httpRequest.open('GET', url2);
    httpRequest.send();

    
    console.log(httpRequest);

    httpRequest.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var result = httpRequest.responseText;

            resultDiv.innerHTML = result;
            
        }

    };


}



//END FUNCION





window.onload = function() {


    var btn = document.getElementById('lookup');
    var chkBox = document.getElementById('checkbox');
    var txtBox = document.getElementById('country');

    
    
    chkBox.onclick = function() {
        console.log(chkBox.checked);
        document.getElementById('checkbox').setAttribute('value', chkBox.checked);
        console.log(chkBox);
    };
    
    btn.onclick = function () {
       
        document.getElementById("country").setAttribute('value',txtBox.value);
        console.log(txtBox);
        searchCountry(txtBox.value);        

    }; 

    
}; //end onload



