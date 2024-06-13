import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

export default function About_CEH() {
    const { theme } = useContext(ThemeContext);

    return (
        <div  className={`${theme}`}> 
        <style>
                {`
                    .dark ul li {
                    color: #fff;}

                    
                `}
            </style>
            <section className="container pt-5 pb-5" style={{ width: '80%', margin: '0 auto' }}>
                <h1 className="display-4 text-center pb-5" style={{ color: '#f57e25' }}>ĐỐI TƯỢNG HỌC VIÊN</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="widget-wrap populated">
                            <div className="widget widget-text-editor">
                                <ul className=" display-6">
                                    <li>Nhân viên và học viên bảo mật mạng.</li>
                                    <li>Chuyên viên công nghệ thông tin.</li>
                                    <li>Chuyên viên quản trị hệ thống mạng + máy chủ.</li>
                                    <li>Người quản trị Website + Forum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="widget-wrap populated">
                            <div className="widget widget-text-editor">
                                <ul  className=" display-6">
                                    <li>Quản lý các doanh nghiệp, nhân viên kinh doanh, quản lý tài chính có liên quan đến CNTT</li>
                                    <li>Các đối tượng yêu thích công việc về bảo mật, an ninh mạng.</li>
                                    <li>Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pt-5 pb-5" style={{ width: '80%', margin: '0 auto' }}>
                <h1 className="display-4 text-center pb-5" style={{ color: '#f57e25' }}>VÌ SAO BẠN NÊN HỌC CEH?</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="widget-wrap populated">
                            <div className="widget widget-text-editor">
                                <ul className=" display-6" >
                                    <li>CEH là chứng chỉ bảo mật thông tin hàng đầu thế giới, được công nhận rộng rãi và có giá trị cao trên thị trường.</li>
                                    <li>Giúp bạn hiểu rõ về các kỹ thuật tấn công và phòng thủ mạng, trang bị cho bạn các kiến thức, kỹ năng cần thiết để bảo vệ mạng của tổ chức, doanh nghiệp.</li>
                                    <li>Chứng chỉ CEH được các tổ chức uy tín trên thế giới, như DoD 8570, ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng cao cơ hội tìm kiếm việc làm, thăng tiến trong sự nghiệp.</li>
                                    <li>Giúp bạn có thể phát triển mạng lưới quan hệ và kết nối với các chuyên gia bảo mật thông tin khác trên toàn thế giới.</li>
                                    <li>Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực bảo mật thông tin, từ đó giúp bạn trở thành một chuyên gia bảo mật thông tin hàng đầu.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
