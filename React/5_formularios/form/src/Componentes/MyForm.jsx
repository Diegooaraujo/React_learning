import React from 'react'
import estilo from "./MyForm.module.css"
import { useState } from 'react'
const MyForm = ({userName, userEmail}) => {
//3 gerenciamento de dados
const [name,setName] = useState(userName)
const [email,setEmail] = useState(userEmail)

const [desc,setDesc] = useState()

const [role,setRole] = useState("");

const handleName = (e)=>{
    setName(e.target.value)
    console.log(name)
}
//evnio de formulario
const  handSubmit =(e)=>{
    e.preventDefault()
    console.log(name,email,desc,role)
     {/*limpar form*/}
    setName("")
    setEmail("")
    setDesc("")
    setRole("")
}


 
  return (
    <div>
        {/*criação de form*/}
        {/*envio de formulario*/}
        <form className={estilo.form} onSubmit={handSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input className={estilo.input} type="text"  name='name' placeholder='Digite o seu nome' onChange={handleName} value={name || ""}/>

            </div>
            {/*label envolvendo input*/}
            <label>
                <span>E-Mail:</span>
                <input className={estilo.input} type="text" name='email' placeholder='Digite seu e-mail' onChange={(e)=>setEmail(e.target.value)} value={email || ""}/>
            </label>
            {/*text area*/}
            <label >
                <span>desc:</span>
                <textarea className={estilo.textarea} name="desc" placeholder='Descrição do usuario' onChange={(e)=>{{setDesc(e.target.value)}}} value={desc || ''}></textarea>
            </label>
            {/*select*/}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e)=>{ setRole(e.target.value)}} value={role} className={estilo.select}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Admin</option>
                </select>
            </label>

            <input className={estilo.input} type="submit" value="Enviar" />

            {/*manipular valores*/}

          

            

        </form>
    </div>
  )
}

export default MyForm
