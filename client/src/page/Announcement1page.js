import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage =()=>{
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
                <h2 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>โครงการที่ผ่านการพิจารณารอบข้อเสนอโครงการ ศูนย์ประสานงานภูมิภาค"ภาคใต้"</h2>
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
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0052</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่น AOV</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>2</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0078</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>NFT เกมเพื่อการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>3</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0098</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สาคู แพลตฟอร์มบริหารจัดการชั้นเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>4</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0127</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>หมอแมวแอปพลิเคชันสาหรับคนรักแมว</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยทักษิณ</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p11s0129</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ไซเออร์</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>6</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p12s0033</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาเครื่องช่วยเหลือการใช้งาน WRF-CHEM เพื่อการจาลองการเคลื่อนที่ของอนุภาคฝุ่น PM2.5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>7</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p12s0088</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>อากาศดีๆ ในห้องที่เราต้องการ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>8</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0079</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>PillTrack: ระบบติดตามการรับประทานยาเม็ดสาหรับผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>9</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0095</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เกมส่งเสริมทักษะการเรียนรู้สาหรับเด็กนักเรียนที่ล่าช้าด้านการอ่าน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>10</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0116</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เสียงสู่มือ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>11</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0117</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สายรัดข้อมือเพื่อให้ความช่วยเหลือผู้สูงอายุและผู้พิการ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>12</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p13s0125</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เครื่องจ่ายยาสมาร์ท</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>13</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0001</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ลองดู - ระบบทดลองสินค้าและบริการสาหรับผู้ประกอบการเพื่อการวิจัยตลาดภายใต้สถานการณ์ COVID-19</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>14</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0066</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>พีคอด</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>15</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0103</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>GermyJunk: บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>16</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0104</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>แอปพลิเคชันซื้อขายอาหารหรือขนมแบบนัดรับ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>17</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0110</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ระบบแชทบอทเพื่อส่งเสริมการตลาดออนไลน์สาหรับสินค้าทางการเกษตรและประมง</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>18</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0112</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาโปรแกรมประยุกต์สำหรับการจัดการการบริจาคโลหิต</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>19</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0007</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โลกของวรรณคดี</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>20</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0008</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โครี่ พื้นฐานเกาหลีใน 4 สัปดาห์</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>21</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0010</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ย้อนเวลาศึกษาธรณีกาล</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>22</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0011</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>อี เคอเรนซี</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>23</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0014</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>Uclass: แอปพลิเคชั่นสำหรับห้องเรียนออนไลน์</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0016</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การทดลองสำหรับนักวิจัยฝึกหัด</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>25</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0019</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมคำนวณลำดับเลขคณิต</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนตันหยงมัส</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>26</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0020</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ลงทะเบียนยังไงให้ปัง รับสมัครไงให้สุด แจ้งเตือนยังไงให้ว้าว......</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนเมืองสุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>27</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0021</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เว็บแอปพลิเคชั่นสำหรับส่งงาน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนเมืองสุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>28</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0024</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เช็คชื่อนักเรียนอย่างมีสไตล์ส่งถึงไลน์ผู้ปกครอง</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนเมืองสุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>29</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0034</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เกมเพื่อช่วยในการจดจำตารางธาตุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>30</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0036</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เครื่องตากแห้งปลาแดดเดียวอัตโนมัติ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนอนุบาลสุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>31</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0038</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>แอปพลิเคชั่นสำหรับเรียนรู้ภาษาญี่ปุ่น</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>32</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0063</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สื่อการเรียนรู้ตารางธาตุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>33</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0068</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาเว็บแอพเรียนรู้ฟิสิกส์ด้วยตนเองโดยเรียนรู้จากการทดลองเสมือน และประเมินผลด้วย Bayes' theorem</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนหาดใหญ่วิทยาลัย</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>34</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0069</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>Beepro แอพพลิเคชันสำหรับผู้เลี้ยงผึ้งเพื่อความสะดวกสบายของผู้เลี้ยงผึ้งและเกษตรกร</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนจุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>35</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0072</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>"อีจาล่า" แอปเพื่อการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>36</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0090</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ปัญญาหลากมิติ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนแสงทองวิทยา</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>37</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0091</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การใช้แชตบอทเพื่อการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนแสงทองวิทยา</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>38</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0097</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เครื่องวัดระยะทางตรีโกณมิติ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนตันหยงมัส</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>39</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0113</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>สื่อการสอนเสริมสร้างการเรียนทักษะทางด้านวิทยาศาสตร์และภาษาด้วยวิดีโอเกม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>40</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p21s0119</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาแอปพลิเคชันสำหรับจำแนกชนิดลูกน้ำยุง</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>41</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p22s0039</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ระบบตรวจวัดและควบคุมการเกิดวัชพืชด้วยเทคโนโลยี LoRaWAN</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียน มอ.วิทยานุสรณ์ สุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>42</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p22s0058</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>เครื่องตรวจสอบสภาพดินสำหรับการปลูกทุเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>วิทยาลัยเทคนิคยะลา</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>43</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p22s0067</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การตรวจหาโรคในทุเรียนจากภาพถ่ายทางอากาศ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนศรียาภัย</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>44</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p22s0071</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ระบบจัดการพลังงานไฟฟ้าในระดับชุมชน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>45</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p22s0115</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมผู้ช่วยชาวสวนปาล์มคำนวณผลผลิตจากสภาพอากาศ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นักเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โรงเรียนวิเชียรมาตุ</td>
                  </tr>
                </div>
            </table>
          </td>
        </tr>
      </table>
    </div>
    )
  }

  export default Announcementpage;
