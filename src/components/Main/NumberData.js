import React, { useContext } from 'react'
import '../../assets/Main.css';
import { ThemeContext } from '../../components/ThemeContext';
export default function NumberData() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .dark .dark-text {
                        color: #fff;
                    }
                        .row > * {
                        padding-right: 0px !important;
                    }
                `}
            </style>
            <div>
                <h1 className="text-center pt-5  " style={{ color: '#ffb606', fontWeight: 'bold', fontSize: '4rem' }}>
                    iSPACE VÀ NHỮNG CON SỐ BIẾT NÓI
                </h1>
                <section className="d-flex justify-content-center py-4">
                    <div className="row row-cols-1 row-cols-md-4 g-4" style={{ '--bs-gutter-x': '20rem' }}>
                        <div className="col d-flex flex-column align-items-center">
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon2.png"
                                alt=""
                                className="mb-3"
                                style={{ width: '10rem', height: '10rem' }}
                            />
                            <div className="text-center dark-text">
                                <div className="h1 font-weight-bold">SINH VIÊN CÓ VIỆC LÀM NGAY</div>
                                <div className="display-4 font-weight-bold">100%</div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column align-items-center">
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon1.png"
                                alt=""
                                className="mb-3"
                                style={{ width: '10rem', height: '10rem' }}
                            />
                            <div className="text-center dark-text">
                                <div className="h1 font-weight-bold">SINH VIÊN ĐƯỢC ĐÀO TẠO</div>
                                <div className="display-4 font-weight-bold">15,000</div>
                            </div>
                        </div>

                        <div className="col d-flex flex-column align-items-center">
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon4.png"
                                alt=""
                                className="mb-3"
                                style={{ width: '10rem', height: '10rem' }}
                            />
                            <div className="text-center dark-text">
                                <div className="h1 font-weight-bold">THỰC HÀNH</div>
                                <div className="display-4 font-weight-bold">70%</div>
                            </div>
                        </div>

                        <div className="col d-flex flex-column align-items-center">
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2020/09/course2-icon3.png"
                                alt=""
                                className="mb-3"
                                style={{ width: '10rem', height: '10rem' }}
                            />
                            <div className="text-center dark-text">
                                <div className="h1 font-weight-bold">KINH NGHIỆM ĐÀO TẠO</div>
                                <div className="display-4 font-weight-bold">18 Năm</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
