const os = require('os');

function obtenerInformacionRed() {
  const interfacesRed = os.networkInterfaces();  //interfaces de red del sistema
  const resultado = [];

  for (const interfaz in interfacesRed) { //iterar sobre las interfaces
    interfacesRed[interfaz].forEach(config => { //sobre configuraciones
      const { family, address, internal } = config;
      resultado.push({
        interfaz,
        familia: family,
        direccion: address,
        interno: internal
      });
    });
  }

  return resultado;
}

module.exports = obtenerInformacionRed;
