
//#region Cargar todos los diccionarios
function load_concepts_database() {
	let database_concepts = [];
	return database_concepts.concat(concepts, db_contexts, phrases, process, relations, textos, tokens, topics)
}
//#endregion
