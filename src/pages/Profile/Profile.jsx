import {useNavigate} from "react-router-dom"

export const Profile = () =>{

    const dateCaracter = JSON.parse(localStorage.getItem("caracter"))
    const allCaracter = JSON.parse(localStorage.getItem("allCaracter"))

    // console.log(allCaracter.id==1)

   const navigate = useNavigate()
    // const Prev=()=>{
    //     dateCaracter.id-1
    //    }
    const SendHandler=()=>{
        navigate("/")
       }
    // const Next=()=>{
    //     dateCaracter.id+1
    //    }

    return(
    <>
        <div className="homeStyle"> 
           <h4>{dateCaracter.id}</h4>
           <h4>{dateCaracter.name}</h4>
           <h4>{dateCaracter.status}</h4>
           <h4>{dateCaracter.species}</h4>
           <h4>{dateCaracter.type}</h4>
           <h4>{dateCaracter.url}</h4>
           <img src={dateCaracter.image}/>
        </div>
        <div className="card">
            {/* <button onClick={Prev}>
                anterior
            </button> */}
            <button onClick={SendHandler}>
                volver
            </button>
            {/* <button onClick={Next}>
                siguente
            </button> */}
        </div>
    </>
    )
}