let dataCampo = document.getElementById("data");
dataCampo.addEventListener("input", function () {
    dataCampo.value = dataCampo.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})\d+?$/, '$1');
});


function autoFormatarTelCel(campo) {
    let caracteres = campo.value.length;
    let valor = campo.value;

    if (caracteres == 2) {
        campo.value = '(0' + valor + ') ';
    }

    if (caracteres == 7) {
        campo.value = valor + '-';
    }

    if (caracteres == 12) {
        campo.value = valor + '-';
    }
}
function autoFormatarTelFix(campo) {
    let caracteres = campo.value.length;
    let valor = campo.value;

    if (caracteres == 2) {
        campo.value = '(0' + valor + ') ';
    }

    if (caracteres == 10) {
        campo.value = valor + '-';
    }
}