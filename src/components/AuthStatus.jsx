import { useNavigate } from "react-router-dom";
import { useAuth } from "../context"

export const AuthStatus = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSingout = () => {
        auth.singout(()=> navigate('/'))
    }

    if (auth.user === null) {
        return <p>You are not logged in.</p>
    }
    return (<>
    <p>Welcome user : {auth.user}</p>
    <button onClick={handleSingout}> Sing out</button>
    </>
        
    )
}