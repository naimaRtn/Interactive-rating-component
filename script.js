// hide thank you state on load
window.onload = function () {
  document.querySelector("#thankyou-state").style.display = "none";
};

//add event to submit buttton
document.querySelector("input[type=submit]").onclick = function () {
  event.preventDefault();
  //get rating and displaying it in thank you state
  let rating = document.querySelector("input[type=radio]:checked");

  document
    .querySelector("#rate")
    .append(
      (document.createTextNode = `You selected ${rating.value} out of 5`),
    );
  document.querySelector("#thankyou-state").style.display = "flex";
  document.querySelector("#rating-state").style.display = "none";
};
