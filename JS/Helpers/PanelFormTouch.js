delete Hammer.defaults.cssProps.userSelect;

const APP = document.getElementById("app");
const hammerjs = new Hammer(APP);

hammerjs.on("panleft panright", (event) => {
    if(event.pointerType === "touch") {
        const panel = document.getElementById("newTask");
        const windowWidth = window.screen.width;
        const distance = Math.floor(event.distance) >= 50;

        if((event.type === "panleft") && (event.center.x > (windowWidth - 100)) && distance) {
            panel.style.visibility = "visible";
        }

        if((event.type === "panright") && distance) {
            panel.style.visibility = "hidden";
        }
    }
});

export {hammerjs}