import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api.js'
import {useEffect, useState, useRef} from 'react'

// REACT HOOKS - useState - useRef


function Home() {
 
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)
    console.log(users)
  }

  async function createUsers(){ //enviando novo usuario
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  useEffect ( () => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' placeholder='Nome' ref={inputName}></input>
        <input name='idade' type='number' placeholder='Idade' ref={inputAge}></input>
        <input name='email' type='email' placeholder='Email' ref={inputEmail}></input>
        <button type='button' onClick={createUsers}>Cadastrar</button>
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
