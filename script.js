

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPesoSpan = document.getElementById('totalPeso');
const totalCaloriasSpan = document.getElementById('totalCalorias');
const validationMessage = document.getElementById('validationMessage');

function calculaElementos() {

    /*se declaran las variables a utilizar y se procede a establcer un arreglo  */
    let totalPeso = 0;
    let totalCalorias = 0;
    const selectedElements = [];
    
    /*se procede a validar los checkbox que se han selecionado se recorre por medio de 
    foreach y se evalua su peso y calorias ,adicional se suman las respectivas 
    cantidades de calorias y pesos   */

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const element = checkbox.value;
            const peso = parseFloat(checkbox.parentElement.textContent.match(/Peso: (\d+)/)[1]);
            const calorias = parseFloat(checkbox.parentElement.textContent.match(/Calorías: (\d+)/)[1]);
            totalPeso += peso;
            totalCalorias += calorias;
            selectedElements.push(element);
        } 
    });

     /*esto me devuelve las cantidades que son evaluadas con el bucle if dependiendo su cantidad ,para su validacion recomendada   */
    totalPesoSpan.textContent = totalPeso;
    totalCaloriasSpan.textContent = totalCalorias;
    

    if (totalCalorias < 15 && totalPeso <= 10) {
        validationMessage.textContent = 'Esta por debajo del total de calorias permitido son minimo (15) ';
    } 
    else if (totalPeso > 10 && totalCalorias >=15) {
        validationMessage.textContent = 'Se supera el peso máximo (10) permitido.';
    } 
    else if (totalPeso <= 10 && totalCalorias >=15) {
        validationMessage.textContent = 'Los Elementos seleccionados son Viables: ' + selectedElements.join(', ');
    } 
    else {
        validationMessage.textContent = 'Los Elementos seleccionados NO son Viables: ';
    }
}


console.log(calculaElementos());
