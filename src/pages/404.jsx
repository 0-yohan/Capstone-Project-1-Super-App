import { useNavigate } from "react-router-dom";


export default function NotFound() {
  const navigate = useNavigate()
  return (
    <>
        <h1>404</h1>
        <h2>Page not NotFound</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}
