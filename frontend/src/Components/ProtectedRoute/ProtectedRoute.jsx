import { useContext, useEffect } from "react"
import { dataContext } from "../DataProvider/DataProvider"
import { useNavigate } from "react-router-dom";
import {} from 'react-spinners'
import Loader from "../Loader/Loader";


const ProtectedRoute = ({children,msg,redirect}) => {

    const [{user},dispatch] = useContext(dataContext);
    const navigate = useNavigate()

    useEffect(() => {
        
      if (user === null) {
        navigate("/auth", { state: { msg, redirect } });
      } 
    }, [user, navigate, msg, redirect]);
    
    if (user === undefined) {
      return <Loader/>;
    }
    return children
}

export default ProtectedRoute