import Loginbar from '../component/Custom/custom'
import './background.css'
import { useNavigate } from 'react-router-dom';
import { Paper  } from "@mui/material";


const Publicpage =()=>{
    const navigate = useNavigate();

  const Announcement = () => {
    navigate('/Announcement1')}
  const Announcement2 = () => {
    navigate('/Announcement2')}
const details = () => {
    navigate('/Details')}
    return(
    <div style={{backgroundColor:'#88F3E4 '}}>
    <div className='container1'>
    <div  style={{textAlign:'left', display:'contents', justifyContent: 'center',}} className='div1'>
        <Loginbar/>
        <Paper elevation={24} sx={{ padding: '20px', marginLeft:'80px', marginTop: '50px', width: '1300px', minHeight: '800px' }} className='bg'>
        

                    <h1 style={{fontSize: 30,marginTop:'10%',color:'blue'}}>NSC - Southern Thailand ศูนย์ประสานงานโครงการ NSC ภาคใต้ ที่มาและความสําคัญ</h1>
    
                        <p>
                            การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยหรือ NSC (National Software Contest) 
                        </p>
                        <p>เป็นการจัดประกวดโครงการพัฒนาโปรแกรมสําหรับนักเรียน, นักศึกษา ในประเทศไทย โดยมีการคัดเลือกระดับภูมิภาค และการแข่งขันรอบสุดท้ายในระดับประเทศปี 2022 จัดเป็นครั้งที่ 24</p>
                        <p>
                            ในระดับภูมิภาค ภาคใต้ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ เป็นศูนย์ประสานภาคใต้ที่จัดการคัดเลือกโครงการและจัดการแข่งขันในระดับภูมิภาคภาคใต้ (รอบ 1 และรอบ 2) เพื่อคัดเลือกโครงการที่ผ่านได้รับทุนสนับสนุน และคัดเลือก และส่งโครงการตัวแทนระดับภาคใต้ไปแข่งขันในระดับชิงชนะเลิศระดับประเทศ (รอบ 3)
                        </p>
                        
                    
                   

                    <img src={require("../image/ann.png")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                        <a onClick={details} href="#" className='announcement-button'  >  รายละเอียดการสมัคร NSC ครั้งที่ 24</a>
                    <h1> </h1>
                    <img src={require("../image/ann.png")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                        <a onClick={Announcement} href="#" className='announcement-button' >ประกาศผลรอบข้อเสนอโครงการ รอบที่ 1</a>
                    <h1>  </h1>
                    <img src={require("../image/ann.png")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                        <a onClick={Announcement2} href="#" className='announcement-button' >ประกาศผลรอบข้อเสนอโครงการ รอบที่ 2</a>
        
                
        </Paper>
        </div>
                </div>
                </div>
        
        
    )

}

export default Publicpage;