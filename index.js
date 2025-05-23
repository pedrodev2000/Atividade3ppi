import express from 'express';

const host = '0.0.0.0';
const port = 3000;

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send(`
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
                <title>Pagina inicial</title>
                <style>

               body {
                         background-color:rgb(49, 128, 207);

                    }
            </style>
            </head>
            <body>
                <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h5 class="text-white h4">Página inicial</h5>
                            <span class="text-muted">Toggleable via the navbar brand.</span>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Menu
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/">Tela incial</a></li>
                                        <li><a class="dropdown-item" href="/cadastroFornecedores">Cadastrar um fornecedor</a></li>
                                        <li><a class="dropdown-item" href="#">Lista de fornecedores</a></li>
                                        <li><a class="dropdown-item" href="#">Sair</a></li>
                                    </ul>
                                </li>
                            </ul>s
                        </div>
                    </div>
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </body>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
       
       
       
            </html>
    `);

});

app.get('/cadastroFornecedores', (requisicao, resposta) => {



});


app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}/`);
});