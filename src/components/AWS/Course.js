import React, { useContext } from 'react'
import { ThemeContext } from '../../components/ThemeContext';

export default function Course() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <div className="py-4">
                <h1
                    className="display-3 font-weight-bold text-center pb-4"
                    style={{ color: "#f57e25" }}
                >
                    NỘI DUNG CHƯƠNG TRÌNH HỌC
                    <div className="mx-auto" style={{ width: '80%'}}>
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-scaled.jpg"
                            className="img-fluid"
                        />
                    </div>
                </h1>
            </div>
        </div>
    );
}
