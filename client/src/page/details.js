import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './AnnouncementBackground.css';

const Details =()=>{
    const navigate =useNavigate();

    const back =()=>{
        navigate('/')

    }
    return(
        <div>
            <Button onClick={back}> Back</Button>
            <table style={{ margin: 'auto',tableLayout:'auto' }}>
            
            <tr>
                <td style={{ border: '1px solid black', padding: '10px' }}>
                    <table style={{ margin:'0',tableLayout:'auto'}} >
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>หัวข้อการแข่งขัน </h1>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิตและนักศึกษา</th>
                            <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</th>
                            <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>หมวดการแข่งขัน</th>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>11</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>21</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>12</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>22</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>13</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>23</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>14</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>24</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                        </tr>

                    </table>
                    <table style={{ margin: 'auto',tableLayout:'auto' }}>
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>กำหนดแข่งขัน</h1>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>รับข้อเสนอโครงการ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>16 สิงหาคม - 30 กันยายน 2564 (วันสุดท้ายระบบปิดภายในเวลา 17:00 น.)</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ตรวจผลงานรอบข้อเสนอโครงการ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>4 - 15 ตุลาคม 2564</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ประกาศผลรอบข้อเสนอโครงการ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>18 ตุลาคม 2564</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ส่งมอบผลงานรอบนำเสนอผลงาน</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>31 มกราคม 2565 (ระบบปิดภายในเวลา 17:00 น.)</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ตรวจผลงานรอบนำเสนอผลงาน</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>3 - 14 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ประกาศผลโครงการที่ได้รับทุนสนับสนุนและโครงการผ่านเข้ารอบชิงชนะเลิศ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>17 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>รอบชิงชนะเลิศ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'> มีนาคม 2565</td>
                        </tr>
                    </table>
                    <table style={{ margin: '0',tableLayout:'auto' }}>
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>กำหนดการรับสมัคร</h1>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>กำหนดการส่งรายงานฉบับสมบูรณ์เข้าระบบ
                            GENA http://nsc.siit.tu.ac.th/GENA2/login.php</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ภายในวันที่ 31 มกราคม 2565 ไม่เกิน 17.00 น.</td>
                        </tr>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>กำหนดการนำเสนอผลงานแบบออนไลน์ต่อคณะกรรมการพิจารณาผลงาน</th>
                            <th style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'> </th>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ศูนย์ประสานงานภูมิภาค ภาคใต้</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>วันที่ 9 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>ประกาศรายชื่อโครงการรับทุนรอบนำเสนอผลงานและโครงการที่ผ่านเข้ารอบชิงชนะเลิศ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>วันที่ 17 กุมภาพันธ์ 2565</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>การเเข่งขันรอบชิงชนะเลิศ</td>
                            <td style={{ border: '1px solid black', padding: '10px' }}className='tablecolor'>รอยืนยัน</td>
                        </tr>
                    </table>
                    
                    
                    <h1 style={{ textAlign: 'left',marginTop:'90px'}}>คุณสมบัติผู้สมัคร</h1>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'70px'}}>กำลังศึกษาอยู่ในสถาบันการศึกษาในประเทศไทย</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>ระดับนักเรียน : ประถมศึกษา มัธยมศึกษา อาชีวศึกษา  หรือเทียบเท่า(ปวช.)</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>ระดับนิสิตและนักศึกษา : อาชีวศึกษา หรือเทียบเท่า (ปวส.) และ อุดมศึกษา (ไม่เกินปริญญาตรี)</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>สมาชิก จำนวน 1-3 คน (ชื่อไม่ซ้ำในทีมอื่น) และที่ปรึกษาโครงการ 1 คน สังกัดสถาบันการศึกษาเดียวกัน</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>ส่งผลงานเข้าแข่งขันได้ 1 ผลงานเท่านั้น</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>ผลงานที่เข้าร่วมการแข่งขัน ผ่านการรับรองจากที่ปรึกษาโครงการและหัวหน้าสถาบันการศึกษา</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'10px'}}>หากร่วมการแข่งขัน YSC 2022 แล้ว ไม่สามารถสมัคร  NSC 2022 ได้</h4>
                   
                    


                    <h1 style={{ textAlign:'left',marginTop:'70px'}}>ติดต่อเรา</h1>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>โทรศัพท์ 074 287076</h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>e-mail : wimon@coe.psu.ac.th </h4>
                    <h4 style={{ textAlign:'left',marginTop:'10px',marginLeft:'25px'}}>Facebook: NSC Thailand Southern Region</h4>
                    
                    
                </td>
                
               
            </tr>
        </table>
        </div>
       
    )


}
export default Details