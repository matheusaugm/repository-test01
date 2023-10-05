# repository-test01

### **1)** Criar uma API em NodeJS para realizar CRUD no banco de dados MongoDB Atlas.
   • A estrutura de dados deverá ser MongoDB https://www.mongodb.com/pt-br
  
 • Certifique-se de que o seu usuario e senha estão ativos e o Cluster
   está funcionando.
   
• Crie uma Banco com o nome “Maps” e coleção com o nome
   “markers”
  
 • Copie a String de conexão que será usada no código fonte – lembre-
   se de alterar o usuário e senha.

Crie o arquivo model com a estrutura que será usada no MongoDB, veja o exemplo
trabalho na sala de aula do MongoDB.

```json
{
"markers": [
{
"name": "Rixos The Palm Dubai",
"position": [25.1212, 55.1535],
},
{
"name": "Shangri-La Hotel",
"location": [25.2084, 55.2719]
},
{
"name": "Grand Hyatt",
"location": [25.2285, 55.3273]
}
]
}
```

### b) Instalação das dependências necessárias, por exemplo:express e mongoose

### c) Criar o server e os endpoints abaixo utilizando os verbos HTTP adequados:

### d) Detalhes:

http://localhost:3000/location - consulta todas as localizações.
http://localhost:3000/location:id – consulta uma localização
expecífica por ID.
http://localhost:3000/newlocation - insere no formato JSON uma
nova localização.
http://localhost:3000/updatelocation:id - atualiza uma localização
expecífica por ID.
http://localhost:3000/deletelocation:id – exclui uma localização
expecífica por ID.

### d) Testar no Postman:

#### obs: 
Segmentei as rotas em vários arquivos propositalmente pra facilitar a correção