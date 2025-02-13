export default function paySystem(numCard) {
  let returnPaySystem = false;
  if (numCard.search(/^(34|37)/) !== -1) {
    returnPaySystem = "american";
  } else if (numCard.search(/^(36|30[0-5]|3[89]|3095)/) !== -1) {
    returnPaySystem = "club";
  } else if (numCard.search(/^(6[45]|6011)/) !== -1) {
    returnPaySystem = "discover";
  } else if (numCard.search(/^(352[89]|35[3-8][0-9])/) !== -1) {
    returnPaySystem = "jcb";
  } else if (numCard.search(/^(5[1-5])/) !== -1) {
    returnPaySystem = "mastercard";
  } else if (numCard.search(/^(220[0-4])/) !== -1) {
    returnPaySystem = "mir";
  } else if (numCard.search(/^(4)/) !== -1) {
    returnPaySystem = "visa";
  }
  return returnPaySystem;
}
