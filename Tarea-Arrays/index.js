const movimientos = [
  {
    tipo: "ingreso",
    monto: 5000,//1
  },
  {
    tipo: "ingreso",
    monto: 300,//2
  },
  {
    tipo: "extraccion",
    monto: 500,//3
  },
  {
    tipo: "ingreso",
    monto: 300,//4
  },
  {
    tipo: "extraccion",
    monto: 1000,//5
  },
  {
    tipo: "ingreso",
    monto: 500,//6
  },
  {
    tipo: "ingreso",
    monto: 500,//7
  },
  {
    tipo: "ingreso",
    monto: 500,//8
  },
  {
    tipo: "extraccion",
    monto: 2000,//9
  },
  {
    tipo: "ingreso",
    monto: 500,//10
  },
  {
    tipo: "extraccion",
    monto: 500,//11
  },
];

//Utilizar métodos de los arrays para conseguir, el total de ingresos, el total de extracciones y el estado de cuenta final

function ingresos(){
    var acc = 0
    movimientos.forEach(function(movimiento){
        if(movimiento.tipo === "ingreso"){
            acc += movimiento.monto
        }
    })
    return(`El total de ingresos es ${acc}`)
}
console.log(ingresos())

function extracciones(){
    var acc = 0
    movimientos.forEach(function(movimiento){
        if(movimiento.tipo === "extraccion"){
            acc += movimiento.monto
        }
    })
    return(`El total de extracciones es ${acc}`)
}
console.log(extracciones())

function EstadoDeCuentas(){
    var acc = 0
    movimientos.forEach(function(movimiento){
        if(movimiento.tipo == "ingreso"){
            acc += movimiento.monto
        }
        if(movimiento.tipo == "extraccion"){
            acc -= movimiento.monto
        }
    })
    return(`El estado de cuenta final es ${acc}`);
}
console.log(EstadoDeCuentas())