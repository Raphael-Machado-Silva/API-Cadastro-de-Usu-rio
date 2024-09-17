import express from 'express'

const app = express()
app.use(express.json())
/*  Precisam de 2 coisas: 1) tipo de rota / método HTTP; 
                          2) endereço
get - listar/mostrar
post - criar
put - editar vários
patch - editar um
delete - deletar
*/

const users = []

// criando usuarios e mandando resposta de status
app.post('/usuarios', (req, res)=>{

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)


/*  Criar nossa API de Usuários

          -- Criar um usuario
          -- listar todos os usuarios
          -- editar um usuarios
          -- deletar um usuario
*/