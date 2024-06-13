import '../../assets/Main.css';
import React,{useContext} from 'react'
import { ThemeContext } from '../../components/ThemeContext';

const Study_Teach = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`} >
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
            <div style={{fontSize:"2rem"}}>
                <div className="text-center py-4 font-weight-bold" style={{fontSize:"4rem"}}>
                    NỘI DUNG CHƯƠNG TRÌNH HỌC
                </div>
                <div style={{marginLeft:"10%"}}>
                    <section className="d-flex flex-wrap justify-content-center align-items-center mt-3">
                        <div className="col-12 col-md-6">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="640"
                                height="124"
                                src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png"
                                className="img-fluid"
                                alt=""
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p className="text-left">
                                        – Đại cương về CNTT
                                        <br />– Cơ sở lập trình
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p>
                                        – Kiến trúc máy tính và Hệ điều hành
                                        <br />– Toán ứng dụng cho Tin học
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
                                className="img-fluid"
                                alt=""
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p>
                                        – Mạng máy tính căn bản
                                        <br />– Cấu trúc dữ liệu và giải thuật
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p>
                                        <span className="font-size-16">
                                            – Ngôn ngữ lập trình Python
                                        </span>
                                        <br />
                                        <span className="font-size-16">
                                            – Luật ANM và đạo đức trong lĩnh vực CNTT
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
                                className="img-fluid"
                                alt=""
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p className="text-left">
                                        – Mạng máy tính nâng cao
                                        <br />– Quản trị hệ thống mạng
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p>
                                        – An ninh mạng
                                        <br />– Điện toán đám mây
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
                                className="img-fluid"
                                alt=""
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p>
                                        – Bảo mật ứng dụng Web
                                        <br />– Kiểm thử An toàn thông tin
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p>
                                        <span className="font-size-16">
                                            – Thâm nhập và phòng thủ
                                        </span>
                                        <br />
                                        <span className="font-size-16">
                                            – Mật mã và An toàn thông tin
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
                                className="img-fluid"
                                alt=""
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p className="text-left">
                                        – Điều tra số
                                        <br />– Phân tích và Đánh giá An toàn thông tin
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p>
                                        – Bảo mật hệ thống thông tin
                                        <br />– Hệ thống giám sát An toàn thông tin
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
                                className="img-fluid"
                                alt=""
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p>
                                        – Phân tích mã độc và kỹ thuật dịch ngược
                                        <br />– Ứng cứu sự cố an ninh mạng
                                    </p>
                                </div>
                                <div className="p-3">
                                    <p>
                                        <span className="font-size-16">– Chuyên đề hãng CN/DN</span>
                                        <br />
                                        <span className="font-size-16">– Đồ án An ninh mạng</span>
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
                                className="img-fluid"
                                alt="rượu vang shop"
                                srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w"
                                sizes="(max-width: 640px) 100vw, 640px"
                            />
                            <div className="d-flex">
                                <div className="p-3">
                                    <p className="text-left">
                                        – Thực tập tốt nghiệp
                                        <br />– Bảo vệ đồ án tốt nghiệp
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
