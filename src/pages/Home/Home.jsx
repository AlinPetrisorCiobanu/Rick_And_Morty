import { useEffect, useState } from 'react'
import "./Home.css"
import { getBaseDatos} from '../../services/apiCalls'
import {useNavigate} from "react-router-dom"


export const Home =()=>{
    const dateBBD = () =>{
        getBaseDatos()  
       .then((res)=>{
            const caracteres = res.data.results
            setCaracteres (caracteres)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        dateBBD()
    },[])

   

    const [caracteres,setCaracteres]=useState([])
    localStorage.setItem("allCaracters",JSON.stringify(caracteres))
    const [inputValue , setInputValue] = useState ("")

    const navigate = useNavigate()
    
    const imprimeTexto =(valueInput)=>{
        setInputValue(valueInput.target.value)
    }

    const SendHandler=()=>{
    const dateCaracters = caracteres.find((e)=>e.name.toLowerCase().includes(inputValue.toLowerCase()))
    if(dateCaracters){
    localStorage.setItem("caracter",JSON.stringify(dateCaracters))
    navigate("/profile")   
    } else{
        navigate("/")
    }
   }

   const transmitir = (ind) =>{
    const dateCaracters = caracteres.find((e)=>e.id===ind)
    console.log(dateCaracters)
    localStorage.setItem("caracter",JSON.stringify(dateCaracters))
    navigate("/profile")
   }

    return(
        <>
        
        <div className="card">
            <button onClick={SendHandler}>
                imprime
            </button>
        </div>
        <input className='inputHome' type='text' name="user" onChange={(element)=>{imprimeTexto(element)}} ></input>
        <div className='total'>
        
        {caracteres.length>0
        ?caracteres.map((individuos)=>{
            return <div className="homeStyle" key={individuos.id} onClick={()=>transmitir(individuos.id)}><h3>{individuos.name}</h3><img src={individuos.image} />
            </div>
            }):
            <div className="homeStyle"><h3>Cargando...</h3>
            <img className='imgCargando' src="../../../img/asdf.webp" alt="cargando" />
            </div> 
            }
        </div>
        </>
        
    )

}