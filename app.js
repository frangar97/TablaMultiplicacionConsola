const yargs = require('./config/yargs');
const { crearArchivo } = require('./helpers/crearArchivo');


crearArchivo(yargs.b, yargs.l, yargs.h)
    .then(console.log)
    .catch(console.log)