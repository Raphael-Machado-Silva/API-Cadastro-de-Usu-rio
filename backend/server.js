import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())
app.use(cors())
/*  Precisam de 2 coisas: 1) tipo de rota / método HTTP; 
                          2) endereço
get - listar/mostrar
post - criar
put - editar vários
patch - editar um
delete - deletar

ADMIN 
-- raphael
-- dGtQL9nls8X1G8hi
*/



// criando usuarios e mandando resposta de status
app.post('/usuarios', async (req, res)=>{

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})


app.get('/usuarios', async (req, res) => {

    let users = []

    if(req.query){

        users = await prisma.user.findMany({
            where:{
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })

    } else{
        users = await prisma.user.findMany()
    }

    

    res.status(200).json(users)
})

// modificando usuarios
app.put('/usuarios/:id', async (req, res)=>{

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({message: "Usuario deletado"})
})

app.listen(3002)


/*  Criar nossa API de Usuários

          -- Criar um usuario
          -- listar todos os usuarios
          -- editar um usuarios
          -- deletar um usuario
*/