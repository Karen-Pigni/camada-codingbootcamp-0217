//! 1- Escribir la función once, que acepte una función como parámetro, retorne el valor de la misma, pero que tenga la habilidad de saber si esa función ya fue ejecutada, en caso positivo no debería permitir que se ejecute otra vez.

function once(fn) {
    let yaCorrio = false;
    return () => {
        if (!yaCorrio) {
            yaCorrio = true;
            return fn();
        }
        return `La funcion ${fn.name} no puede ser ejecutada mas de una vez!`;
    };
}

function finDelJuego() {
    return 'Ganaste!!';
}

const onceFindelJuego = once(finDelJuego)

onceFindelJuego() // -> "Ganaste!!"
onceFindelJuego() // -> Nop! solo una vez!!