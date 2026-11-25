function santa()
{
    document.getElementById('titulo').textContent='Santa Claus';
    document.getElementById('descripcion').textContent='Papá Noel (del francés Noël, Navidad), conocido también como Santa Claus (en neerlandés: Sinterklaas), Viejito Pascuero, Colacho, San Nicolás o simplemente Santa, es un personaje legendario originario del cristianismo occidental, conocido por repartir regalos a niños durante las noches de Nochebuena y Navidad (24 y 25 de diciembre). Estos regalos pueden contener juguetes, golosinas, carbón o simplemente nada, dependiendo de si el infante se encuentra en la «lista de niños buenos o malos». Según la leyenda, Papá Noel fabrica los regalos con ayuda de sus elfos, con los que trabaja en su taller, repartiendo los regalos con ayuda de sus renos que tiran de su trineo por el aire. El personaje de Papá Noel está inspirado en tradiciones folclóricas destacadas de personajes como Nicolás de Bari (como también de su versión legendaria húngara, Mikulás) por parte del folclore europeo, la personificación de la Navidad según el folclore inglés de Papá Noel, y la figura neerlandesa de Sinterklaas.';
}
function jesus()
{
    document.getElementById('titulo').textContent='Niño Jesus';
    document.getElementById('descripcion').textContent='El Niño Jesús es el nombre genérico de las imágenes devocionales que representan a Jesús de Nazaret desde su nacimiento hasta los 12 años, momento de su encuentro con los doctores en el Templo. En algunas partes de España, América Latina y Europa Central el día de Navidad, los regalos no los traen Papá Noel ni los Reyes Magos sino el Niño Dios, como cariñosamente se le llama al Niño Jesús (en la República Checa Ježíšek, en Eslovaquia Ježiško, en Alemania, Austria y Suiza Christkind o Kristkindl). Esta costumbre se conserva en lugares cuyas tradiciones están menos influidas por el advenimiento de las celebraciones anglosajonas. La mayor parte de los festejos son el 25 de diciembre. Los niños escriben su carta al Niño Jesús solicitando juguetes y golosinas u otros favores y peticiones.'
}
function krampus()
{
    document.getElementById('titulo').textContent='Krampus'
    document.getElementById('descripcion').textContent='Krampus es una criatura mitológica del folclore de los países como Austria, Alemania, Francia, Italia, Liechtenstein, Mónaco, Eslovenia, Suiza y Hungría. Su apariencia combina orejas puntiagudas similares a las de un elfo, grandes cuernos, y un aspecto demoníaco que inspira terror. Según la leyenda, Krampus aparece en la noche del 5 al 6 de diciembre, conocida como la Krampusnacht (Noche del Krampus, en alemán), para castigar a los niños que se han portado mal o carecen de espíritu navideño. Durante esta noche, recorre las calles en solitario o acompañado de San Nicolás (Santa Claus), haciendo resonar cencerros y cadenas oxidadas para intensificar el miedo que provoca su presencia. A los niños desobedientes los captura en un saco y los transporta al inframundo, donde son castigados y destruidos eternamente.'
}
function fpicana()
{
    var x = parseInt(document.getElementById('picana').textContent) + 1;
    document.getElementById('picana').textContent = x;
    var y = parseInt(document.getElementById('total').textContent) + 50;
    document.getElementById('total').textContent = y;
}
function fpavo()
{
    var x = parseInt(document.getElementById('pavo').textContent) + 1;
    document.getElementById('pavo').textContent = x;
    var y = parseInt(document.getElementById('total').textContent) + 120;
    document.getElementById('total').textContent = y;
}
function fpaneton()
{
    var x = parseInt(document.getElementById('paneton').textContent) + 1;
    document.getElementById('paneton').textContent = x;
    var y = parseInt(document.getElementById('total').textContent) + 40;
    document.getElementById('total').textContent = y;
}
function flechon()
{
    var x = parseInt(document.getElementById('lechon').textContent) + 1;
    document.getElementById('lechon').textContent = x;
    var y = parseInt(document.getElementById('total').textContent) + 50;
    document.getElementById('total').textContent = y;
}
function agregarRegalo()
{
    var nombre = document.getElementById('regalo').value;
    var x = parseInt(document.getElementById('precio').value);
    var y = parseInt(document.getElementById('totalr').textContent) + x;
    document.getElementById('totalr').textContent = y;
    var li = document.createElement('li');
    li.textContent = nombre + " - " + x + " bs";
    document.getElementById('lista').appendChild(li);
    document.getElementById('regalo').value = "";
    document.getElementById('precio').value = "";
}