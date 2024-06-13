import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faAngleRight, faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../assets/Main.css';

const Footer = () => {
    return (
        <div className="container-fluid text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: 2, backgroundColor: '#F47F27', fontSize:'1.5rem' }}>
            <div className="row">
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-md-6 mb-5" style={{cursor:'pointer'}}>
                            <h1 className="text-primary text-white text-uppercase mb-4" >
                                TRƯỜNG CAO ĐẲNG AN NINH MẠNG iSPACE
                            </h1>
                            <p className="text-white">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-5" />
                                Địa chỉ: 240 Võ Văn Ngân, phường Bình Thọ, TP Thủ Đức, TPHCM
                            </p>
                            <p className="text-white">
                                <FontAwesomeIcon icon={faPhoneAlt} className="mr-5" />
                                Hotline: 0938 205 966
                            </p>
                            <p className="text-white">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-5" />
                                lienhe@ispace.edu.vn
                            </p>
                            <p className="text-white">
                                <FontAwesomeIcon icon={faGlobe} className="mr-5" />
                                Website: http://ispace.edu.vn   
                            </p>
                        </div>

                        <div className="col-md-6 mb-5">
                            <h1 className="text-primary text-white text-uppercase mb-4">
                                Các khoá học
                            </h1>
                            <div className="list-group">
                                <a href="/anm" className="list-group-item list-group-item-action text-white" style={{ backgroundColor: '#554436' }}>
                                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                                    An ninh mạng
                                </a>
                                <a href="/ptpm" className="list-group-item list-group-item-action text-white" style={{backgroundColor: '#554436' }}>
                                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                                    Phát triển phần mềm
                                </a>
                                <a href="/tkdh" className="list-group-item list-group-item-action text-white" style={{backgroundColor: '#554436' }}>
                                    <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
                                    Thiết kế đồ hoạ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 mb-5">
                    <h1 className="text-primary text-white text-center text-uppercase">
                    BẠN MUỐN TRỞ THÀNH CHUYÊN GIA CÔNG NGHỆ?
                    </h1>
                    <p className='text-white text-center'>
                        Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE - Đơn vị trực thuộc NGS Group.

                    </p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Your Email Address" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
