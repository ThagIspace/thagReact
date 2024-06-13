import React,{useContext} from 'react'
import img1 from '../../assets/img/trgispace.png'
import { ThemeContext } from '../../components/ThemeContext';

export default function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .dark .about-content{
                        color: #fff;
                    }
                `}
            </style>
            <div className={`container-fluid py-5 `}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={img1} alt="" />
                        </div>
                        <div className="col-lg-7" style={{ fontSize: "2.0rem" }}>
                            <div className="text-left mb-4" >
                                <h1 style={{ color: "#FFB606", textAlign: "center", fontSize: "4.0rem" }} >TỔNG QUAN TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE</h1>
                            </div>
                            <div className='about-content'>
                                <p >
                                    Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.
                                </p>
                                <p style={{ margin: "40px 0" }}>
                                    Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.
                                </p>
                                <p>
                                    Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
