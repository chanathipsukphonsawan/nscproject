import Loginbar from "../Custom/custom";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Home = () =>{
    const navigate = useNavigate();

  const next = () => {
    navigate('/certificate')}
    return (
        <div className="bg">
            <Loginbar/>
            <Button onClick={next}> next</Button>
        </div>
    )
}

export default Home;