import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api.js'
import {useEffect, useState} from 'react'
// REACT HOOKS - useState


function Home() {
 
  const [users, setUsers] = useState([])


  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
    console.log(users)
  }

  useEffect ( () => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome'></input>
        <input name='idade' type='number' placeholder='Idade'></input>
        <input name='email' type='email' placeholder='Email'></input>
        <button type='button'>Cadastrar</button>
      </form>

    {users.map( user => (

      <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>

      <button>
        <img src={Trash}></img>
      </button>
      </div>

    ))}
    </div>

  )
}

export default Home
