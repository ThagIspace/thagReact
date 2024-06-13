import React,{useContext} from 'react'
import '../../assets/Main.css';
import { ThemeContext } from '../../components/ThemeContext';

const About_TKDH = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div  className={`${theme}`}>
      <div className="text-center p-5" style={{ width: "80%", margin: "0 auto" }}>
        <h1>
          <span className="text-danger font-weight-bold mb-5">
            Chương trình được xây dựng dựa trên chương trình học chuẩn quốc tế
            của các hãng nổi tiếng về công nghệ đồ họa như: Adobe, Autodesk,…
            Sinh viên được trực tiếp làm ra các ấn phẩm đồ họa theo từng giai
            đoạn năng lực chuyên môn.
          </span>
        </h1>
      </div>
      <section className="w-100">
        <img className="img-fluid d-block" src="https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA.jpg" alt=""  />
      </section>
    </div>
  );
};

export default About_TKDH;
