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
        <table style={{ margin: 'auto',tableLayout:'auto' }} className='container1'>
            
            <tr>
                <td>
                    
                    <tr style={{fontSize: 20, textAlign: 'left',marginTop:'10%'}}>

                    <h1 style={{fontSize: 30,marginTop:'10%'}}>NSC - Southern Thailand ศูนย์ประสานงานโครงการ NSC ภาคใต้ ที่มาและความสําคัญ</h1>
    
                        <p>
                            การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยหรือ NSC (National Software Contest) เป็นการจัดประกวดโครงการพัฒนาโปรแกรมสําหรับนักเรียน, นักศึกษา ในประเทศไทย โดยมีการคัดเลือกระดับภูมิภาค และการแข่งขันรอบสุดท้ายในระดับประเทศปี 2022 จัดเป็นครั้งที่ 24
                        </p>
                        <p>
                            ในระดับภูมิภาค ภาคใต้ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ เป็นศูนย์ประสานภาคใต้ที่จัดการคัดเลือกโครงการและจัดการแข่งขันในระดับภูมิภาคภาคใต้ (รอบ 1 และรอบ 2) เพื่อคัดเลือกโครงการที่ผ่านได้รับทุนสนับสนุน และคัดเลือก และส่งโครงการตัวแทนระดับภาคใต้ไปแข่งขันในระดับชิงชนะเลิศระดับประเทศ (รอบ 3)
                        </p>
                        <p>
                            ในเขตภาคใต้ แต่ละปีที่ผ่านมามีโครงการส่งเข้าร่วมทั้งระดับนักเรียน และนักศึกษาประมาณกว่าสองร้อยโครงการ และผ่านรอบ 1 ประมาณ 100 กว่าโครงการ ซึ่งจะเข้าร่วมแข่งขันในรอบ 2 (ระดับภูมิภาค) โดยนําโครงการมานําเสนอให้แก่กรรมการ และตัดสินการแข่งขันรอบ 2 ที่ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ ม.อ. ทุกโครงการที่เข้าร่วมแข่งขันต้องเข้าไปลงทะเบียนที่เว็บของส่วนกลาง (https://nsc.siit.tu.ac.th/GENA/login.php) และมีรหัสโครงการเป็นบัญชีผู้ใช้และมีการส่งงานของแต่ละรอบที่เว็บส่วนกลางทั้งหมด
                        </p>
                    </tr>

                    <img src={require("../image/ann.png")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                        <a onClick={details} href="#" className='announcement-button' >  รายละเอียดการสมัคร NSC ครั้งที่ 24</a>
                    <h1> </h1>
                    <img src={require("../image/ann.png")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                        <a onClick={Announcement} href="#" className='announcement-button' >ประกาศผลรอบข้อเสนอโครงการ รอบที่ 1</a>
                    <h1>  </h1>
                    <img src={require("../image/ann.png")} style={{width:'5%',marginRight:'3%',marginTop:'3%'}}/>
                        <a onClick={Announcement2} href="#" className='announcement-button' >ประกาศผลรอบข้อเสนอโครงการ รอบที่ 2</a>
                    
                   
                    
                </td>
               
            </tr>
        </table>
                </div>
                </div>
        
        
    )

}

export default Publicpage;