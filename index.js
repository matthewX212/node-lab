const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
const PORT = process.env.PORT || 8080;

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!!!</h1><h2>Aqui você encontra os melhores produtos!</h2>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    const produtos = [
        { id: 1, nome: "Cadeira", preco: 150.00 },
        { id: 2, nome: "Mouse", preco: 45.50 },
        { id: 3, nome: "Monitor", preco: 799.90 }
    ];

    // suporte opcional para retornar JSON: /produtos?format=json
    if (req.query.format === "json") {
        return res.json(produtos);
    }

    let html = "<h1>Lista de Produtos</h1>";
    html += "<ul>";
    produtos.forEach(p => {
        html += `<li>${p.id} - ${p.nome} — R$ ${p.preco.toFixed(2)}</li>`;
    });
    html += "</ul>";

    res.send(html);
})

// rota simples de clientes
app.get("/clientes", (req, res) => {
    const clientes = [
        { id: 1, nome: "Carlos", email: "carlos@example.com" },
        { id: 2, nome: "Bruno", email: "bruno@example.com" },
        { id: 3, nome: "Carla", email: "carla@example.com" }
    ];

    // suporte opcional para retornar JSON: /clientes?format=json
    if (req.query.format === "json") {
        return res.json(clientes);
    }

    let html = "<h1>Lista de Clientes</h1>";
    html += "<ul>";
    clientes.forEach(c => {
        html += `<li>${c.id} - ${c.nome} — ${c.email}</li>`;
    });
    html += "</ul>";

    res.send(html);
});

console.log ("PORT env: ", process.env.port);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
