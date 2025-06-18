let reiniciar;
do {
    console.log('%c--- EJERCICIO 1: CONTROL DE EDAD ---', 'color: white; background: #007acc; font-weight: bold; padding: 4px;');

    let edad = Number(prompt('Edad?'));

    switch (true) {
        case (edad > 18):
            alert('Buenas noches, pase... pase');
            break;
        case (edad === 18):
            alert('Pasa chaval, pero no me des problemas, eh!');
            break;
        default:
            alert('Lo siento! Solo mayores de 18');
            break;
    }

    console.log('%c--- EJERCICIO 2: ELECCIÓN DE COLOR ---', 'color: white; background: #e63946; font-weight: bold; padding: 4px;');

    let color = String(prompt('Elije un color entre azul, verde, rojo, amarillo o violeta')).toLocaleLowerCase();

    switch (color) {
        case 'azul':
            alert('🔵 El azul transmite calma y confianza. ¡Relájate y disfruta la noche!');
            break;
        case 'verde':
            alert('🟢 El verde simboliza esperanza y frescura. ¡Que tu noche sea renovadora!');
            break;
        case 'rojo':
            alert('🔴 El rojo representa pasión y energía. ¡Prepárate para una noche vibrante!');
            break;
        case 'amarillo':
            alert('🟡 El amarillo irradia alegría y optimismo. ¡Contagia tu buena vibra esta noche!');
            break;
        case 'violeta':
            alert('🟣 El violeta sugiere creatividad y misterio. ¡Deja volar tu imaginación esta noche!');
            break;
        default:
            alert('No elegiste ningún color válido');
            break;
    }

    console.log('%c--- EJERCICIO 3: ELECCIÓN DE COLOR ---', 'color: white; background:rgb(86, 230, 57); font-weight: bold; padding: 4px;');

    alert('⚠️ la lampara no funciona');
    let isPlugged;
    let brokenLightBulb;
    do {
        const respuesta = prompt('¿La lámpara está enchufada? (si/no)').trim().toLowerCase();
        if (respuesta === 'si') {
            isPlugged = true;
        } else if (respuesta === 'no') {
            isPlugged = false;
        } else {
            alert('Por favor, responde solo "si" o "no".');
        }
    } while (isPlugged === undefined);
    alert(isPlugged ? 'Ok...Comprueba el foco' : 'Enchufa la lámapara');

    do {
        const respuesta = prompt('¿El foco esta fundido? (si/no)').trim().toLowerCase();
        if (respuesta === 'si') {
            brokenLightBulb = true;
        } else if (respuesta === 'no') {
            brokenLightBulb = false;
        } else {
            alert('Por favor, responde solo "si" o "no".');
        }
    } while (brokenLightBulb === undefined);

    alert(brokenLightBulb ? 'Remplaza el foco' : 'Mejor compra una lámpara nueva');

    reiniciar = prompt('¿Quieres reiniciar ? (si/no)').trim().toLowerCase();
} while (reiniciar === 'si');
