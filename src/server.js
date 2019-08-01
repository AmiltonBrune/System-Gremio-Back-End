const libraries = require("./config/libraries");

const app = libraries.express();
app.set('view engine', 'ejs') 
app.use(libraries.bodyParser.json());
app.use(libraries.bodyParser.urlencoded({ extended: true }));

require("./api/routes/index")(app);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
