import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';
export default function Subjects() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <style>
        {`
            .col-12.col-md-6.col-lg-4.mb-4:hover .card {
              transform: scale(1.05);
              transition: transform 0.3s;
              background-color: #F3F4F6; 
            }
            
        `}
      </style>
      <div className={`container py-5 `} style={{ fontSize: "2.0rem" }}>
        <div >
          <div className="text-center ">
            <h1 className="text-warning font-weight-bold" style={{ fontSize: "4.0rem" }}>
              CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG
            </h1>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 col-lg-4 mb-4"  >
              <a href="/anm" className="card text-center h-100 shadow-sm" style={{ textDecoration: "none" }}>
                <div className="card-body">
                  <div className="p-4  rounded-lg">
                    <img src='https://ispace.edu.vn/wp-content/uploads/2021/03/ANM_3.png' alt="An Ninh Mạng" />
                  </div>
                  <div className="mt-4 font-weight-bold text-lg" style={{ color: "blue" }}>
                    AN NINH MẠNG
                  </div>
                  <div className="text-warning font-weight-semibold mt-3">
                    Đăng ký
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a href="/ptpm" className="card text-center h-100 shadow-sm" style={{ textDecoration: "none" }}>
                <div className="card-body">
                  <div className="p-4 rounded-lg">
                    <img src='https://ispace.edu.vn/wp-content/uploads/2021/03/PTPM_3.png' alt="Phát Triển Phần Mềm" />
                  </div>
                  <div className="mt-4 font-weight-bold text-lg" style={{ color: "blue" }}>
                    PHÁT TRIỂN PHẦN MỀM
                  </div>
                  <div className="text-warning font-weight-semibold mt-3">
                    Đăng ký
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a href="/tkdh" className="card text-center h-100 shadow-sm" style={{ textDecoration: "none" }}>
                <div className="card-body">
                  <div className="p-4 bg-light rounded-lg">
                    <img src='https://ispace.edu.vn/wp-content/uploads/2021/03/TKDH_3.png' alt="Thiết Kế Đồ Họa" />
                  </div>
                  <div className="mt-4 font-weight-bold text-lg" style={{ color: "blue" }}>
                    THIẾT KẾ ĐỒ HỌA
                  </div>
                  <div className="text-warning font-weight-semibold mt-3">
                    Đăng ký
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a href="/ceh" className="card text-center h-100 shadow-sm" style={{ textDecoration: "none" }}>
                <div className="card-body">
                  <div className="p-4 bg-light rounded-lg">
                    <img src='https://ispace.edu.vn/wp-content/uploads/2024/02/1-1.png' alt="Thiết Kế Đồ Họa" />
                  </div>
                  <div className="mt-4 font-weight-bold text-lg" style={{ color: "blue" }}>
                    Certified Ethical Hacker (CEH)
                  </div>
                  <div className="text-warning font-weight-semibold mt-3">
                    Đăng ký
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <a href="https://www.youtube.com/watch?v=s2B8P-ahBrU" className="card text-center h-100 shadow-sm" style={{ textDecoration: "none" }}>
                <div className="card-body">
                  <div className="p-4 bg-light rounded-lg">
                    <img src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/441579487_345816728247511_7159509855012654916_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7wfgFpHCPP4Q7kNvgFrNTtK&_nc_ht=scontent.fsgn5-3.fna&oh=03_Q7cD1QFgBEDG-w3Ul-iVlwlVALRJOVzHFeTImM3MrlpTJNOqpg&oe=668649A4' alt="Thiết Kế Đồ Họa" />
                  </div>
                  <div className="mt-4 font-weight-bold text-lg" style={{ color: "blue" }}>
                    Phong Tuyệt Kỹ
                  </div>
                  <div className="text-warning font-weight-semibold mt-3">
                    Đăng ký
                  </div>
                </div>
              </a>
            </div><div className="col-12 col-md-6 col-lg-4 mb-4">
              <a href="/aws" className="card text-center h-100 shadow-sm" style={{ textDecoration: "none" }}>
                <div className="card-body">
                  <div className="p-4 bg-light rounded-lg">
                    <img src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/436746150_430043166559608_86564102661934124_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a8e8XzzdrIYQ7kNvgFN74tZ&_nc_ht=scontent.fsgn5-5.fna&oh=03_Q7cD1QGjlyZE66XZt2rx8c12oCAXXPL5f6WeC--M1GWe10h7MQ&oe=66866152' alt="Thiết Kế Đồ Họa" />
                  </div>
                  <div className="mt-4 font-weight-bold text-lg" style={{ color: "blue" }}>
                    AWS Cloud Foundation
                  </div>
                  <div className="text-warning font-weight-semibold mt-3">
                    Đăng ký
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
