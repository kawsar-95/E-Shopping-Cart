const addItemButton = document.getElementById("addItem");
addItemButton.addEventListener("click", function () {
  // const addedItem = document.getElementById("addedItem").value;
  // const addedItemNumber = parseFloat(addedItem);
  const addedItemNumber = getInputValue("addedItem");
  const totalItem = addedItemNumber + 1;
  document.getElementById("addedItem").value = totalItem;

  // const iphonePrice = document.getElementById("iphonePrice").innerText;
  // const iphonePriceNumber = parseFloat(iphonePrice);
  const iphonePriceNumber = getInputByInnerText("iphonePrice");
  const totalIphonePrice = iphonePriceNumber + 1219;
  document.getElementById("iphonePrice").innerText = totalIphonePrice;

  // subtotal Section
  // const subtotal = document.getElementById("subtotal").innerText;
  // const subtotalNumber = parseFloat(subtotal);
  const subtotalNumber = getInputByInnerText("subtotal");
  const getIphonePriceNumber = getInputByInnerText("iphonePrice");
  const getCasePriceNumber = getInputByInnerText("casePrice");

  // const getIphonePrice = document.getElementById("iphonePrice").innerText;
  // const getIphonePriceNumber = parseFloat(getIphonePrice);

  // const getCasePrice = document.getElementById("casePrice").innerText;
  // const getCasePriceNumber = parseFloat(getCasePrice);

  const totalSubtotal = getIphonePriceNumber + getCasePriceNumber;
  document.getElementById("subtotal").innerText = totalSubtotal;

  document.getElementById("total").innerText = totalSubtotal;
});

const reduceItemButton = document.getElementById("reduceItem");
reduceItemButton.addEventListener("click", function () {
  // console.log("clicked");
  // const reduceItem = document.getElementById("addedItem").value;
  // const reduceItemNumber = parseFloat(reduceItem);
  const reduceItemNumber = getInputValue("addedItem");
  if (reduceItemNumber == 0) {
    document.getElementById("addedItem").value = 0;
    document.getElementById("iphonePrice").value = 0;
    // const getElementOfSubtotal = document.getElementById("subtotal").innerText;
    // const getElementOfSubtotalNumber = parseFloat(getElementOfSubtotal);
    const getElementOfSubtotalNumber = getInputByInnerText("subtotal");
    document.getElementById("subtotal").value = 1278 - 1219;

    // const getElementOfTotal = document.getElementById("total").innerText;
    // const getElementOfTotalNumber = parseFloat(getElementOfTotal);
    const getElementOfTotalNumber = getInputByInnerText("total");
    document.getElementById("total").value = 1278 - 1219;
  } else {
    const totalReduce = reduceItemNumber - 1;
    document.getElementById("addedItem").value = totalReduce;

    // const iphonePrice = document.getElementById("iphonePrice").innerText;
    // const iphonePriceNumber = parseFloat(iphonePrice);
    const iphonePriceNumber = getInputByInnerText("iphonePrice");
    const totalIphoneReducePrice = iphonePriceNumber - 1219;
    document.getElementById("iphonePrice").innerText = totalIphoneReducePrice;

    // subtotal section
    // const subtotal = document.getElementById("subtotal").innerText;
    // const subtotalNumber = parseFloat(subtotal);
    const subtotalNumber = getInputByInnerText("subtotal");
    // const getSubtotalCurrentPrice = document.getElementById("subtotal").innerText;
    // const getSubtotalCurrentPriceNumber = parseFloat(getSubtotalCurrentPrice);
    const getSubtotalCurrentPriceNumber = getInputByInnerText("subtotal");

    const totalSubtotal = getSubtotalCurrentPriceNumber - 1219;
    document.getElementById("subtotal").innerText = totalSubtotal;

    // total section
    document.getElementById("total").innerText = totalSubtotal;
  }
});

const addCaseItemButton = document.getElementById("caseAdd");
addCaseItemButton.addEventListener("click", function () {
  // console.log("Clicked");
  // const addedCaseItem = document.getElementById("addedCaseItem").value;
  // const addedCaseItemNumber = parseFloat(addedCaseItem);
  const addedCaseItemNumber = getInputValue("addedCaseItem");
  const totalCaseItem = addedCaseItemNumber + 1;
  document.getElementById("addedCaseItem").value = totalCaseItem;

  // const casePrice = document.getElementById("casePrice").innerText;
  // const casePriceNumber = parseFloat(casePrice);
  const casePriceNumber = getInputByInnerText("casePrice");
  const totalCasePrice = casePriceNumber + 59;
  document.getElementById("casePrice").innerText = totalCasePrice;

  // subtotal section
  // const subtotal = document.getElementById("subtotal").innerText;
  // const subtotalNumber = parseFloat(subtotal);
  const subtotalNumber = getInputByInnerText("subtotal");
  // const getIphonePrice = document.getElementById("iphonePrice").innerText;
  // const getIphonePriceNumber = parseFloat(getIphonePrice);
  const getIphonePriceNumber = getInputByInnerText("iphonePrice");

  // const getCasePrice = document.getElementById("casePrice").innerText;
  // const getCasePriceNumber = parseFloat(getCasePrice);
  const getCasePriceNumber = getInputByInnerText("casePrice");

  const totalSubtotal = getIphonePriceNumber + getCasePriceNumber;
  document.getElementById("subtotal").innerText = totalSubtotal;
  // total section
  document.getElementById("total").innerText = totalSubtotal;
});

const reduceCaseItemButton = document.getElementById("reduceCase");
reduceCaseItemButton.addEventListener("click", function () {
  // const reducedCaseItem = document.getElementById("addedCaseItem").value;
  // const reducedCaseItemNumber = parseFloat(reducedCaseItem);
  const reducedCaseItemNumber = getInputValue("addedCaseItem");
  if (reducedCaseItemNumber == 0) {
    document.getElementById("addedCaseItem").value = 0;
    document.getElementById("casePrice").value = 0;
    document.getElementById("subtotal").value = 0;
    document.getElementById("total").value = 0;
  } else {
    const totalCaseItemReduce = reducedCaseItemNumber - 1;
    document.getElementById("addedCaseItem").value = totalCaseItemReduce;

    // const casePrice = document.getElementById("casePrice").innerText;
    // const casePriceNumber = parseFloat(casePrice);
    const casePriceNumber = getInputByInnerText("casePrice");
    const totalCasePriceReduce = casePriceNumber - 59;
    document.getElementById("casePrice").innerText = totalCasePriceReduce;

    // subtotal section
    const subtotal = document.getElementById("subtotal").innerText;
    const subtotalNumber = parseFloat(subtotal);
    // const getSubtotalCurrentPrice = document.getElementById("subtotal").innerText;
    // const getSubtotalCurrentPriceNumber = parseFloat(getSubtotalCurrentPrice);
    const getSubtotalCurrentPriceNumber = getInputByInnerText("subtotal");

    const totalSubtotal = getSubtotalCurrentPriceNumber - 59;
    document.getElementById("subtotal").innerText = totalSubtotal;

    document.getElementById("total").innerText = totalSubtotal;
  }
});

const addItemButton1 = document.getElementById("img1");
addItemButton1.addEventListener("click", function () {
  const iphoneArea1 = document.getElementById("cart");
  iphoneArea1.style.display = "none";
  document.getElementById("iphonePrice").innerText = 0;
  // document.getElementById("casePrice").innerText = 0;
  document.getElementById("subtotal").innerText = parseFloat(
    document.getElementById("casePrice").innerText
  );
  document.getElementById("total").innerText = parseFloat(
    document.getElementById("casePrice").innerText
  );
});

const addItemButton2 = document.getElementById("img2");
addItemButton2.addEventListener("click", function () {
  const iphoneArea2 = document.getElementById("cart1");
  iphoneArea2.style.display = "none";
  document.getElementById("casePrice").innerText = 0;
  document.getElementById("subtotal").innerText = parseFloat(
    document.getElementById("iphonePrice").innerText
  );
  document.getElementById("total").innerText = parseFloat(
    document.getElementById("iphonePrice").innerText
  );
});
// function
function getInputValue(id) {
  const iphonePrice = document.getElementById(id).value;
  const iphonePriceNumber = parseFloat(iphonePrice);
  return iphonePriceNumber;
}

function getInputByInnerText(id) {
  const iphonePrice = document.getElementById(id).innerText;
  const iphonePriceNumber = parseFloat(iphonePrice);
  return iphonePriceNumber;
}
