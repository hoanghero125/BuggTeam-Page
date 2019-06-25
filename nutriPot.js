import "./nutriPot.css";
let caloriesCalc = () => {
    const weight = Number(document.getElementById("weight").value);
    const height  = Number(document.getElementById("height").value);
    const age = Number(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const exLevelRate = Number(document.getElementById("exLevel").value);
    const purposeRate = Number(document.getElementById("purpose").value);
    const minCalories = (weight/0.453) * 8;
    let calories = 10 * weight + 6.25 * height - 5 * age;
    if( gender === "m") calories += 5;
    else calories -= 161;
    calories = calories * exLevelRate * purposeRate;
    if( calories < minCalories) calories = minCalories;
    return(calories);
}
let bmiClac = () => {
    const weight = Number(document.getElementById("weight").value);
    const height  = Number(document.getElementById("height").value);
    const bmi = weight/((height/100) * (height/100));
    return bmi;
}
document.getElementById("weight").addEventListener("change", () => {
    document.getElementById("cal").textContent = caloriesCalc()
});
document.getElementById("height").addEventListener("change", () => {
    document.getElementById("cal").textContent = caloriesCalc()
});
document.getElementById("age").addEventListener("change", () => {
    document.getElementById("cal").textContent = caloriesCalc()
});
document.getElementById("gender").addEventListener("change", () => {
    document.getElementById("cal").textContent = caloriesCalc()
});
document.getElementById("exLevel").addEventListener("change", () => {
    document.getElementById("cal").textContent = caloriesCalc()
});
document.getElementById("purpose").addEventListener("change", () => {
    document.getElementById("cal").textContent = caloriesCalc()
});
