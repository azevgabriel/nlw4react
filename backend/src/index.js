const express = require('express');

const app = express();

app.use(express.json());

/*
    Métodos HTTP:
        GET: Buscar informaçôes do back-end
        POST: Criar uma informaçâo no back-end
        PUT/PATH: Alterar uma informação no back-end 
        DELETE: Deletar uma informaçâo no back-end 
*/

/*
    Tipos de parâmetros:
    Query params: Filtros e paginação
    Route params: Identificar recursos (Atualizar/Deletar)
    Request body: Conteúdo na hora de criar ou editar um recurso (JSON)
*/

const projects = []; //test

// projects: recurso de projetos

app.get('/projects', (request,response) => {
    const query = request.query;

    return response.json([
        'Projeto 01',
        'Projeto 02',
        'Projeto 03',
    ]);
})

app.post('/projects', (request,response) => {
    //const body = request.body;
        
    return response.json(projects);    
})

app.put('/projects/:id', (request,response) => {
    const {title, owner} = request.params;
    const projects = {title, owner};
    
    return response.json(projects);    
})

app.delete('/projects/:id', (request,response) => {
    return response.json([
        'Projeto 02',
        'Projeto 03',
        'Projeto 04',
    ]);    
})


app.listen(3333, () => {
    console.log('Back-End started!');
});