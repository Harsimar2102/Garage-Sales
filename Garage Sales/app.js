function formatCreditCard() {
  var x = document.getElementById('creditNo');
  var index = x.value.lastIndexOf('-');
  var test = x.value.substr(index + 1);
  if (x.value.length <= 16) {
    if (test.length === 4) x.value = x.value + '-';
  }
}

function capitalizeWords() {
  var x = document.getElementById('creditExpM');
  x.value = x.value.toUpperCase();
}

var waterbottles = document.getElementById('waterbottles');
var caps = document.getElementById('caps');
var pens = document.getElementById('pens');
var candybags = document.getElementById('candybags');
var cupcakes = document.getElementById('cupcakes');

function validateForm() {
  if (waterbottles || caps || pens || candybags || cupcakes) {
    console.log('waterbottles: ', waterbottles);

    checkNumber(waterbottles);
    checkNumber(caps);
    checkNumber(pens);
    checkNumber(candybags);
    checkNumber(cupcakes);

    // var hasError1 = document
    //   .getElementById('error-wrong-input')
    //   .classList.contains('hidden');
    // console.log('hasError1: ', hasError1);
    // var hasError2 = document
    //   .getElementById('error-empty-fields')
    //   .classList.contains('hidden');
    // console.log('hasError2: ', hasError2);

    // if (!(hasError1 || hasError2)) {
    //   console.log('No error: ');
    //   // donationValue();
    // }
  } else {
    document.getElementById('error-empty-fields').classList.remove('hidden');
  }
}
function checkNumber(input) {
  console.log('value: ', value);
  var numbers = /^[0-9]+$/;
  if (!input.value.match(numbers)) {
    document.getElementById('error-wrong-input').classList.remove('hidden');
  }
}

function donationValue() {
  var donation = 0;
  var totalValue =
    waterbottles * 5 + caps * 20 + pens * 2 + candybags * 10 + cupcakes * 3;
  if (totalValue * 0.1 < 10) {
    donation = 10;
  } else {
    donation = totalValue * 0.1;
  }
  console.log('donation: ', donation);
}
