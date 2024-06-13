import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

export default function About_AWS() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .dark .text-justify {
                    color: #fff;}

                    
                `}
            </style>
            <div className="container pt-5 pb-5" style={{ width: '80%', margin: '0 auto' }}>
                <section className="row align-items-center display-5">
                    <div className="col-md-6 p-4">
                        <h1 className=" font-weight-bold display-5 pb-4" style={{ color: '#f57e25' }}>
                            ĐỐI TƯỢNG HỌC VIÊN
                        </h1>
                        <ul>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức và lấy chứng chỉ.
                            </li>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Những người yêu thích và muốn tìm hiểu về Cloud (AWS)
                            </li>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Người muốn học để nâng cao kiến thức.
                            </li>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing, chủ doanh nghiệp…)
                            </li>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 p-4">
                        <h1 className="font-weight-bold display-5 pb-4" style={{ color: '#f57e25' }}>
                            VÌ SAO NÊN HỌC AWS
                        </h1>
                        <ul>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Là một trong những dịch vụ cloud computing lớn nhất thế giới hiện nay.
                            </li>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm (và không nên làm) để xây dựng một hệ thống tốt trên cloud.
                            </li>
                            <li className="text-justify pb-2">
                                <i className=""></i>
                                Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt.
                            </li>
                            <li style={{ opacity: 0 }} className="pb-2">
                                <i className=""></i>
                            </li>
                            <li style={{ opacity: 0 }} className="pb-2">
                                <i className=""></i>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div  >
    );
}
