function formValidate() {
  var username = document.getElementById('inputName');
  var password = document.getElementById('inputEmail');
  var address = document.getElementById('inputAddress');
  var address2 = document.getElementById('inputAddress2');
  var city = document.getElementById('inputCity');
  var state = document.getElementById('inputState');

  if (username.value.trim() == '') {
    alert('Name is required');
    return false;
  } else if (password.value.trim() == '') {
    alert('Email is required');
    return false;
  } else if (address.value.trim() == '') {
    alert('Address is required');
    return false;
  } else if (address2.value.trim() == '') {
    alert('Address2 is required');
    return false;
  } else if (city.value.trim() == '') {
    alert('City is required');
    return false;
  } else if (state.value.trim() == '') {
    alert('State is required');
    return false;
  } else {
    true;
  }
}
