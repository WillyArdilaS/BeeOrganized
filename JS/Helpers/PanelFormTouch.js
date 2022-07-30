delete Hammer.defaults.cssProps.userSelect;

const APP = document.getElementById("app");
const hammerjs = new Hammer(APP);

hammerjs.on("panleft panright", (ev) => {
    if(ev.pointerType === "touch") {
        const panel = document.getElementById("newTask");
        const windowWidth = window.screen.width;
        const distance = Math.floor(ev.distance) >= 50;

        if((ev.type === "panleft") && (ev.center.x > (windowWidth - 100)) && distance) {
            panel.style.visibility = "visible";
        }

        if((ev.type === "panright") && distance) {
            panel.style.visibility = "hidden";
        }
    }
});

export {hammerjs};