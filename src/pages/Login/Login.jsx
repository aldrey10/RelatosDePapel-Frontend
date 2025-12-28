import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login ({  }) {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(
            () => {
                navigate("/catalog");
            }, 5000
        )
    }, []);

    return (
        <div>hola que tal</div>
    )
    
}
