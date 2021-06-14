const fs = require('fs');

const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        console.clear();
        let salida = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("================");
            console.log(`    Tabla del: ${base}   `);
            console.log("================");
            console.log(salida);
        }

        if (!fs.existsSync('./salida')) {
            fs.mkdirSync('./salida')
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado con exito`;
    } catch (err) {
        throw err;
    }
}

module.exports = { crearArchivo };