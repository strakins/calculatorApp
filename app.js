let items = Array.from(document.getElementsByClassName("content"))
console.log(items)
let output = document.querySelector(".result");

items.map(button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        switch(e.target.innerText) {
            case "RESET" : 
                output.innerHTML = "";
                break;
            case "Del" : 
                output.innerHTML = output.innerHTML.slice(0, -1)
                break;
            case "=" :
                try {
                    output.innerHTML = eval(output.innerHTML)
                }catch {
                    output.innerHTML = "Error!" 
                }
                break;
            default: 
            output.innerHTML += e.target.innerText
        }
    })
})