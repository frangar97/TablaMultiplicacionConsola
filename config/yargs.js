const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "La base de la tabla de multiplicar"
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Permite listar el resultado"
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que numero hacer la multiplicación'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }

        if (isNaN(argv.h)) {
            throw "El hasta tiene que ser un numero"
        }

        return true;
    }).argv;

module.exports = yargs;