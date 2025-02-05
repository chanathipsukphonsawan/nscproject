import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './AnnouncementBackground.css';
import { Paper  } from "@mui/material";

const Announcementpage =()=>{
    const navigate = useNavigate();

  const back = () => {
    navigate('/')}
    return(
      
        
        <div className='bg_an'>
          <Button onClick={back} className="BackButton">กลับไปยังหน้าหลัก</Button>
          <div className='container1'>
            
          <Paper elevation={24} sx={{ padding: '20px', marginLeft:'100px', marginTop: '50px', width: '1000px', minHeight: '800px' }} className='bg'> 
              <tr>
                <td>
                  <table className='tablestyle'>
                      <h1 className='textannouncement'>การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 24 (NSC 2022)</h1>
                      <h2 className='textannouncement'>โครงการที่ผ่านการพิจารณารอบข้อเสนอโครงการ ศูนย์ประสานงานภูมิภาค"ภาคใต้"</h2>
                      <div  className='div1'>
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
                          <td>24p11s0052</td>
                          <td>โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่น AOV</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยวลัยลักษณ์</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>24p11s0078</td>
                          <td>NFT เกมเพื่อการเรียนรู้</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>24p11s0098</td>
                          <td>สาคู แพลตฟอร์มบริหารจัดการชั้นเรียน</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>24p11s0127</td>
                          <td>หมอแมวแอปพลิเคชันสาหรับคนรักแมว</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยทักษิณ</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>24p11s0129</td>
                          <td>ไซเออร์</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>24p12s0033</td>
                          <td>การพัฒนาเครื่องช่วยเหลือการใช้งาน WRF-CHEM เพื่อการจาลองการเคลื่อนที่ของอนุภาคฝุ่น PM2.5</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>24p12s0088</td>
                          <td>อากาศดีๆ ในห้องที่เราต้องการ</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยวลัยลักษณ์</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>24p13s0079</td>
                          <td>PillTrack: ระบบติดตามการรับประทานยาเม็ดสาหรับผู้สูงอายุ</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>24p13s0095</td>
                          <td>เกมส่งเสริมทักษะการเรียนรู้สาหรับเด็กนักเรียนที่ล่าช้าด้านการอ่าน</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>24p13s0116</td>
                          <td>เสียงสู่มือ</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>24p13s0117</td>
                          <td>สายรัดข้อมือเพื่อให้ความช่วยเหลือผู้สูงอายุและผู้พิการ</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>24p13s0125</td>
                          <td>เครื่องจ่ายยาสมาร์ท</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยวลัยลักษณ์</td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>24p14s0001</td>
                          <td>ลองดู - ระบบทดลองสินค้าและบริการสาหรับผู้ประกอบการเพื่อการวิจัยตลาดภายใต้สถานการณ์ COVID-19</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>24p14s0066</td>
                          <td>พีคอด</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>24p14s0103</td>
                          <td>GermyJunk: บริการค้นหาและวิเคราะห์จุดรับขยะปนเปื้อนโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>24p14s0104</td>
                          <td>แอปพลิเคชันซื้อขายอาหารหรือขนมแบบนัดรับ</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต</td>
                        </tr>
                        <tr>
                          <td>17</td>
                          <td>24p14s0110</td>
                          <td>ระบบแชทบอทเพื่อส่งเสริมการตลาดออนไลน์สาหรับสินค้าทางการเกษตรและประมง</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>18</td>
                          <td>24p14s0112</td>
                          <td>การพัฒนาโปรแกรมประยุกต์สำหรับการจัดการการบริจาคโลหิต</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นิสิต นักศึกษา</td>
                          <td>มหาวิทยาลัยวลัยลักษณ์</td>
                        </tr>
                        <tr>
                          <td>19</td>
                          <td>24p21s0007</td>
                          <td>โลกของวรรณคดี</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>20</td>
                          <td>24p21s0008</td>
                          <td>โครี่ พื้นฐานเกาหลีใน 4 สัปดาห์</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>21</td>
                          <td>24p21s0010</td>
                          <td>ย้อนเวลาศึกษาธรณีกาล</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>22</td>
                          <td>24p21s0011</td>
                          <td>อี เคอเรนซี</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>23</td>
                          <td>24p21s0014</td>
                          <td>Uclass: แอปพลิเคชั่นสำหรับห้องเรียนออนไลน์</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>24</td>
                          <td>24p21s0016</td>
                          <td>การทดลองสำหรับนักวิจัยฝึกหัด</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>24p21s0019</td>
                          <td>โปรแกรมคำนวณลำดับเลขคณิต</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนตันหยงมัส</td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>24p21s0020</td>
                          <td>ลงทะเบียนยังไงให้ปัง รับสมัครไงให้สุด แจ้งเตือนยังไงให้ว้าว......</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนเมืองสุราษฎร์ธานี</td>
                        </tr>
                        <tr>
                          <td>27</td>
                          <td>24p21s0021</td>
                          <td>เว็บแอปพลิเคชั่นสำหรับส่งงาน</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนเมืองสุราษฎร์ธานี</td>
                        </tr>
                        <tr>
                          <td>28</td>
                          <td>24p21s0024</td>
                          <td>เช็คชื่อนักเรียนอย่างมีสไตล์ส่งถึงไลน์ผู้ปกครอง</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนเมืองสุราษฎร์ธานี</td>
                        </tr>
                        <tr>
                          <td>29</td>
                          <td>24p21s0034</td>
                          <td>เกมเพื่อช่วยในการจดจำตารางธาตุ</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                        </tr>
                        <tr>
                          <td>30</td>
                          <td>24p21s0036</td>
                          <td>เครื่องตากแห้งปลาแดดเดียวอัตโนมัติ</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนอนุบาลสุราษฎร์ธานี</td>
                        </tr>
                        <tr>
                          <td>31</td>
                          <td>24p21s0038</td>
                          <td>แอปพลิเคชั่นสำหรับเรียนรู้ภาษาญี่ปุ่น</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>32</td>
                          <td>24p21s0063</td>
                          <td>สื่อการเรียนรู้ตารางธาตุ</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>33</td>
                          <td>24p21s0068</td>
                          <td>การพัฒนาเว็บแอพเรียนรู้ฟิสิกส์ด้วยตนเองโดยเรียนรู้จากการทดลองเสมือน และประเมินผลด้วย Bayes' theorem</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนหาดใหญ่วิทยาลัย</td>
                        </tr>
                        <tr>
                          <td>34</td>
                          <td>24p21s0069</td>
                          <td>Beepro แอพพลิเคชันสำหรับผู้เลี้ยงผึ้งเพื่อความสะดวกสบายของผู้เลี้ยงผึ้งและเกษตรกร</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนจุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>35</td>
                          <td>24p21s0072</td>
                          <td>"อีจาล่า" แอปเพื่อการเรียนรู้</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>36</td>
                          <td>24p21s0090</td>
                          <td>ปัญญาหลากมิติ</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนแสงทองวิทยา</td>
                        </tr>
                        <tr>
                          <td>37</td>
                          <td>24p21s0091</td>
                          <td>การใช้แชตบอทเพื่อการเรียนรู้</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนแสงทองวิทยา</td>
                        </tr>
                        <tr>
                          <td>38</td>
                          <td>24p21s0097</td>
                          <td>เครื่องวัดระยะทางตรีโกณมิติ</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนตันหยงมัส</td>
                        </tr>
                        <tr>
                          <td>39</td>
                          <td>24p21s0113</td>
                          <td>สื่อการสอนเสริมสร้างการเรียนทักษะทางด้านวิทยาศาสตร์และภาษาด้วยวิดีโอเกม</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>24p21s0119</td>
                          <td>การพัฒนาแอปพลิเคชันสำหรับจำแนกชนิดลูกน้ำยุง</td>
                          <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td>24p22s0039</td>
                          <td>ระบบตรวจวัดและควบคุมการเกิดวัชพืชด้วยเทคโนโลยี LoRaWAN</td>
                          <td>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียน มอ.วิทยานุสรณ์ สุราษฎร์ธานี</td>
                        </tr>
                        <tr>
                          <td>42</td>
                          <td>24p22s0058</td>
                          <td>เครื่องตรวจสอบสภาพดินสำหรับการปลูกทุเรียน</td>
                          <td>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                          <td>นักเรียน</td>
                          <td>วิทยาลัยเทคนิคยะลา</td>
                        </tr>
                        <tr>
                          <td>43</td>
                          <td>24p22s0067</td>
                          <td>การตรวจหาโรคในทุเรียนจากภาพถ่ายทางอากาศ</td>
                          <td>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนศรียาภัย</td>
                        </tr>
                        <tr>
                          <td>44</td>
                          <td>24p22s0071</td>
                          <td>ระบบจัดการพลังงานไฟฟ้าในระดับชุมชน</td>
                          <td>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>45</td>
                          <td>24p22s0115</td>
                          <td>โปรแกรมผู้ช่วยชาวสวนปาล์มคำนวณผลผลิตจากสภาพอากาศ</td>
                          <td>โปรแกรมเพื่อบริหารการการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิเชียรมาตุ</td>
                        </tr>
                        <tr>
                          <td>46</td>
                          <td>24p23s0048</td>
                          <td>โครงงานหมวกตรวจจับสิ่งกีดขวางบริเวณศีรษะสำหรับผู้พิการทางสายตา</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>47</td>
                          <td>24p23s0061</td>
                          <td>แว่นตาอัจฉริยะช่วยเหลือผู้พิการทางสายตาในสถานการณ์แพร่ระบาดโควิด-19</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิเชียรมาตุ</td>
                        </tr>
                        <tr>
                          <td>48</td>
                          <td>24p23s0075</td>
                          <td>ตลับยาอัจฉริยะ</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียน มอ.วิทยานุสรณ์ สุราษฎร์ธานี</td>
                        </tr>
                        <tr>
                          <td>49</td>
                          <td>24p23s0087</td>
                          <td>อุปกรณ์บริหารกล้ามเนื้อมืออัจฉริยะ</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>50</td>
                          <td>24p23s0109</td>
                          <td>ระบบอุปกรณ์ช่วยรักษาความปลอดภัยสำหรับผู้สูงอายุที่อาศัยอยู่บ้านตามลำพัง</td>
                          <td>โปรแกรมเพื่อช่วยคนพิการและผู้สูงอายุ</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย นครศรีธรรมราช</td>
                        </tr>
                        <tr>
                          <td>51</td>
                          <td>24p24s0002</td>
                          <td>โครงงานการพัฒนาระบบการตรวจจับการเว้นระยะห่างทางสังคมด้วยการประมวลผลภาพ</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนสาธิตวิทยาการอิสลาม</td>
                        </tr>
                        <tr>
                          <td>52</td>
                          <td>24p24s0004</td>
                          <td>การพัฒนาระบบการพยากรณ์จำนวนผู้ป่วยและผู้เสียชีวิตจาก COVID-19 ในประเทศไทย</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนสาธิตวิทยาการอิสลาม</td>
                        </tr>
                        <tr>
                          <td>53</td>
                          <td>24p24s0015</td>
                          <td>ต้นแบบระบบควบคุมการฆ่าเชื้อด้วยแสง UV และพ่นน้ำยาฆ่าเชื้อผ่านแอพพลิเคชันบนระบบปฏิบัติการแอนดรอยด์</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>54</td>
                          <td>24p24s0040</td>
                          <td>หุ่นยนต์ขนส่งเวชภัณฑ์ในสถานพยาบาล</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนจุฬาภรณราชวิทยาลัย ตรัง</td>
                        </tr>
                        <tr>
                          <td>55</td>
                          <td>24p24s0062</td>
                          <td>สายคล้องแมสอัจฉริยะในสถานการณ์แพร่ระบาดโควิด-19 สำหรับเด็ก</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิเชียรมาตุ</td>
                        </tr>
                        <tr>
                          <td>56</td>
                          <td>24p24s0064</td>
                          <td>ระบบตรวจสอบและติดตามโรคออฟฟิศซินโดรม</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียน มอ.วิทยานุสรณ์</td>
                        </tr>
                        <tr>
                          <td>57</td>
                          <td>24p24s0065</td>
                          <td>การตรวจสอบอาการล้าของตาด้วยระบบ Eyesight beside you</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>58</td>
                          <td>24p24s0077</td>
                          <td>การพัฒนาแชทบอทปัญญาประดิษฐ์เพื่อการดูแลสุขภาพจิตสำหรับนักเรียน ภายใต้สถานการณ์การระบาดของโรค Covid-19</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียน มอ.วิทยานุสรณ์</td>
                        </tr>
                        <tr>
                          <td>59</td>
                          <td>24p24s0082</td>
                          <td>iSupskin</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                        <tr>
                          <td>60</td>
                          <td>24p24s0085</td>
                          <td>เมื่อวันฉันกักตัว</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนแสงทองวิทยา</td>
                        </tr>
                        <tr>
                          <td>61</td>
                          <td>24p24s0099</td>
                          <td>แอปพลิเคชันสำหรับให้คำปรึกษานักเรียนในการจัดการความเครียด</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนสาธิตวิทยาการอิสลาม มหาวิทยาลัยสงขลานครินทร์</td>
                        </tr>
                        <tr>
                          <td>62</td>
                          <td>24p24s0105</td>
                          <td>บัลลังก์ทอง</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนภูเก็ตวิทยาลัย</td>
                        </tr>
                        <tr>
                          <td>63</td>
                          <td>24p24s0106</td>
                          <td>การพัฒนาระบบปัญญาประดิษฐ์บันทึกข้อมูลผู้ใช้บริการ</td>
                          <td>โปรแกรมเพื่อใช้ภายใต้สถานการณ์โควิด-19 และโรคติดเชื้ออุบัติใหม่</td>
                          <td>นักเรียน</td>
                          <td>โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล</td>
                        </tr>
                      </div>
                  </table>
                </td>
              </tr>
             </Paper> 
          </div>
          </div>
    
    )
  }

  export default Announcementpage;
