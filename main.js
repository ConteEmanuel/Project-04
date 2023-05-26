function getKey() {
    document.getElementById("keyPad").addEventListener(
        "click",
        (e) => {
            console.log(e.target);
            pressedKey = e.target.closest("div").getAttribute("data-key");
            let divPressed = document.querySelector(`div[data-key="${pressedKey}"]`);
            divPressed.classList.toggle("keyClicked");
            console.log(pressedKey);
            setTimeout(() => {
                divPressed.classList.toggle("keyClicked");
            }, 500);
        },
        {
            capture: false,
            once: false,
        }
    );
    document.addEventListener("keydown", (e) => {
        pressedKey = e.key;
        console.log(e.key)
    });
}

getKey();
getKey1(pressedKey);
