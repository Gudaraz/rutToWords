getRutWords=(rut) => {
    var split_rut = rut.split('-'); 
    var splitARut1 =numeroALetras(parseInt(split_rut[0].replace(/\./g,''))); 
    var splitBRut1 =numeroALetras(parseInt(split_rut[1].replace(/\./g,'')));
    return splitARut1.toLowerCase() + " guion " + splitBRut1.toLowerCase();
    }
