import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './AnnouncementBackground.css';

const Announcementpage2 = () => {
    const navigate = useNavigate();

  const back = () => {
    navigate('/')}
    return(
    <div className='bg_an'>
      <div className='container1'></div>
        <Button onClick={back}>back</Button>
        <div className='container1'>
        <tr>
          <td>
            <table className='tablestyle'>
                <h1 className='textannouncement'>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 24 (NSC 2022)</h1>
                <h2 className='textannouncement'>รายชื่อโครงการที่ผ่านรับทุนรอบนำเสนอผลงาน ศูนย์ประสานงานภูมิภาค"ภาคใต้"</h2>
                <div className='div1'>
                  <tr>
                    <th>ที่</th>
                    <th>รหัสโครงการ</th>
                    <th>โครงการ</th>
                    <th>หมวดโครงการ</th>
                    <th>ระดับ</th>
                    <th>สถาบัน</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>24p11s0078</td>
                    <td>NFT เกมเพื่อการเรียนรู้</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>24p11s0098</td>
                    <td>สาคู แพลตฟอร์มบริหารจัดการชั้นเรียน</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>24p12s0033</td>
                    <td>การพัฒนาเครื่องช่วยเหลือการใช้งาน WRF-CHEM เพื่อการจาลองการเคลื่อนที่ของอนุภาคฝุ่น PM2.5</td>
                    <td>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>24p13s0079</td>
                    <td>PillTrack: ระบบติดตามการรับประทานยาเม็ดสาหรับผู้สูงอายุ</td>
                    <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>24p13s0116</td>
                    <td>เสียงสู่มือ</td>
                    <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>24p13s0117</td>
                    <td>สายรัดข้อมือเพื่อให้ความช่วยเหลือผู้สูงอายุและผู้พิการ</td>
                    <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>24p14s0066</td>
                    <td>พีคอด</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>24p14s0103</td>
                    <td>GermyJunk: บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นิสิต นักศึกษา</td>
                    <td>มหาวิทยาลัยสงขลานครินทร์</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>24p21s0008</td>
                    <td>โครี่ พื้นฐานเกาหลีใน 4 สัปดาห์</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>24p21s0010</td>
                    <td>ย้อนเวลาศึกษาธรณีกาล</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>24p21s0014</td>
                    <td>Uclass: แอปพลิเคชั่นสำหรับห้องเรียนออนไลน์</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>24p21s0016</td>
                    <td>การทดลองสำหรับนักวิจัยฝึกหัด</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>24p21s0034</td>
                    <td>เกมเพื่อช่วยในการจดจำตารางธาตุ</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>24p21s0068</td>
                    <td>การพัฒนาเว็บแอพเรียนรู้ฟิสิกส์ด้วยตนเองโดยเรียนรู้จากการทดลองเสมือน และประเมินผลด้วย Bayes' theorem</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนหาดใหญ่วิทยาลัย</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>24p21s0072</td>
                    <td>"อีจาล่า" แอปเพื่อการเรียนรู้</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>24p21s0097</td>
                    <td>เครื่องวัดระยะทางตรีโกณมิติ</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนตันหยงมัส</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>24p21s0119</td>
                    <td>การพัฒนาแอปพลิเคชันสาหรับจาแนกชนิดลูกน้ำยุง</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>24p22s0039</td>
                    <td>ระบบตรวจวัดและควบคุมการเกิดวัชพืชด้วยเทคโนโลยี LoRaWAN</td>
                    <td>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียน มอ.วิทยานุสรณ์สุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>24p22s0067</td>
                    <td>การตรวจหาโรคในทุเรียนจากภาพถ่ายทางอากาศ</td>
                    <td>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนศรียาภัย</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>24p22s0071</td>
                    <td>ระบบจัดการพลังงานไฟฟ้าในระดับชุมชน</td>
                    <td>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>24p22s0115</td>
                    <td>โปรแกรมผู้ช่วยชาวสวนปาล์มคำนวณผลผลิตจากสภาพอากาศ</td>
                    <td>โปรแกรมเพื่อบริหารการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิเชียรมาตุ</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>24p23s0048</td>
                    <td>โครงงานหมวกตรวจจับสิ่งกีดขวางบริเวณศีรษะสาหรับผู้พิการทางสายตา</td>
                    <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>24p23s0075</td>
                    <td>ตลับยาอัจฉริยะ</td>
                    <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียน มอ.วิทยานุสรณ์สุราษฎร์ธานี</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>24p23s0087</td>
                    <td>อุปกรณ์บริหารกล้ามเนื้อมืออัจฉริยะ</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>24p23s0109</td>
                    <td>ระบบอุปกรณ์ช่วยรักษาความปลอดภัยสาหรับผู้สูงอายุที่อาศัยอยู่บ้านตามลำพัง</td>
                    <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>24p24s0064</td>
                    <td>ระบบตรวจสอบและติดตามโรคออฟฟิศซินโดรม</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนมอ.วิทยานุสรณ์</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>24p24s0065</td>
                    <td>การตรวจสอบอาการล้าของตาด้วยระบบEyesight beside you</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>24p24s0077</td>
                    <td>การพัฒนาแชทบอทปัญญาประดิษฐ์เพื่อการดูแลสุขภาพจิตสาหรับนักเรียน ภายใต้สถานการณ์การระบาดของโรค Covid-19</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนมอ.วิทยานุสรณ์</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>24p24s0082</td>
                    <td>iSupskin</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>24p24s0085</td>
                    <td>เมื่อวันฉันกักตัว</td>
                    <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิค-19และโรคติดเชื้ออุบัติใหม่</td>
                    <td>นักเรียน</td>
                    <td>โรงเรียนแสงทองวิทยา</td>
                  </tr>
                 </div>
            </table>
          </td>
        </tr>
    </div>
    </div>
    )
};

export default Announcementpage2;