const axios = require('axios');

const getLugarLatLng = async (direccion) => {

	const encodeURL = encodeURI(direccion);

	console.log(encodeURL)


	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
	  headers: {'X-RapidAPI-Key': '3f8caf0089mshd46ee1ba80605ecp1851b9jsn27214697bec7'}
	});

	const resp = await instance.get();

	if (resp.data.Results.length === 0){
		throw new Error(`No hay resultados para ${direccion}`);
	}

	const data = resp.data.Results[0];
	const direcc = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		direcc,
		lat,
		lng
	}

}

module.exports = {
	getLugarLatLng
}