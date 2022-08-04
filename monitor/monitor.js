const monitorTextArea = document.querySelector('#MonitorTextArea')
// esto funciono es decir escribio en el textarea
// monitorTextArea.value = "hola mundo";
var i = 0;
function writeOnTextBox(){
    
    if (monitorTextArea.value.length == 0){
        line = "codigo gcode "+i+"\n";
        
    } 
    else{
        i++;
        line = "codigo gcode "+i+"\n";
    } 
    //console.log("-->"+monitorTextArea.value.length);
    const regexp = /\n/g;
    let newLines = [...monitorTextArea.value.matchAll(regexp)]
    let rows = monitorTextArea.rows-2
    text = monitorTextArea.value

    if(newLines.length>rows){
        monitorTextArea.value = text.slice(newLines[newLines.length-rows].index,text.length)+line
    }
    else{
        monitorTextArea.value += line;
    }
    const fs = require("fs");
let ruta = './log.txt'
let texto = "Esto es una prueba \n\t";
fs.open(ruta, 'w+', (err, fd) => {
    if (err) { 
        console.log(err); 
    }
    else {        
        fs.appendFile(ruta, texto, function (err) {
            if (err) throw err;
            fs.close(log, function (err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        });
    }
});
    /*
    var s = txt.CreateTextFile("guardo/1.txt", true);
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateTextFile("testfile.txt", true);
    // /home/jonathan/Escritorio/Javascript/guardo
    a.WriteLine("This is a test.");
    a.Close();*/
    //WriteFile();
}

const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}
const $botonDescargar = document.querySelector("#descargar");
$botonDescargar.onclick = () => {
    guardarArchivoDeTexto(monitorTextArea.value , "archivo.txt");
}

















/*function WriteFile() 
{
    /*var fso = new ActiveXObject("Scripting.FileSystemObject");
    var a = fso.CreateTextFile("//testfile.txt", true);
    a.WriteLine("This is a test.");
    a.Close();

const fs = require("fs");
let ruta = './log.txt'
let texto = "Esto es una prueba \n\t";
fs.open(ruta, 'w+', (err, fd) => {
    if (err) { 
        console.log(err); 
    }
    else {        
        fs.appendFile(ruta, texto, function (err) {
            if (err) throw err;
            fs.close(log, function (err) {
                if (err) throw err;
                console.log('It\'s saved!');
            });
        });
    }
});
}*/
