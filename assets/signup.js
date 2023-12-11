function clearInput() {
    document.getElementById("SignupForm").reset();
}

function validateForm() 
{
    let x = document.forms["myForm"]["username"].value;
    if (x == "")
    {
      alert("Username must be filled out");
      return false;
    }

    let y = document.forms["myForm"]["email"].value;
    if (y == "")
    {
        alert("Email must be filled out");
        return false;
    }

    let z = document.forms["myForm"]["phone"].value;
    if (z == "")
    {
        alert("Phone Number must be filled out");
        return false;
    }

    let a = document.forms["myForm"]["password"].value;
    if (a == "")
    {
        alert("Password must be filled out");
        return false;
    }
}