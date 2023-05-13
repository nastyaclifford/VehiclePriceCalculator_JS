let mainForm = document.forms.main;
let inputMake = mainForm.selectMake;
let modelVW = document.querySelector(".item_modelVW");
let modelFord = document.querySelector(".item_modelFord");
let modelJeep = document.querySelector(".item_modelJeep");
let modelToy = document.querySelector(".item_modelToy");

inputMake.onchange = function () {
  let indexSelected = inputMake.selectedIndex,
    option = inputMake.querySelectorAll("option")[indexSelected];
  let selectedValue = option.value;

  if (selectedValue == "Volkswagen") {
    modelVW.style.display = "block";
    modelFord.style.display = "None";
    modelJeep.style.display = "None";
    modelToy.style.display = "None";
  }
  if (selectedValue == "Jeep") {
    modelJeep.style.display = "block";
    modelFord.style.display = "None";
    modelVW.style.display = "None";
    modelToy.style.display = "None";
  }
  if (selectedValue == "Ford") {
    modelFord.style.display = "block";
    modelJeep.style.display = "None";
    modelVW.style.display = "None";
    modelToy.style.display = "None";
  }
  if (selectedValue == "Toyota") {
    modelToy.style.display = "block";
    modelJeep.style.display = "None";
    modelVW.style.display = "None";
    modelFord.style.display = "None";
  }
};

mainForm.addEventListener("change", () => {
  let radioCondition = mainForm.radioCondition;
  let radioOwners = document.querySelector(".item_Owners");
  let conditionNew = radioCondition[0];
  let conditionUsed = radioCondition[1];

  if (conditionNew.checked === true) {
    radioOwners.style.display = "None";
  }
  if (conditionUsed.checked === true) {
    radioOwners.style.display = "block";
  }
});

let inputModelVw = mainForm.selectModelVw;
let inputModelJeep = mainForm.selectModelJeep;
let inputModelFord = mainForm.selectModelFord;
let inputModelToy = mainForm.selectModelToy;

getPrice_One = () => {
  let priceOne = 0;
  let indexSelected = inputMake.selectedIndex,
    option = inputMake.querySelectorAll("option")[indexSelected];
  let selectedValue = option.value;
  if (selectedValue == "Volkswagen") {
    let indexSelected = inputModelVw.selectedIndex,
      option = inputModelVw.querySelectorAll("option")[indexSelected];
    let selectedValue = option.value;
    if (selectedValue == "Atlas") {
      priceOne = 40000;
    }
    if (selectedValue == "Beetle") {
      priceOne = 35000;
    }
    if (selectedValue == "Golf") {
      priceOne = 30000;
    }
    if (selectedValue == "Tiguan") {
      priceOne = 35000;
    }
  }
  if (selectedValue == "Jeep") {
    let indexSelected = inputModelJeep.selectedIndex,
      option = inputModelJeep.querySelectorAll("option")[indexSelected];
    let selectedValue = option.value;
    if (selectedValue == "Cherokee") {
      priceOne = 55000;
    }
    if (selectedValue == "Wrangler") {
      priceOne = 60000;
    }
    if (selectedValue == "Compass") {
      priceOne = 50000;
    }
    if (selectedValue == "Renegade") {
      priceOne = 750000;
    }
  }
  if (selectedValue == "Ford") {
    let indexSelected = inputModelFord.selectedIndex,
      option = inputModelFord.querySelectorAll("option")[indexSelected];
    let selectedValue = option.value;
    if (selectedValue == "Escape") {
      priceOne = 60000;
    }
    if (selectedValue == "Mustang") {
      priceOne = 55000;
    }
    if (selectedValue == "Bronco") {
      priceOne = 62000;
    }
    if (selectedValue == "Explorer") {
      priceOne = 70000;
    }
  }
  if (selectedValue == "Toyota") {
    let indexSelected = inputModelToy.selectedIndex,
      option = inputModelToy.querySelectorAll("option")[indexSelected];
    let selectedValue = option.value;
    if (selectedValue == "RAV4") {
      priceOne = 80000;
    }
    if (selectedValue == "Highlander") {
      priceOne = 85000;
    }
    if (selectedValue == "Tacoma") {
      priceOne = 75000;
    }
    if (selectedValue == "Sequoia") {
      priceOne = 88000;
    }
  }
  return priceOne;
};

getPrice_Two = () => {
  let priceTwo = 0;
  let radioPetrol = mainForm.radioPetrol;
  let petrolOne = radioPetrol[0];
  let petrolTwo = radioPetrol[1];
  let petrolThree = radioPetrol[2];
  let petrolFour = radioPetrol[3];

  if (petrolOne.checked === true) {
    priceTwo = 2000;
  }
  if (petrolTwo.checked === true) {
    priceTwo = 1000;
  }
  if (petrolThree.checked === true) {
    priceTwo = 800;
  }
  if (petrolFour.checked === true) {
    priceTwo = 5000;
  }
  return priceTwo;
};

getPrice_Three = () => {
  let priceThree = 0;
  let engineVolume = Number(mainForm.inputEngine.value);

  if ((engineVolume > 0) & (engineVolume <= 2)) {
    priceThree = 1000;
  }
  if ((engineVolume > 2) & (engineVolume <= 3.5)) {
    priceThree = 2000;
  }
  return priceThree;
};

getPrice_Four = () => {
  let priceFour = 0;
  let radioCondition = mainForm.radioCondition;
  let conditionNew = radioCondition[0];
  let conditionUsed = radioCondition[1];
  if (conditionNew.checked === true) {
    priceFour = 0;
  }
  if (conditionUsed.checked === true) {
    let radioOwners = mainForm.radioOwner;
    let oneOwner = radioOwners[0];
    let twoOwners = radioOwners[1];
    let moreOwners = radioOwners[2];
    if (oneOwner.checked === true) {
      priceFour = 5000;
    }
    if (twoOwners.checked === true) {
      priceFour = 8000;
    }
    if (moreOwners.checked === true) {
      priceFour = 12000;
    }
  }
  return priceFour;
};

getPrice_Five = () => {
  let priceFive = 0;
  let milage = Number(mainForm.inputMileage.value);

  if ((milage > 0) & (milage <= 1000)) {
    priceFive = 500;
  }
  if ((milage > 1000) & (milage <= 10000)) {
    priceFive = 1000;
  }
  if ((milage > 10000) & (milage <= 50000)) {
    priceFive = 1500;
  }
  if ((milage > 50000) & (milage <= 99000)) {
    priceFive = 2000;
  }
  if ((milage > 99000) & (milage <= 150000)) {
    priceFive = 2500;
  }
  if ((milage > 150000) & (milage <= 200000)) {
    priceFive = 4500;
  }
  if (milage > 200000) {
    priceFive = 6500;
  }
  return priceFive;
};

getPrice_Six = () => {
  let priceSix = 0;
  let year = Number(mainForm.inputYear.value);
  if ((year > 1990) & (year <= 2000)) {
    priceSix = 10000;
  }
  if ((year > 2000) & (year <= 2005)) {
    priceSix = 8000;
  }
  if ((year > 2005) & (year <= 2010)) {
    priceSix = 7000;
  }
  if ((year > 2010) & (year <= 2015)) {
    priceSix = 5000;
  }
  if ((year > 2015) & (year <= 2020)) {
    priceSix = 4000;
  }
  if ((year > 2020) & (year <= 2022)) {
    priceSix = 1000;
  }
  if (year == 2023) {
    priceSix = 0;
  }
  return priceSix;
};

let totalStringVDom = " ";

let calculate = document.querySelector(".main-box_button");
let buttonAnother = document.querySelector(".main-box_button-another");

calculate.addEventListener("click", () => {
  let priceOne = getPrice_One();
  let priceTwo = getPrice_Two();
  let priceThree = getPrice_Three();
  let priceFour = getPrice_Four();
  let priceFive = getPrice_Five();
  let priceSix = getPrice_Six();
  let price =
    priceOne + priceTwo + priceThree - priceFour - priceFive - priceSix;
  totalStringVDom = `<p class="main-box_displayResult">Примерная стоимость автомобиля равна ${price} US </p>`;
  document.querySelector(".main-box_display").innerHTML = totalStringVDom;
  buttonAnother.style.display = "block";
  calculate.style.display = "none";
});

buttonAnother.addEventListener("click", () => {
  mainForm.reset();
  document.querySelector(".main-box_display").innerHTML = " ";
  buttonAnother.style.display = "none";
  calculate.style.display = "block";
  let radioOwners = document.querySelector(".item_Owners");
  radioOwners.style.display = "none";
});
