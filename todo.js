const container = document.querySelector(".container");
var value1 = document.querySelector(".input");
const add1 = document.querySelector(".add");

class item {
    constructor(name) {
        this.create(name);
    }
    create(name) {
        var ll = document.createElement("div");
        ll.classList.add("item");

        var input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add("item_input");

        var remover = document.createElement("button");
        remover.classList.add("remove");
        remover.innerHTML = '<i class="fas fa-trash"></i>';
        remover.addEventListener("click", () => this.remove(ll));

        container.appendChild(ll);

        ll.appendChild(input);
        ll.appendChild(remover);
    }
    remove(ll) {
        container.removeChild(ll);
    }
}

if (add1) {
    add1.addEventListener("click", check);
}
window.addEventListener("keydown", (e) => {
    if (e.which === 13) {
        check();
    }
});
function check() {
    // console.log(value1);
    if (value1.value != "") {
        new item(value1.value);
        value1.value = "";
    }
}
// addEventListener("click", () => {
//   console.log("delete");
// });
function removeAll() {
    var c = document.querySelector(".container");
    c.innerHTML = "";
}