import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

export default function Advantage() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <div className="pb-5 pt-5">
                <div className="container">
                    <h1 className="h2 font-weight-bold pb-4 text-center display-5" style={{ color: "#f57e25" }}>
                        LỢI THẾ KHI HỌC CEH TẠI iSPACE CENTER
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-12 p-0">
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2-768x290.jpg"
                                className="img-fluid w-100"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 p-0 " style={{}}>
                            <img
                                src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-768x285.jpg"
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
