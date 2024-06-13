import '../../assets/Main.css'
import React, { useState, useEffect,useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import teacher1 from '../../assets/img/teacher1.jpg';
import teacher2 from '../../assets/img/teacher2.jpg';
import teacher3 from '../../assets/img/teacher3.jpg';
import teacher5 from '../../assets/img/teacher5.jpg';
import teacher6 from '../../assets/img/teacher6.jpg';
import teacher7 from '../../assets/img/teacher7.jpg';
import { ThemeContext } from '../../components/ThemeContext';

const Teachers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { theme } = useContext(ThemeContext);
    const slides = [
        {
            title: "Giảng viên",
            imageUrl: teacher1,
            description: "Thầy Nguyễn Thế Phương",
            link: "https://example.com"
        },
        {
            title: "Hiệu trưởng",
            imageUrl: teacher2,
            description: "PGS.TS Nguyễn Duy Hàm",
            link: "https://example.com"
        },
        {
            title: "Giảng viên",
            imageUrl: teacher3,
            description: "Thầy Lê Hoàng Bình Nguyên",
            link: "https://example.com"
        },
        {
            title: "Giảng viên",
            imageUrl: teacher5,
            description: "Thầy Trương Phạm Hoài Thương",
            link: "https://example.com"
        },
        {
            title: "Giảng viên",
            imageUrl: teacher6,
            description: "Cô Lê Kim Ngân",
            link: "https://example.com"
        },
        {
            title: "Giảng viên",
            imageUrl: teacher7,
            description: "Thầy Văn Minh Đại",
            link: "https://example.com"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className={`${theme}`}>
            <style>
                {`
                    .dark .txtWhite{
                        color: #fff;
                    }

                `}
            </style>
            {/* Phone Responsive */}
            <div className={"container phone-visible"}>
                <div className="text-center mb-5">
                    <h1 className="text-primary text-uppercase mb-3">
                        Trường Cao đẳng An ninh mạng iSPACE
                    </h1>
                    <h1 className='txtWhite'>BAN CỐ VẤN - GIẢNG VIÊN</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card-slider">
                            <div className="card-slider-inner" style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.5s ease-in-out' }}>
                                {slides.map((slide, index) => (
                                    <Card key={index} className="text-center" style={{ minWidth: '100%',  fontSize:"1.5rem", fontWeight:"800" }}>
                                        <Card.Img variant="top" src={slide.imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{slide.title}</Card.Title>
                                            <Card.Text>{slide.description}</Card.Text>
                                            <Button  style={{backgroundColor:"#FBAB34", border:"#fff"}} href={slide.link}>Read More</Button>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                            <button className="prev" onClick={prevSlide}>&#10094;</button>
                            <button className="next" onClick={nextSlide}>&#10095;</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Responsive */}
            <div className="container-fluid py-5 desktop-visible">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h1 className="text-primary text-uppercase mb-3 display-5">
                            Trường Cao đẳng An ninh mạng iSPACE
                        </h1>
                        <h1 className='txtWhite'>BAN CỐ VẤN - GIẢNG VIÊN</h1>
                        <hr />
                    </div>
                    <Row style={{cursor:'pointer'}}>
                        <Col md={6} lg={4} className="text-center team mb-4" >
                            <Card className="team-item rounded overflow-hidden mb-2">
                                <Card.Img
                                    variant="top"
                                    src={teacher1}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: '40%', height: '40%', margin: 'auto' }}

                                />
                                <Card.Body className="p-4" style={{backgroundColor:"#FBAB34", fontSize:"1.5rem", fontWeight:"800"}}>
                                    <Card.Title>Giảng viên</Card.Title>
                                    <Card.Text className="m-0">Thầy Nguyễn Thế Phương</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={4} className="text-center team mb-4">
                            <Card className="team-item rounded overflow-hidden mb-2">
                                <Card.Img
                                    variant="top"
                                    src={teacher2}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: '40%', height: '40%', margin: 'auto' }}
                                />
                                <Card.Body className="p-4" style={{backgroundColor:"#FBAB34", fontSize:"1.5rem", fontWeight:"800"}}>
                                    <Card.Title>Hiệu trưởng</Card.Title>
                                    <Card.Text className="m-0">PGS.TS Nguyễn Duy Hàm </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={4} className="text-center team mb-4" >
                            <Card className="team-item rounded overflow-hidden mb-2" >
                                <Card.Img
                                    variant="top"
                                    src={teacher3}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: '40%', height: '40%', margin: 'auto' }}
                                />
                                <Card.Body className="p-4" style={{backgroundColor:"#FBAB34", fontSize:"1.5rem", fontWeight:"800"}}>
                                    <Card.Title>Giảng viên</Card.Title>
                                    <Card.Text className="m-0">Thầy Lê Hoàng Bình Nguyên</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{cursor:'pointer'}}>
                        <Col md={6} lg={6} className="text-center team mb-4"  >
                            <Card className="team-item rounded overflow-hidden mb-2"  >
                                <Card.Img
                                    variant="top"
                                    src={teacher5}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: '30%', height: '30%', margin: 'auto' }}
                                />
                                <Card.Body className="p-4" style={{backgroundColor:"#FBAB34", fontSize:"1.5rem", fontWeight:"800"}}>
                                    <Card.Title>Giảng viên</Card.Title>
                                    <Card.Text className="m-0">Thầy Trương Phạm Hoài Thương</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={6} className="text-center team mb-4">
                            <Card className="team-item rounded overflow-hidden mb-2">
                                <Card.Img
                                    variant="top"
                                    src={teacher6}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: '30%', height: '30%', margin: 'auto' }}
                                />
                                <Card.Body className="p-4" style={{backgroundColor:"#FBAB34", fontSize:"1.5rem", fontWeight:"800"}}>
                                    <Card.Title>Giảng viên</Card.Title>
                                    <Card.Text className="m-0">Cô Lê Kim Ngân</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
