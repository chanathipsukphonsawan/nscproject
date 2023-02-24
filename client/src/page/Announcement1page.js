import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage =()=>{
    const navigate = useNavigate();

  const back = () => {
    navigate('/')}
    return(
    <div>
        <Button onClick={back}>back</Button>
        <table style={{ margin: 'auto', tableLayout: 'auto', backgroundColor: '#CAF6F7', opacity: '80%' }}>
        <tr>
          <td style={{ border: '1px solid black', padding: '10px' }}>
            <table style={{ margin: '0', tableLayout: 'auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '20px', marginTop: '30px' }}>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่24 (NSC 2022) </h1>
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
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>2</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p11s0078</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>NFT เกมเพื่อการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>3</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p11s0098</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>สาคู แพลตฟอร์มบริหารจัดการชั้นเรียน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>4</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p11s0127</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>หมอแมวแอปพลิเคชันสาหรับคนรักแมว</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยทักษิณ</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p11s0129</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>ไซเออร์</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>6</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p12s0033</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>การพัฒนาเครื่องช่วยเหลือการใช้งานWRF-CHEM เพื่อการจาลองการเคลื่อนที่ของอนุภาคฝุ่นPM2.5</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>7</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p12s0088</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>อากาศดีๆในห้องที่เราต้องการ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>8</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p13s0079</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>PillTrack: ระบบติดตามการรับประทานยาเม็ดสาหรับผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>9</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p13s0095</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>เกมส่งเสริมทักษะการเรียนรู้สาหรับเด็กนักเรียนที่ล่าช้าด้านการอ่าน</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>10</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p13s0116</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>เสียงสู่มือ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>11</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p13s0117</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>สายรัดข้อมือเพื่อให้ความช่วยเหลือผู้สูงอายุและผู้พิการ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>12</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p13s0125</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>เครื่องจ่ายยาสมาร์ท</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยวลัยลักษณ์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>13</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p14s0001</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>ลองดู- ระบบทดลองสินค้าและบริการสาหรับผู้ประกอบการเพื่อการวิจัยตลาดภายใต้สถานการณ์ COVID-19</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>14</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p14s0066</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>พีคอด</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>15</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p14s0103</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>GermyJunk: บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>16</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p14s0104</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>แอปพลิเคชันซื้อขายอาหารหรือขนมแบบนัดรับ</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid black', padding: '10px' }}>17</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>24p14s0110</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>ระบบแชทบอทเพื่อส่งเสริมการตลาดออนไลน์สาหรับสินค้าทางการเกษตรและประมง</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>นิสิต นักศึกษา</td>
                    <td style={{ border: '1px solid black', padding: '10px' }}>มหาวิทยาลัยสงขลานครินทร์</td>
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
