import React,{useContext} from 'react'
import { ThemeContext } from '../../components/ThemeContext';
const Study_Path = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .light .text-center {
                        color: #6A3B01
                    }

                    .dark .text-center {
                        color: #F57E25;
                    }

                    .dark .mode .img-fluid {
                        background-color: #fff;
                    }
                `}
            </style>
            <div className="text-center py-4 font-weight-bold" style={{fontSize:'6rem'}}>
                LỘ TRÌNH HỌC
            </div>
            <section className="d-flex flex-wrap justify-content-center mode">
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK1.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK2.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK3.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK4.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK5.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK6.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
                <div className="d-flex justify-content-center mx-5 my-3">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
            </section>
            <section className="mx-auto pb-5 mode" style={{ maxWidth: "50%" }}>
                <div className="container px-4">
                    <div className="text-center">
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Study_Path;
