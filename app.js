const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const direccion = {
	alias: 'd',
	desc: "Escriba la direccion para obtener su clima",
	demand: true
}



const argv = require('yargs').options({
			direccion
}).argv;




/*lugar.getLugarLatLng(argv.direccion)
	.then(console.log)
	.catch(console.log);*/

//clima.getClima(40.750000, -74.000000)
	//.then(console.log)
	//.catch(console.log);

const getInfo = async(direccion) => {


	try{
		const RespLugar = await lugar.getLugarLatLng(direccion);
		const RespClima = await clima.getClima(RespLugar.lat, RespLugar.lng);

		return `La temperatura de ${direccion} es de ${RespClima}C.`
	}catch(e){
		return `No se pudo determinar la temperatura de ${direccion}`
	}
	
}

getInfo(argv.direccion)
		.then(console.log)
		.catch(console.log);
