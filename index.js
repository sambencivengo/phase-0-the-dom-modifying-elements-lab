const body = document.getElementsByTagName("body")[0];
const mainChild = body.querySelector("main");
body.removeChild(mainChild);

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Sam is the champion";
document.body.append(newHeader);

