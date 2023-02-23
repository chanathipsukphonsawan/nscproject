import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage =()=>{
    const navigate = useNavigate();

  const back = () => {
    navigate('/publicpage')}
    return(
    <div>
        <Button onClick={back}>back</Button>
    </div>
    )
  }
export default Announcementpage
