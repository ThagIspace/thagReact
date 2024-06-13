import '../../assets/Main.css';
import React,{useContext} from 'react'
import { ThemeContext } from '../../components/ThemeContext';

const Study_Teach = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
       <style>
                {`
                    .light .text-center {
                        color: #60390D
                    }

                    .dark .text-center {
                        color: #F57E25;
                    }

                    .dark .img-fluid {
                        background-color: #fff;
                    }

                    .dark .d-flex {
                    color: #fff;}
                `}
            </style>
      <div style={{ fontSize: "2rem" }}>
        <div className="text-center py-4 font-weight-bold" style={{ fontSize: "4rem" }}>
          NỘI DUNG CHƯƠNG TRÌNH HỌC
        </div>
        <div style={{ marginLeft: "10%" }}>
          <section className="d-flex flex-wrap justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="124"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png"
                class="attachment-large size-large wp-image-11752"
                alt=""
                className="img-fluid"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3 ">
                  <p className="text-left">
                    –  Đồ họa căn bản
                    <br />- Mỹ thuật đồ họa
                    <br />- Khoa học màu sắc
                  </p>
                </div>
                <div className="p-3">
                  <p>
                    –  Photoshop cơ bản
                    <br />– Trang trí đồ họa
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="125"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png"
                class="attachment-large size-large wp-image-11753"
                alt=""
                className="img-fluid"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3">
                  <p>
                    – Nguyên lý thị giác
                    <br />– Kỹ thuật nhiếp ảnh
                    <br />– Illustrator
                  </p>
                </div>
                <div className="p-3">
                  <p>
                    <span >
                      – Photoshop nâng cao
                    </span>
  
                    <br />
                    <span >
                      – Đồ án 1
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="d-flex flex-wrap justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="125"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png"
                class="attachment-large size-large wp-image-11754"
                alt=""
                className="img-fluid"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3 ">
                  <p className="text-left">
                    – In Design
                    <br />– Kỹ thuật in
                    <br />– Ý tưởng sáng tạo
                  </p>
                </div>
                <div className="p-3">
                  <p>
                    – Digital Marketing
                    <br />– Nghệ thuật chữ
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="124"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png"
                class="attachment-large size-large wp-image-11755"
                alt=""
                className="img-fluid"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3">
                  <p>
                    – Thiết kế bao bì
                    <br />– Thiết kế nhận dạng thương hiệu
                    <br />– Thiết kế giao diện Web
                  </p>
                </div>
                <div className="p-3">
                  <p>
                    <span >
                      – Nguyên lý thiết kế đồ họa
                    </span>
  
                    <br />
                    <span >
                      – Đồ án 2
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="d-flex flex-wrap justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="124"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png"
                class="attachment-large size-large wp-image-11756"
                alt=""
                className="img-fluid"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3 ">
                  <p className="text-left">
                    – Kỹ năng nghề nghiệp
                    <br />– Kỹ thuật quay phim
                    <br />– Xử lý phim – Adobe Premier
                  </p>
                </div>
                <div className="p-3">
                  <p>
                    – Nguyên lý thiết kế nội thất
                    <br />– Autocad 2D
                    <br />– Dựng phối cảnh nội thất 3D – SketchUp
                  </p>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="125"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png"
                class="attachment-large size-large wp-image-11757"
                alt=""
                className="img-fluid"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3">
                  <p>
                    - Đồ án 3
                    <br />- Thực tập tốt nghiệp
                  </p>
                </div>
                <div className="p-3">
                  <p>
                    <span >– Chuyên đề hãng CN/DN</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="d-flex flex-wrap justify-content-center align-items-center mt-3">
            <div className="col-12 col-md-6">
              <img
                loading="lazy"
                decoding="async"
                width="640"
                height="125"
                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png"
                class="img-fluid"
                alt="rượu vang shop"
                srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="d-flex">
                <div className="p-3 ">
                  <p className="text-left">
                    – Bảo vệ đồ án tốt nghiệp
                  </p>
                </div>
                <div className="p-3"></div>
              </div>
            </div>
  
            <div className="col-12 col-md-6"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Study_Teach;
