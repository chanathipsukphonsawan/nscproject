import Loginbar from '../component/Custom/custom'
import './background.css'
import { useNavigate } from 'react-router-dom';


const Publicpage =()=>{
    const navigate = useNavigate();

  const Announcement = () => {
    navigate('/Announcement1')}
  const Announcement2 = () => {
    navigate('/Announcement2')}
const details = () => {
    navigate('/Details')}
    return(
    <div className='bg'>
    <div  style={{textAlign: 'center', display:'contents', justifyContent: 'center',}}>
        <Loginbar/>
        <table style={{ margin: 'auto',tableLayout:'auto' }}>
            
            <tr>
                <td>
                    <h1></h1>

                    <img src={require("../image/ann.jpg")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                    <a onClick={details} style={{marginLeft:'0%',marginTop:'20%',color:'blue',fontSize:'200%'}} href="#" >  รายละเอียดการสมัคร NSC ครั้งที่24</a>
                    <h1> </h1>
                    <img src={require("../image/ann.jpg")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                    <a onClick={Announcement} style={{marginLeft:'0%',marginTop:'10%',marginBottom:'20%',color:'blue',fontSize:'200%'}} href="#" >ประกาศผลรอบข้อเสนอโครงการ รอบที่1</a>
                    <h1>  </h1>
                    <img src={require("../image/ann.jpg")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                    <a onClick={Announcement2} style={{marginLeft:'0%',marginTop:'20%',color:'blue',fontSize:'200%'}} href="#" >ประกาศผลรอบข้อเสนอโครงการ รอบที่2</a>
                    
                   
                    
                    </td>
               
            </tr>
        </table>
                </div>
                </div>
        
        
    )

}

export default Publicpage;