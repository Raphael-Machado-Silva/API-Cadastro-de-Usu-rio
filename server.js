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

// criando usuarios
app.post('/usuarios', (req, res)=>{

    users.push(req.body)

    res.send('ok aqui deu certo')
})

app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(3000)


/*  Criar nossa API de Usuários

          -- Criar um usuario
          -- listar todos os usuarios
          -- editar um usuarios
          -- deletar um usuario
*/