function ChangeName() {
    let name = prompt("What your name:");
    document.getElementById("inputName").innerHTML = "Hello " + name;
}