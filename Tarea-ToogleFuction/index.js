function toggle(...vals) {
    let unset = {};
    let cur = unset;

    return function next() {
        if (cur != unset) {
            vals.push(cur);
        }
        cur = vals.shift();
        return cur;
    };
}

let hola = toggle("hola");
let onOff = toggle("on", "off");
let speed = toggle("slow", "medium", "fast");

hola(); // "hola"
hola(); // "hola"

onOff(); // "on"
onOff(); // "off"
onOff(); // "on"

speed(); // "slow"
speed(); // "medium"
speed(); // "fast"
speed(); // "slow”