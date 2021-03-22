/* Total field which automatically totals your purchases as each item 
is checked/unchecked or the specified quantity changes */

function UpdateCost() {
    var sum = 0;
    var itemid, elem, qtyid, qty;
    for (i = 0; i < 4; i++) {
        itemid = 'item_' + i;
        elem = document.getElementById(itemid);
        qtyid = 'qty_' + i;
        qty = document.getElementById(qtyid).value;

        if (elem.checked == true) {
            sum += Number(elem.value) * qty;
        }
    }

    document.getElementById("total").value = "$" + sum;
    return false
}

/* Configuration of the Submit button 
Submit Button - When this button is clicked, validates that the first name, 
last name, address, phone, credit card, and expiration date fields all have been filled out.
If any field is missing text, prevent the form from submitting and set the focus to the 
first missing text field.*/

document.getElementById('myform').addEventListener('submit', validateForm);

function validatePhoneNumber(input_str) {
    var phoneno = /[0-9]{3}?[-]?[0-9]{3}[-]?[0-9]{4}$/;
    return phoneno.test(input_str);
}

function cardNumber(input_txt) {
    var cardno = /[0-9]{4}?[ ]?[0-9]{4}?[ ]?[0-9]{4}?[ ]?[0-9]{4}?$/;
    return cardno.test(input_txt);
}

function expDate(input_txt) {
    var expDate = /(0|1)[0-9]\/(20)[0-9]{2}/;
    return expDate.test(input_txt);
}

function validateForm(event) {
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var review = document.getElementById('review').value;
    var phone = document.getElementById('phone').value;
    var credit_card = document.getElementById('credit_card').value;
    var exp_date = document.getElementById('exp_date').value;
    var month = exp_date.substring(0, 2);
    var year = exp_date.substring(3, 7);

    if ((!expDate(exp_date)) || (parseInt(month) < 1) || (parseInt(month) > 12) || (parseInt(year) <= 2020)) {
        document.getElementById("exp_date_error").innerHTML = `<span style="color:#D80808">Valid month (1-12) and valid year (> 2020). This field must use the format: 01/2021.</span>`;
        document.getElementById("exp_date").style.border = "thick solid #D80808";
        document.getElementById("exp_date").focus();
    }
    else {
        document.getElementById("exp_date_error").innerHTML = "";
        document.getElementById("exp_date").style.border = "1px solid rgb(253, 131, 156)";
        document.getElementById("exp_date").blur();
    }

    if (!cardNumber(credit_card)) {
        document.getElementById("credit_card_error").innerHTML = `<span style="color:#D80808">Not a valid credit card number! Must use the format: 1111 1111 1111 1111</span>`;
        document.getElementById("credit_card").style.border = "thick solid #D80808";
        document.getElementById("credit_card").focus();
    }
    else {
        document.getElementById("credit_card_error").innerHTML = "";
        document.getElementById("credit_card").style.border = "1px solid rgb(253, 131, 156)";
        document.getElementById("credit_card").blur();
    }

    if (!validatePhoneNumber(phone)) {
        document.getElementById("phone_error").innerHTML = `<span style="color:#D80808">Please enter a phone number in the format 208-555-5555</span>`;
        document.getElementById("phone").style.border = "thick solid #D80808";
        document.getElementById("phone").focus();
    }
    else {
        document.getElementById("phone_error").innerHTML = "";
        document.getElementById("phone").style.border = "1px solid rgb(253, 131, 156)";
        document.getElementById("phone").blur();
    }

    if (review === "") {
        document.getElementById("review_error").innerHTML = `<span style="color:#D80808">Please type your address.</span>`;
        document.getElementById("review").style.border = "thick solid #D80808";
        document.getElementById('review').focus();
    }
    else {
        document.getElementById("review_error").innerHTML = "";
        document.getElementById("review").style.border = "1px solid rgb(253, 131, 156)";
        document.getElementById("review").blur();
    }

    if (last_name === "") {
        document.getElementById("last_name_error").innerHTML = `<span style="color:#D80808">Please type your last name.</span>`;
        document.getElementById("last_name").style.border = "thick solid #D80808";
        document.getElementById('last_name').focus();
    }
    else {
        document.getElementById("last_name_error").innerHTML = "";
        document.getElementById("last_name").style.border = "1px solid rgb(253, 131, 156)";
        document.getElementById("last_name").blur();
    }

    if (first_name === "") {
        document.getElementById("first_name_error").innerHTML = `<span style="color:#D80808">Please type your name.</span>`;
        document.getElementById("first_name").style.border = "thick solid #D80808";
        document.getElementById('first_name').focus();
    }
    else {
        document.getElementById("first_name_error").innerHTML = "";
        document.getElementById("first_name").style.border = "1px solid rgb(253, 131, 156)";
        document.getElementById("first_name").blur();
    }

    event.preventDefault();
}

/* Configuration of the Reset button 
Clear all text fields and set focus to First Name*/

document.getElementById('myform').addEventListener('reset', resetButton);

function resetButton() {
    document.getElementById('first_name').focus();

    document.getElementById("first_name_error").innerHTML = "";
    document.getElementById("first_name").style.border = "1px solid rgb(253, 131, 156)";

    document.getElementById("last_name_error").innerHTML = "";
    document.getElementById("last_name").style.border = "1px solid rgb(253, 131, 156)";

    document.getElementById("review_error").innerHTML = "";
    document.getElementById("review").style.border = "1px solid rgb(253, 131, 156)";

    document.getElementById("phone_error").innerHTML = "";
    document.getElementById("phone").style.border = "1px solid rgb(253, 131, 156)";

    document.getElementById("credit_card_error").innerHTML = "";
    document.getElementById("credit_card").style.border = "1px solid rgb(253, 131, 156)";

    document.getElementById("exp_date_error").innerHTML = "";
    document.getElementById("exp_date").style.border = "1px solid rgb(253, 131, 156)";
}