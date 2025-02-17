function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (
    contact.length === 11 &&
    contact.slice(0, 2) === "01" &&
    !contact.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
}

// console.log(validContact("01819234567"));
// console.log(validContact("0181923 4567"));
// console.log(validContact("0181923 45679"));
// console.log(validContact(["0181923 45679"]));
// console.log(validContact("01345678900"));
// console.log(validContact("02345678900"));
// console.log(validContact(true));
