function register(type){

    let box = document.querySelector(`#${type}`);

    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;

    if(email === "" || password === ""){
        alert("Please enter email and password");
        return;
    }

    localStorage.setItem(type + "Email", email);
    localStorage.setItem(type + "Password", password);

    alert("Registration successful! Now you can login");

    box.querySelector('input[type="email"]').value = "";
    box.querySelector('input[type="password"]').value = "";

    bootstrap.Modal.getInstance(box).hide();
}


function login(type){

    let box = document.querySelector(`#${type}`);

    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;

    if(email === "" || password === ""){
        alert("Please enter email and password");
        return;
    }

    if(email === localStorage.getItem(type + "Email") &&
       password === localStorage.getItem(type + "Password")){

        alert("Login successful!");

        box.querySelector('input[type="email"]').value = "";
        box.querySelector('input[type="password"]').value = "";

        bootstrap.Modal.getInstance(box).hide();

    }else{

        alert("Invalid email or password");
    }
}


function addDestination(){

    let box = document.querySelector("#destination");

    let name = box.querySelector('input[type="text"]').value;
    let country = box.querySelectorAll('input[type="text"]')[1].value;
    let description = box.querySelector("textarea").value;

    if(name === "" || country === "" || description === ""){
        alert("Please fill all destination details");
        return;
    }

    localStorage.setItem("destinationName", name);
    localStorage.setItem("destinationCountry", country);
    localStorage.setItem("destinationDescription", description);

    alert("Destination added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
    box.querySelector("textarea").value = "";
}


function addPackage(){

    let box = document.querySelector("#package");

    let packageName = box.querySelectorAll('input[type="text"]')[0].value;
    let destination = box.querySelector("select").value;
    let duration = box.querySelectorAll('input[type="text"]')[1].value;
    let price = box.querySelectorAll('input[type="text"]')[2].value;

    if(packageName === "" ||
       destination === "Select Destination" ||
       duration === "" ||
       price === ""){

        alert("Please fill all package details");
        return;
    }

    localStorage.setItem("packageName", packageName);
    localStorage.setItem("packageDestination", destination);
    localStorage.setItem("packageDuration", duration);
    localStorage.setItem("packagePrice", price);

    alert("Package added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
    box.querySelector("select").selectedIndex = 0;
}


function addBooking(){

    let box = document.querySelector("#booking");

    let name = box.querySelectorAll('input[type="text"]')[0].value;
    let email = box.querySelector('input[type="email"]').value;
    let phone = box.querySelector('input[type="number"]').value;
    let destination = box.querySelector("select").value;
    let date = box.querySelector('input[type="date"]').value;
    let travels = box.querySelectorAll('input[type="number"]')[1].value;

    if(name === "" ||
       email === "" ||
       phone === "" ||
       destination === "Select Destination" ||
       date === "" ||
       travels === ""){

        alert("Please fill all booking details");
        return;
    }

    localStorage.setItem("bookingName", name);
    localStorage.setItem("bookingEmail", email);
    localStorage.setItem("bookingPhone", phone);
    localStorage.setItem("bookingDestination", destination);
    localStorage.setItem("bookingDate", date);
    localStorage.setItem("bookingTravels", travels);

    alert("Booking added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
    box.querySelector("select").selectedIndex = 0;
}


function addCustomer(){

    let box = document.querySelector("#customer");

    let name = box.querySelectorAll('input[type="text"]')[0].value;
    let email = box.querySelector('input[type="email"]').value;
    let phone = box.querySelector('input[type="number"]').value;
    let address = box.querySelectorAll('input[type="text"]')[1].value;

    if(name === "" ||
       email === "" ||
       phone === "" ||
       address === ""){

        alert("Please fill all customer details");
        return;
    }

    localStorage.setItem("customerName", name);
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("customerPhone", phone);
    localStorage.setItem("customerAddress", address);

    alert("Customer added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
}


function addOffer(){

    let box = document.querySelector("#offer");

    let name = box.querySelector('input[type="text"]').value;
    let discount = box.querySelector('input[type="number"]').value;
    let date = box.querySelector('input[type="date"]').value;

    if(name === "" || discount === "" || date === ""){
        alert("Please fill all offer details");
        return;
    }

    localStorage.setItem("offerName", name);
    localStorage.setItem("offerDiscount", discount);
    localStorage.setItem("offerDate", date);

    alert("Offer added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
}


function addGallery(){

    let box = document.querySelector("#gallery");

    let imageUrl = box.querySelector('input[type="url"]').value;
    let destination = box.querySelector("select").value;
    let caption = box.querySelector('input[type="text"]').value;

    if(imageUrl === "" ||
       destination === "Select Destination" ||
       caption === ""){

        alert("Please fill all gallery details");
        return;
    }

    localStorage.setItem("galleryImage", imageUrl);
    localStorage.setItem("galleryDestination", destination);
    localStorage.setItem("galleryCaption", caption);

    alert("Gallery image added successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
    box.querySelector("select").selectedIndex = 0;
}


function addBlog(){

    let box = document.querySelector("#blog");

    let title = box.querySelectorAll('input[type="text"]')[0].value;
    let author = box.querySelectorAll('input[type="text"]')[1].value;
    let content = box.querySelectorAll('input[type="text"]')[2].value;

    if(title === "" || author === "" || content === ""){
        alert("Please fill all blog details");
        return;
    }

    localStorage.setItem("blogTitle", title);
    localStorage.setItem("blogAuthor", author);
    localStorage.setItem("blogContent", content);

    alert("Blog published successfully");

    box.querySelectorAll('input').forEach(input => input.value = "");
}