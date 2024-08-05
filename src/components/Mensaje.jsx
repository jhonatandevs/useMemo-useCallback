import { useMemo } from "react"

const Mensaje = ({texto}) => {
    const mensaje=useMemo(()=>{
       return  getMensaje()
    },[texto])
    function getMensaje(){
        console.log("GETMENSAJE")
        return `${texto}`
    }
  return (
    <div>
      Message works: {mensaje}
    </div>
  )
}

export default Mensaje
