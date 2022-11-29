alert('Bienvenidos a Mi Prestamo')

// FUNCION DEL MENU PINCIPAL
function elegirOpciones() {
    const menu = 'Cotiza tu prestamo YA! \n1-Prestamo a 3 mes 5% \n2-Prestamo a 6 meses 30%  \n3-Prestamo a 12 meses 65% \n9-Salir del menu';
    return parseInt(prompt(menu));
}



//CLASE PARA CREAR OBJETO PRESTAMO
class Prestamo {
    constructor(id, monto, cuotas) {
        this.id = id,
            this.monto = monto,
            this.cuotas = cuotas,
            this.fecha = new Date

    }

    //METODO PARA IMPRIMIR EL MONTO Y LAS CUOTAS ELEGIDAS
    imprimirCuotas() {
        let cuota = this.monto / this.cuotas;
        for (let i = 1; i <= this.cuotas; i++)
            console.log('Cuota n°' + ' ' + (i) + ' ' + 'de' + ' ' + cuota)
    }

    toString() {
        return 'Prestamo con ID: ' + this.id + ' ' + 'monto: ' + this.monto + ' ' + 'cuotas: ' + this.cuotas + ' ' + 'fecha: ' + this.fecha
    }
}

//ARRAY DONDE SE VAN A IR AGREGANDO LOS PRESTAMOS QUE SE VAN CREANDO
const listaDePrestamos = []

//FUNCION OPCIONES DE CUOTAS A ELEGIR Y EL MONTO
function seleccion() {
    let seleccionar;
    let opciones = elegirOpciones();
    let montoInicial;
    let prestamo;
    switch (opciones) {

        case 1:
            seleccionar = 'Prestamo a 3 mes 5%';
            console.log(seleccionar);
            montoInicial = parseInt(prompt('Ingrese monto a calcular:'));
            montoAPagar = montoInicial * 1.05;
            prestamo = new Prestamo(listaDePrestamos.length + 1, montoAPagar, 3);
            console.log(prestamo.toString());
            prestamo.imprimirCuotas();
            listaDePrestamos.push(prestamo)
            seleccion()
            break;
        case 2:
            seleccionar = 'Prestamo a 6 meses 30%'
            console.log(seleccionar);
            montoInicial = parseInt(prompt('Ingrese monto a calcular:'));
            montoAPagar = montoInicial * 1.3;
            prestamo = new Prestamo(listaDePrestamos.length + 1, montoAPagar, 6);
            console.log(prestamo.toString());
            prestamo.imprimirCuotas();
            listaDePrestamos.push(prestamo)
            seleccion()
            break;
        case 3:
            seleccionar = 'Prestamo a 12 meses 65%'
            console.log(seleccionar);
            montoInicial = parseInt(prompt('Ingrese monto a calcular:'));
            montoAPagar = montoInicial * 1.65;
            prestamo = new Prestamo(listaDePrestamos.length + 1, montoAPagar, 12);
            console.log(prestamo.toString());
            prestamo.imprimirCuotas();
            listaDePrestamos.push(prestamo)
            seleccion()
            break;
        case 9:
            seleccionar = 'salir'
            console.log(seleccionar);
            break;
        default:
            alert('Opcion invalida, ingrese una opcion');
            seleccion()
    }

}

seleccion();

function opcionesDeFiltrado() {
    const menu = '1-Buscar prestamo \n2-Filtrar por cuotas  \n3-Eliminar Prestamo';
    return parseInt(prompt(menu));
}

function busqueda() {
    let filtrar;
    let filtrado = opcionesDeFiltrado();
    let buscador;
    let idEncontrado;
    let filtrarCuotas;
    let eliminarPrestamo;
    switch (filtrado) {
        case 1:
            filtrar = 'Buscar prestamo'
            buscador = parseInt(prompt('Ingresa el numero de tu prestamo'));
            idEncontrado = listaDePrestamos.find((prestamo) => prestamo.id == buscador);
            console.log(idEncontrado);
            break;
        case 2:
            filtrar = 'Filtrar por cuotas'
            buscador = parseInt(prompt('Ingresa 3, 6 o 12 cuotas'));
            filtrarCuotas = listaDePrestamos.filter((prestamo) => prestamo.cuotas == buscador);
            console.log(filtrarCuotas);
            break;

        case 3:
            filtrar = 'Eliminar prestamo'
            eliminarPrestamo = listaDePrestamos.pop();
            console.log(listaDePrestamos);
            break;
        default:
            busqueda();
    }
}

busqueda();








