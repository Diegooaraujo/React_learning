import React from 'react'

const Event = () => {

    const handClick = ()=>{
        console.log("executou")
    }
    //fução de renderização
    const render = (x)=>{
        if(x){
            return <h1>rederizando isso</h1>
        }else{
            return <h1>renderizando outra coisa</h1>
        }
    } 

  return (
    <div>
        <div>
            <button onClick={()=>{console.log("testando evento")}}>Click aqui</button>
        </div>
        <div>
            <button onClick={handClick}>click em min</button>
        </div>
        {render(true)}
        {render()}
    </div>
  )
}

export default Event