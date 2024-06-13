import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

export default function Advantage() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`}>
            <div className="pb-5 pt-5">
                <div className="container">
                    <h1 className="font-weight-bold pb-4 text-center display-3" style={{ color: "#f57e25" }}>
                        LỢI THẾ KHI HỌC AWS CLOUD FOUNDATION TẠI iSPACE
                    </h1>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12 p-0">
                                <img
                                    src="https://ispace.edu.vn/wp-content/uploads/2023/09/AWS-2048x618.jpg"
                                    className="img-fluid w-100"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 p-0">
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-65-2048x863.jpg"
                                className="img-fluid w-100"
                                alt="loi-the-khi-hoc-CEH-tai-iSPACE"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
