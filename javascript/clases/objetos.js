let listaConciertos = [];

let grupoOfunkillo = new Grupo ("Ofunkillo");

let conciertoOfunkillo01 = new Concierto(grupoOfunkillo, 12, new Date(2018,12,20), "Sala Malandar");

let conciertoOfunkillo02 = new Concierto(grupoOfunkillo, 12, new Date(2019,1,16), "Sala Malandar");

grupoOfunkillo.incluirConcierto(conciertoOfunkillo01);
grupoOfunkillo.incluirConcierto(conciertoOfunkillo02);

listaConciertos.push(conciertoOfunkillo01);
listaConciertos.push(conciertoOfunkillo02);


let usuario01 = new Usuario("Manolo25", "manoloermejo25", "manolo@gmail.com", "Manolo Meloinvento");

let usuario02 = new Usuario("Pepeeee", "pepepass32", "pepe32@gmail.com", "Pepe Carapapa");

let voto01 = new Voto(true, "Está guay.", usuario01);
let voto02 = new Voto(false, "Está to feo.", usuario02);