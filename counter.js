export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

function payrollCalc(employees) {
  // ... Untrusty mutable Fn()
  return payrollChecks;
}

function payrollCalcSafe(employees) {
  let employeesCopy = deepCopy(employees)
  const payrollChecks = payrollCalc(employeesCopy)
  const payrollChecksCopy = deepCopy(payrollChecks)
  return payrollChecksCopy
}


userChanges.subscribe((user) => {
  const userCopy = deepCopy(user)
  processUser(userCopy);
  // no need to copy again
  // because there is no data
  // leaving the safe zone
});


// Business
function freeTieClip(cart) {
  var hasTie = isInCart(cart, "tie")
  var hasTieClip = isInCart(cart, "tie clip");
  if (hasTie && !hasTieClip) {
    var tieClip = make_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}

// State Bottom
function isInCart(cart, name) {
  const isIn = indexOfItem(cart, name) !== null
  return isIn;
}

// State Bottom
function indexOfItem(cart, name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name)
      return i;
  }
  return null;
}

// State
function remove_item_by_name(cart, name) {
  var idx = indexOfItem(cart, name)
  if (idx !== null)
    return removeItems(cart, idx, 1);
  return cart;
}

// Above State
function calc_total(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

// Business
function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

// State
function setPriceByName(cart, name, price) {
  const idx = indexOfItem(cart, name)
  if (idx !== null) {
    const item = setPrice(cart[i], price)
    const updatedCart = arraySet(cart, idx, item)
    return updatedCart
  }
  return cart;
}

// Business
function cartTax(cart) {
  return calc_tax(calc_total(cart));
} 