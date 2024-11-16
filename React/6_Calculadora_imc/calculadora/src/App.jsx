import { useState } from 'react'
import {data} from "./data/data"
import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

function App() {
  const calcImc = (e,height,weight)=>{
    e.preventDefault()
    if (!weight || !height){
      return;
    }
    const weightFloat = +weight.replace(",",".")
    const heightFloat = +height.replace(",",".")

    const imcResult = (weightFloat/(heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult)

    data.forEach((item)=>{
      if(imcResult >=item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)

      }
      
    })
    if(!info)return;
  }
  const reset =(e)=>{
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfo("")
  }
  
  
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className='conteiner'>
      
      {!imc?<ImcCalc calcImc = {calcImc}/>:<ImcTable data={data} imc = {imc} info={info} infoClass ={infoClass} reset = {reset}/>}
    </div>
  )
}

export default App
