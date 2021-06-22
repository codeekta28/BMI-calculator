console.log("This is index.js file");
document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault();
let height = document.querySelector("#height").value;
let weight = document.querySelector("#weight").value;

showAlert(height,weight);
calculateBMI(height,weight);
clearFields();
})
function calculateBMI(height,weight){
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    document.querySelector("#results").innerHTML=bmi;
    setTimeout(() => {
        document.querySelector("#results").style.display ="none"
    }, 5000);
}
function showAlert(height,weight){
    if(height==""||height<=0||(isNaN(height))||weight==""||weight<=0||(isNaN(weight))){
        let innerDiv = document.querySelector("#feedback");
        innerDiv.innerHTML = `Please input values correctly`;
        innerDiv.classList.add("showAlert");
        setTimeout(() => {
            innerDiv.style.display="none";
        }, 2000);

    }
   
}
function clearFields(){
    document.querySelector("#height").value="";
    document.querySelector("#weight").value="";
}