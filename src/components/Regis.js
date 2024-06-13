import React, { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import '../assets/Main.css'
const CLIENT_ID =
    "38888812882-14tbmeoq89l56ardrkb95ce8m1pcfbcl.apps.googleusercontent.com";
const API_KEY = "AIzaSyC8F9tE8ZrB7G6fro_SW4RWrxKU3oBBz68";
const SPREADSHEET_ID = "1m3xvBLEeMye30cLdP4SuXdvSxlDnLNnLKjZLY6iqF4g";

function RegisForm() {
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
                        "https://www.googleapis.com/auth/spreadsheets",
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

        gapi.load("client", start);
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
        <section className="d-flex flex-wrap py-5 mt-15" style={{ backgroundColor: "#60390D" }}>
            <div className="col-12 col-md-6 px-4">
                <div className="mb-4">
                    <h1 className="text-white text-center text-uppercase mb-3" style={{ fontSize: "6.0rem" }}>
                        VÀO ISPACE NHẬN <span style={{ color: "#F47E24" }}>IPHONE</span>
                    </h1>
                    <h1 className="text-center text-uppercase mb-3" style={{ color: "#F47E24" }}>
                        09 iPhone 15 Pro dành tặng cho 09 bạn có điểm cao nhất mỗi đợt xét tuyển
                    </h1>
                </div>
                <div className="d-flex justify-content-center">
                    <img
                        src="https://ispace.edu.vn/wp-content/uploads/2024/01/DSCF9681-1024x683.jpg"
                        alt=""
                        className="img-fluid"
                        style={{ width: "70%", height: "70%" }}
                    />
                </div>
            </div>
            <div className="col-md-6 px-4 pt-5 pb-5 mt-5" >
                <div className="p-5 rounded shadow bg-white" >
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
                            style={{ height: "50px", fontSize: "1.5rem" }}
                        >
                            GỬI NGAY
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );

}

export default RegisForm;
