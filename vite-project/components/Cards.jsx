import Card from "./Card"
import { getCharacters } from "../redux/actions"
//hooks
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"



const Cards=()=>{
    //hook que me permite traerme el estado global que esta en  nel reduce
    const characters=useSelector((state)=>state.characters)
    //  hook que me permite hacer dispatch para poder modificar el estado global
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getCharacters())
    },[])
    return(
        <div>
            {characters.map((char)=>{
                return <Card id={char.id} name={char.name} key={char.id}/>
            })}
        </div>
    )
}

export default Cards