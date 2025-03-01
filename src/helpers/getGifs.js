/* 
INTEGRANTES DEL EQUIPO
Acosta Lira David Manuel
Bianchi Polanco Gianna Angelica
Mena Mexico Joan Antonio
*/
// Definimos una función asíncrona getGifs que toma una categoría como argumento
export const getGifs = async( category ) => {
 // Construimos la URL para la API de Giphy con la categoría y un límite de 10 imágenes
const url =
`https://api.giphy.com/v1/gifs/search?api_key=lEFX39TTPnMTGm7r5VV5M2KsW2K6H6IY&q=${ category
}&limit=10`;
 // Hacemos una petición a la API de Giphy
const resp = await fetch( url );
 // Extraemos los datos de la respuesta en formato JSON
const { data } = await resp.json();
 // Mapeamos los datos a un nuevo arreglo de objetos con id, título y URL de cada imagen
const gifs = data.map( img => ({
id: img.id,
title: img.title,
url: img.images.downsized_medium.url
}));

 // Devolvemos el arreglo de objetos
return gifs;
}