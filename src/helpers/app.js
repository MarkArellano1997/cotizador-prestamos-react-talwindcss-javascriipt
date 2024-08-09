const formatCurrency = (valor) => {
    const formato = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'


    })

    return formato.format(valor)
}

function calcularTotalPagar(cantidad, meses) {

    const interesAnual = 17.5

    if (meses===6) {
        cantidad += (meses/12)*cantidad*(interesAnual/100)
    }else if(meses===12){
        cantidad += (meses/12)*cantidad*(interesAnual/100)
    }else{
        cantidad += (meses/12)*cantidad*(interesAnual/100)
    }

    return cantidad
}

export {
    formatCurrency,
    calcularTotalPagar
}