import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/Regisform.css';
import { ThemeContext } from '../components/ThemeContext';
import { gapi } from "gapi-script";

const CLIENT_ID =
    "38888812882-14tbmeoq89l56ardrkb95ce8m1pcfbcl.apps.googleusercontent.com";
const API_KEY = "AIzaSyC8F9tE8ZrB7G6fro_SW4RWrxKU3oBBz68";
const SPREADSHEET_ID = "1m3xvBLEeMye30cLdP4SuXdvSxlDnLNnLKjZLY6iqF4g";

function RegisForm() {
    const { theme } = useContext(ThemeContext);
    const [data, setData] = useState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        TypeStudent: "",
        Specialized: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        function start() {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: [
                        "https://sheets.googleapis.com/$discovery/rest?version=v4",
                    ],
                    scope:
                        "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
                })
                .then(
                    () => {
                        console.log("GAPI client loaded for API");
                    },
                    (error) => {
                        console.error("Error loading GAPI client for API", error);
                    }
                );
        }

        gapi.load("client:auth2", start);
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        const newData = { ...data, Date: formattedDate };
        await execute(newData);
        setSuccessMessage("Gửi thành công!");
        setData({
            Name: "",
            Email: "",
            PhoneNumber: "",
            TypeStudent: "",
            Specialized: "",
        });
    };

    const execute = (newData) => {
        const spreedData = Object.values(newData);
        console.log(spreedData);
        gapi.client.sheets.spreadsheets.values
            .append({
                spreadsheetId: SPREADSHEET_ID,
                range: "Data1!A:F",
                insertDataOption: "INSERT_ROWS",
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [spreedData],
                },
            })
            .then(
                (response) => {
                    console.log("Response", response);
                },
                (error) => {
                    console.error("Execute error", error);
                }
            );
    };

    return (
        <div>
            <Navbar />
            <div className={theme}>
                <div className="position-relative text-center bg-dark">
                    <div className="img-wrapper" style={{ height: '400px' }}>
                        <img
                            src="https://ispace.edu.vn/wp-content/uploads/2021/12/banner-1920x550-Template-scaled.jpeg"
                            className="img-fluid"
                            style={{ width: '100%', opacity: 0.5 }}
                            alt="Banner"
                        />
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle text-white p-3">
                        <h1 style={{ fontSize: "6.0rem", fontWeight: '900' }}>Đăng ký</h1>
                    </div>
                </div>
                <section className="d-flex flex-wrap py-5 mt-15 ">
                    <div className="col-md-6 px-4">
                        <img src="https://ispace.edu.vn/wp-content/uploads/2020/09/logo-logo-01-768x183.png" alt="Logo" className="logo img-fluid mb-3" />
                        <hr />
                        <div className="contact-info">
                            <div className="contact-item d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faPhone} className="icon me-2" />
                                <div>
                                    <strong>Điện thoại</strong>
                                    <p>0938 205 966 (Ms. Chinh)</p>
                                </div>
                            </div>
                            <div className="contact-item d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faEnvelope} className="icon me-2" />
                                <div>
                                    <strong>Email</strong>
                                    <p>quangcao@ispace.edu.vn</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="contact-item d-flex align-items-center mb-3">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon me-2" />
                                <div>
                                    <strong>Địa chỉ</strong>
                                    <p>240 Võ Văn Ngân, Phường Bình Thọ, TP. Thủ Đức, TP. Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-4 pt-4 pb-4" style={{ backgroundColor: '#F47E24' }}>
                        <div className="p-5 rounded shadow bg-white" style={{}}>
                            <h3 className="text-center" style={{ fontSize: "4.0rem", color: "#F47E24" }}>ĐĂNG KÝ HỌC</h3>
                            <h3 className="mb-5 text-center mode" style={{ fontSize: "1.5rem" }}>Hãy tham gia và trải nghiệm tại iSPACE</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder="Họ Tên Bạn *"
                                        className="form-control"
                                        required
                                        style={{ height: "50px", fontSize: "1.5rem" }}
                                        value={data.Name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        name="Email"
                                        placeholder="Email *"
                                        className="form-control"
                                        required
                                        style={{ height: "50px", fontSize: "1.5rem" }}
                                        value={data.Email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="PhoneNumber"
                                        placeholder="Số điện thoại *"
                                        className="form-control"
                                        required
                                        style={{ height: "50px", fontSize: "1.5rem" }}
                                        value={data.PhoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="TypeStudent"
                                        className="form-control"
                                        required
                                        style={{ height: "50px", fontSize: "1.5rem" }}
                                        value={data.TypeStudent}
                                        onChange={handleChange}
                                    >
                                        <option value="">-----Đối tượng-----</option>
                                        <option value="HS đang học lớp 12 (đăng ký giữ chỗ)">HS đang học lớp 12 (đăng ký giữ chỗ)</option>
                                        <option value="HS tốt nghiệp THPT/hoàn thành chương trình lớp 12">HS tốt nghiệp THPT/hoàn thành chương trình lớp 12</option>
                                        <option value="Sinh Viên">Sinh Viên</option>
                                        <option value="Người đi làm">Người đi làm</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="Specialized"
                                        className="form-control"
                                        required
                                        style={{ height: "50px", fontSize: "1.5rem" }}
                                        value={data.Specialized}
                                        onChange={handleChange}
                                    >
                                        <option value="">----- Chương trình học -----</option>
                                        <option value="An ninh mạng">An ninh mạng</option>
                                        <option value="Phát triển phần mềm">Phát triển phần mềm</option>
                                        <option value="Thiết kế đồ họa">Thiết kế đồ họa</option>
                                        <option value="Quản trị mạng">Certified Ethical Hacker</option>
                                        <option value="Thương mại điện tử">AWS Cloud Foundations</option>
                                    </select>
                                </div>
                                {successMessage && <div className="alert alert-success text-center h5">{successMessage}</div>}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    style={{ height: "50px", fontSize: "1.5rem" }}>
                                    GỬI NGAY
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}


export default RegisForm;
