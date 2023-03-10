import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './AnnouncementBackground.css';
import { Paper  } from "@mui/material";

const Details =()=>{
    const navigate =useNavigate();

    const back =()=>{
        navigate('/')

    }
    return(
        <div className='bg_an'>
            <Button onClick={back} className="BackButton"> กลับไปสู่หน้าหลัก</Button>
            <div className='container1'>
            
            <Paper elevation={24} sx={{ padding: '20px', marginLeft:'-40px', marginTop: '50px', width: '1000px', minHeight: '800px' }} className='bg'>
            <div className='div1'>
            <h1>รายละเอียดการสมัครการแข่งขัน NSC ครั้งที่ 24</h1>
            
                
                    <table style={{ margin:'0',tableLayout:'auto'}} >
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>หัวข้อการแข่งขัน </h1>
                        <tr>
                            <th >นิสิตและนักศึกษา</th>
                            <th >นักเรียน</th>
                            <th >หมวดการแข่งขัน</th>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>21</td>
                            <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>22</td>
                            <td>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศ และสิ่งแวดล้อม</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>23</td>
                            <td>โปรแกรมเพื่อช่วยคนพิการ และผู้สูงอายุ</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>24</td>
                            <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19 และโรคติดเชื้ออุบัติใหม่</td>
                        </tr>

                    </table>
                    <table style={{ margin: 'auto',tableLayout:'auto' }}>
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>กำหนดแข่งขัน</h1>
                        <tr>
                            <td>รับข้อเสนอโครงการ</td>
                            <td>16 สิงหาคม - 30 กันยายน 2564 (วันสุดท้ายระบบปิดภายในเวลา 17:00 น.)</td>
                        </tr>
                        <tr>
                            <td>ตรวจผลงานรอบข้อเสนอโครงการ</td>
                            <td>4 - 15 ตุลาคม 2564</td>
                        </tr>
                        <tr>
                            <td >ประกาศผลรอบข้อเสนอโครงการ</td>
                            <td>18 ตุลาคม 2564</td>
                        </tr>
                        <tr>
                            <td >ส่งมอบผลงานรอบนำเสนอผลงาน</td>
                            <td >31 มกราคม 2565 (ระบบปิดภายในเวลา 17:00 น.)</td>
                        </tr>
                        <tr>
                            <td >ตรวจผลงานรอบนำเสนอผลงาน</td>
                            <td>3 - 14 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td>ประกาศผลโครงการที่ได้รับทุนสนับสนุนและโครงการผ่านเข้ารอบชิงชนะเลิศ</td>
                            <td>17 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td>รอบชิงชนะเลิศ</td>
                            <td> มีนาคม 2565</td>
                        </tr>
                    </table>
                    <table style={{ margin: '0',tableLayout:'auto' }}>
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>กำหนดการรับสมัคร</h1>
                        <tr>
                            <td>กำหนดการส่งรายงานฉบับสมบูรณ์เข้าระบบ
                            GENA <a href="http://nsc.siit.tu.ac.th/GENA2/login.php">http://nsc.siit.tu.ac.th/GENA2/login.php</a></td>
                            <td>ภายในวันที่ 31 มกราคม 2565 ไม่เกิน 17.00 น.</td>
                        </tr>
                        <tr>
                            <th>กำหนดการนำเสนอผลงานแบบออนไลน์ต่อคณะกรรมการพิจารณาผลงาน</th>
                            <th> </th>
                        </tr>
                        <tr>
                            <td >ศูนย์ประสานงานภูมิภาค ภาคใต้</td>
                            <td>วันที่ 9 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td >ประกาศรายชื่อโครงการรับทุนรอบนำเสนอผลงาน และโครงการที่ผ่านเข้ารอบชิงชนะเลิศ</td>
                            <td>วันที่ 17 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td>การเเข่งขันรอบชิงชนะเลิศ</td>
                            <td>รอยืนยัน</td>
                        </tr>
                    </table>
                    
                    
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>คุณสมบัติผู้สมัคร</h1>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>กำลังศึกษาอยู่ในสถาบันการศึกษาในประเทศไทย</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>ระดับนักเรียน : ประถมศึกษา มัธยมศึกษา อาชีวศึกษา  หรือเทียบเท่า(ปวช.)</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>ระดับนิสิตและนักศึกษา : อาชีวศึกษา หรือเทียบเท่า (ปวส.) และอุดมศึกษา (ไม่เกินปริญญาตรี)</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>สมาชิก จำนวน 1-3 คน (ชื่อไม่ซ้ำในทีมอื่น) และที่ปรึกษาโครงการ 1 คน สังกัดสถาบันการศึกษาเดียวกัน</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>ส่งผลงานเข้าแข่งขันได้ 1 ผลงานเท่านั้น</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>ผลงานที่เข้าร่วมการแข่งขัน ผ่านการรับรองจากที่ปรึกษาโครงการ และหัวหน้าสถาบันการศึกษา</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>หากร่วมการแข่งขัน YSC 2022 แล้วจะไม่สามารถสมัครการแข่งขัน NSC 2022 ได้</h4>
                   
                    


                    <h1 style={{ textAlign:'left',marginTop:'70px'}}>ติดต่อเรา</h1>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}> <a href="https://web.facebook.com/ENGINEERINGPSU">คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์</a>  </h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>โทรศัพท์: 074-287076</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>e-mail : wimon@coe.psu.ac.th </h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}> Facebook: <a href="https://web.facebook.com/nsc.th">NSC Thailand Southern Region</a> </h4>
                    
                    
            
                
               
                    </div>
        </Paper>
        
        </div>
        </div>
        
       
    )


}
export default Details