//function to validate all field 
function validateAll(inputArr){
    inputArr.forEach(element => {console.log(input)
        
    });
    if(input.value.trim()===""){
        errorMsg(input,"is required")
    }
    else{
        successMsg(input);
    }
}
form.addEventLisener("submit",function(e){
    e.preventDefault();
    validateAll([username,lastname,mail,dobid,nationality])


})
document.getElementById('back').addEventListener('click', function() {
    // Replace 'main_menu_url' with the actual URL or function call to go back to the main menu
    window.location.href = 'C:\Users\Mays\OneDrive\Desktop2\web_developer\assimant\Dashboard\Dashboard\index.html';
});