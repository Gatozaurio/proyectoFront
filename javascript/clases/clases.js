
class Concierto{

	// Constructor
	constructor(grupo, precio, date, ubicacion){
		this.grupo = grupo;
		this.precio = precio;
		this.date = date;
		this.ubicacion = ubicacion;
		this.imagen = imagen;
	}

	// Setters
	set grupo(grupo){
		this._grupo = grupo;
	}
	set precio(precio){
		this._precio = precio;
	}
	set date(date){
		this._date = date;
	}
	set ubicacion(ubicacion){
		this._ubicacion = ubicacion;
	}
	set imagen(imagen){
		this._imagen = imagen;
	}

	// Getters
	get concierto(){
		return this._concierto;
	}
	get precio(){
		return this._precio;
	}
	get date(){
		return this._date;
	}
	get ubicacion(){
		return this._ubicacion;
	}
	get imagen(){
		return this.imagen;
	}
}

class Grupo{

	// Constructor
	constructor(nombre){
		this.nombre = nombre;
		this.conciertos = []; // Array de conciertos
	}

	// Getters
	get nombre(){
		return this._nombre;
	}
	get conciertos(){
		return this._conciertos;
	}

	// Setters
	set nombre(nombre){
		this._nombre = nombre;
	}
	set conciertos(conciertos){
		this._conciertos = conciertos;
	}

	incluirConcierto(concierto){
		this._conciertos.push(concierto);
	}
}

class Usuario{

	// Constructor
	constructor(nombreUsuario, contraseña, correo, nombreReal){
		this.nombreUsuario = nombreUsuario;
		this.contraseña = contraseña;
		this.correo = correo;
		this.nombreReal = nombreReal;
		this.conciertos = [];
	}

	// Setters
	set nombreUsuario(nombreUsuario){
		this._nombreUsuario = nombreUsuario;
	}
	set contraseña(contraseña){
		this._contraseña = contraseña;
	}
	set correo(correo){
		this._correo = correo;
	}
	set nombreReal(nombreReal){
		this._nombreReal = nombreReal;
	}
	set conciertos(conciertos){
		this._conciertos = conciertos;
	}

	// Getters
	get nombreUsuario(){
		return this._nombreUsuario;
	}
	get contraseña(){
		return this._contraseña;
	}
	get correo(){
		return this._correo;
	}
	get nombreReal(){
		return this._nombreReal;
	}
	get conciertos(){
		return this._conciertos;
	}

	añadirConcierto(concierto) {
		this.conciertos.push(concierto);  
	}
}

class Voto {

	// Constructor
	constructor(valor, usuario){
		this.valor = valor;
		this.usuario = usuario;
	}

	// Getters
	get valor(){
		return this._valor;
	}
	get usuario(){
		return this._usuario;
	}

	// Setters
	set valor(valor){
		this._valor = valor;
	}
	set comentario(comentario){
		this._comentario = comentario;
	}
	set usuario(usuario){
		this._usuario = usuario;
	}
}

class Etiqueta {
	// Constructor
	constructor(nombre){
		this.nombre = nombre;
		this.votos = []; // Array de votos
	}

	// Getters
	get nombre(){
		return this._nombre;
	}
	get votos(){
		return this._votos;
	}

	// Setters
	set nombre(nombre){
		this._nombre = nombre;
	}
	set conciertos(conciertos){
		this._conciertos = conciertos;
	}
}
