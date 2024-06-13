import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row" style={{ fontSize: "8.0rem" }}>
                    <div className="col-12">
                        <div className="col-10 offset-1 text-center">
                            <div className="four_zero_four_bg mt-5">
                                <h1 className="text-center display-5 pt-5">~~~Milk~~~</h1>
                            </div>
                            <div className="">
                                <h1 className="display-5">
                                    Có vẻ như bạn đã bị lạc lối!
                                </h1>
                                <p>Trang bạn đang tìm kiếm không có sẵn!!</p>
                                <NavLink to="/" className="btn btn-primary" style={{ fontSize: "3.0rem" }}>Trở về ở đây này</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
