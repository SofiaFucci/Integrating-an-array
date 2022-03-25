/*Funcion para calcular el presupuesto de viaje entre dos ciudades*/




let num_noches = prompt("Confirmas que son 2 personas para viajar?")
let si = true
if (si) {
    console.log("Calcular Presupuesto")
}



let servicios = prompt ("Querés conocer los servicios de nuestra agencia? Tipea continuar")
let continuar = true
if (continuar) {
    console.log("Presentacion de servicios")
}

const productos = [
    { id: 1, producto: "Aereos" },
    { id: 2, producto: "Alojamiento" },
    { id: 3, producto: "Pack de atracciones turisticas" },
  ];
  
  console.log(productos[0].producto);
  
  for (let item of productos) {
    alert(item.id + " " + item.producto);
  }

  const europa  = ["Francia, Italia, Alemania, Reino Unido"]
  const restomundi = ["USA, Japon, Australia, Nueva Zelanda"]
  const todoslosdestinos = europa.concat(restomundi) 
  console.log(todoslosdestinos)

  function calcular_costo() {
    var num_noches = document.getElementById("numero_noches").value;
    var destino = document.getElementById("ciudad_destino").value;

    var resultado1 = costo_hotel(num_noches);
    var resultado2 = costo_aereos(destino);
    var resultado3 = gastos_diarios(num_noches);
    var resultado_total = resultado1 + resultado2 + resultado3


    document.getElementById("result").value = resultado_total;

}

function costo_hotel(n) {
    var costo_estadia = n * 110
    return costo_estadia;
}

function costo_aereos(ciudad) {
    if (ciudad == "paris") {
        return 1873;
    } else if (ciudad == "londres") {
        return 2105;
    }
}

function gastos_diarios(n) {
    var costo_diario = n * 60
    return costo_diario;
}