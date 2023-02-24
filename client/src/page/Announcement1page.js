import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage =()=>{
    const navigate = useNavigate();

  const back = () => {
    navigate('/')}
    return(
    <div>
        <Button onClick={back}>back</Button>
        <table style={{ margin: 'auto', tableLayout: 'auto' }}>
        <tr>
          <td style={{ border: '1px solid black', padding: '10px' }}>
            <table style={{ margin: '0', tableLayout: 'auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '20px', marginTop: '60px' }}>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่24 (NSC 2022) </h1>
                <h2 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>โครงการที่ผ่านการพิจารณารอบข้อเสนอโครงการศูนย์ประสานงานภูมิภาค"ภาคใต้" </h2>
                <div style={{textAlign: 'center', justifyContent: 'center',}}>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '10px' }}>ที่</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>รหัสโครงการ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>โครงการ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>หมวดโครงการ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>ระดับ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>สถาบัน</th>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>1</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p11s0052</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่นAOV</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิตนักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                </div>
            </table>
          </td>
        </tr>
      </table>
    </div>
    )
  }
export default Announcementpage
