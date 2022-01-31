const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;
const menu = new Map([
    ['Smoothies',   {sabor: ['Fresa', 'Mango', 'Frutos rojos', 'Plátano', 'Sandía', 'Melón'], tipo: 'Bebida'}],
    ['Chamoyadas',  {sabor: ['Fresa', 'Mango'], tipo: 'Bebida'}],
    ['Jugos',       {sabor: ['Verde', 'Antigripal', 'Energético', 'Tropical', 'Orange'], tipo: 'Bebida'}],
    ['Licuados',    {sabor: ['Fresa', 'Mango', 'Plátano', 'Fruta de la Temporada'], tipo: 'Bebida'}],
    ['Frutas',      {sabor: ['Suprema con miel', 'Con yogurt', 'Con sal y limón', 'Fruta Entera'], tipo: 'Comida'}],
    ['Galletas',    {sabor: ['Chía', 'Avena'], tipo: 'Comida'}],
    ['Aguas',       {sabor: ['Sandía con menta', 'Piña naranja', 'Pepino con chía', 'Apio con limón'], tipo: 'Bebida'}],
    ['Salads',      {sabor: ['Tree-Tuna Salad', 'Tree-Ham Cheese Salad', 'Tree-Green Salad', 'Tree-Fruit Salad', 'Peras con Salami Salad'], tipo: 'Comida'}],
    ['Baguettes',	{sabor: ['Ham Cheese Gouda', 'Tuna Cheese Gouda', 'Chicken Cheese Gouda', 'Serrano'], tipo: 'Comida'}],
    ['Paninis',     {sabor: ['Green', 'Crimimi', 'Salami'], tipo: 'Comida'}],
    ['Ciabattas',   {sabor: ['Jamón', 'Atún'], tipo: 'Comida'}],
    ['Sandwiches',  {sabor: ['Jamón', 'Atún'], tipo: 'Comida'}],
    ['Tortas',      {sabor: ['Jamon', 'Pollo'], tipo: 'Comida'}],
    ['Bagels',	    {sabor: ['Queso Crema con frutos rojos', 'Crema de cacao', 'Crema de cacahuate', 'Jamón de pavo', 'Jamón de pierna', 'Pechuga de pollo', 'Pepperoni', 'Veggie'], tipo: 'Comida'}]
]);


app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});
app.get('/', function(requets, response){
    response.send("API desde NodeJS")
});
app.post('/event', function(request, response){
    console.log(request.body)
    const {nombre, nPersonas} = request.body;
});
app.get('/sabores', function(request, response){
    const categoria = request.query.categoria;
    var cat = menu.get(categoria);
    console.log(categoria, cat.sabor);
    response.send(cat.sabor); 
});
app.get('/categorias', function(request,response){
    console.log("Entre", menu.keys());
    var categories = Array.from(menu.keys()).sort(function(a, b){return b.length - a.length})
    console.log(categories.map(c => [c, menu.get(c).tipo]));
    response.send(categories.map(c => [c, menu.get(c).tipo]));
});

var idSet = new Set();
const time = new Date();
app.post('/visitas', function(req, res){
    const num = req.query.id; //num = cadena
    if(time.getHours()==='24' && time.getMinutes()=='0' && time.getSeconds()=='0'){
        idSet.clear();
    }else{ //aún no es hora de resetear
        if(idSet.has(num)){
            res.send("Usado");
            idSet.clear();
        }
        else{
            idSet.add(num);
            if(idSet.size % 5 === 0) res.send("Ganador");
            else res.send("Registrado");
            console.log(idSet.size);
        }
    }
   
    
})