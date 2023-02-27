import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage2 = () => {
    const navigate = useNavigate();

  const back = () => {
    navigate('/')}
    return(
    <div className='bg'>
        <Button onClick={back}>back</Button>
        <table style={{ margin: 'auto', tableLayout: 'auto', backgroundColor: '#FFFDFD', opacity: '80%'}}>
        <tr>
          <td style={{ border: '1px solid black', padding: '10px' }}>
            <table style={{ margin: '0', tableLayout: 'auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 24 (NSC 2022)</h1>
                <h2 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>รายชื่อโครงการที่ผ่านรับทุนรอบนำเสนอผลงาน ศูนย์ประสานงานภูมิภาค"ภาคใต้"</h2>
                <div style={{textAlign: 'center', justifyContent: 'center',}}>
                  <tr>
                    <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ที่</th>
                    <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>รหัสโครงการ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โครงการ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>หมวดโครงการ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ระดับ</th>
                    <th style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สถาบัน</th>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>1</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0078</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>NFT เกมเพื่อการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>2</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0098</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สาคู แพลตฟอร์มบริหารจัดการชั้นเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>3</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p12s0033</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาเครื่องช่วยเหลือการใช้งาน WRF-CHEM เพื่อการจาลองการเคลื่อนที่ของอนุภาคฝุ่น PM2.5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>4</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0079</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>PillTrack: ระบบติดตามการรับประทานยาเม็ดสาหรับผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0116</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เสียงสู่มือ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>6</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0117</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สายรัดข้อมือเพื่อให้ความช่วยเหลือผู้สูงอายุและผู้พิการ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>7</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0066</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>พีคอด</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>8</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0103</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>GermyJunk: บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>9</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0008</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โครี่ พื้นฐานเกาหลีใน 4 สัปดาห์</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>10</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0010</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ย้อนเวลาศึกษาธรณีกาล</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>11</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0014</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>Uclass: แอปพลิเคชั่นสำหรับห้องเรียนออนไลน์</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>12</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0016</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การทดลองสำหรับนักวิจัยฝึกหัด</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>13</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0034</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เกมเพื่อช่วยในการจดจำตารางธาตุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>14</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0068</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาเว็บแอพเรียนรู้ฟิสิกส์ด้วยตนเองโดยเรียนรู้จากการทดลองเสมือน และประเมินผลด้วย Bayes' theorem</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนหาดใหญ่วิทยาลัย</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>15</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0072</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>"อีจาล่า" แอปเพื่อการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                 </div>
            </table>
          </td>
        </tr>
      </table>
    </div>
    )
};

export default Announcementpage2;