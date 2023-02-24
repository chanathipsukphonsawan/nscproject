import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage =()=>{
    const navigate = useNavigate();

  const back = () => {
    navigate('/')}
    return(
    <div>
        <Button onClick={back}>back</Button>
        <table style={{ margin: 'auto', tableLayout: 'auto', backgroundColor: '#FFFDFD', opacity: '80%'}}>
        <tr>
          <td style={{ border: '1px solid black', padding: '10px' }}>
            <table style={{ margin: '0', tableLayout: 'auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่24 (NSC 2022) </h1>
                <h2 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>โครงการที่ผ่านการพิจารณารอบข้อเสนอโครงการศูนย์ประสานงานภูมิภาค"ภาคใต้" </h2>
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
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่นAOV</td>
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
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>การพัฒนาเครื่องช่วยเหลือการใช้งานWRF-CHEM เพื่อการจาลองการเคลื่อนที่ของอนุภาคฝุ่นPM2.5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>7</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p12s0088</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>อากาศดีๆในห้องที่เราต้องการ</td>
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
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ลองดู- ระบบทดลองสินค้าและบริการสาหรับผู้ประกอบการเพื่อการวิจัยตลาดภายใต้สถานการณ์ COVID-19</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>14</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0066</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>พีคอด</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>15</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0103</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>GermyJunk: บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>16</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0104</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>แอปพลิเคชันซื้อขายอาหารหรือขนมแบบนัดรับ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>17</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>24p14s0110</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>ระบบแชทบอทเพื่อส่งเสริมการตลาดออนไลน์สาหรับสินค้าทางการเกษตรและประมง</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }} className='tablecolor'>มหาวิทยาลัยสงขลานครินทร์</td>
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
