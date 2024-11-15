import Button from './Button'
import './ImcCalc.css'
import { useState } from 'react'

const ImcCalc = ({calcImc}) => {
    const [height,setHeight] = useState("")
    const [weight,setWeight] = useState("")

    const clearForm = (e)=>{
        e.preventDefault()
        setHeight("")
        setWeight("")

    }
    const validDigits =(text)=>{
       
        return text.replace(/[^0-9,]/g,"")
    }
    const handleHeightChange = (e)=>{
       
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue)

    }
    const handleWeightChange = (e)=>{
       
        const updateValue = validDigits(e.target.value)
        setWeight(updateValue)

    }
    

  return (
    <div id='calc-conteiner'>
        <h2>Calculadora de Imc</h2>
        <form id="imc-form">
            <div className='form-inputs'>
                <div className='form-control'>
                    <label htmlFor="height">
                        Altura:
                    </label>
                    <input type="text" name='height' id='height' placeholder='exemplo 1,75' onChange={(e)=>handleHeightChange(e)} value={height}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="weight">
                        Peso:
                    </label>
                    <input type="text" name='weight' id='weight' placeholder='exemplo 75.7' onChange={(e)=>handleWeightChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={calcImc}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
                
            </div>
        </form>
    </div>
  )
}

export default ImcCalc