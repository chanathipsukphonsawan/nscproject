import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Announcementpage2 =()=>{
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
                 </div>
            </table>
          </td>
        </tr>
      </table>
    </div>
    )
};

export default Announcementpage2