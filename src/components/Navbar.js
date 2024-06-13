import React, { useRef, useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../assets/Navbar.css";
import logo from '../assets/img/lg1.png';
import Darkmode from "./Darkmode";
import { ThemeContext } from '../components/ThemeContext';

function Navbar() {
	const { theme } = useContext(ThemeContext);
	const navRef = useRef();
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const handleMouseEnter = () => {
		setDropdownVisible(true);
	};

	const handleMouseLeave = () => {
		setDropdownVisible(false);
	};

	return (
		<div>
			<div className="top-header">
				<ul className="contact-info mb-5" style={{ marginRight: '-200' }}>
					<li style={{ marginTop: 8 }}>Learning by Doing</li>
					<li>
						<span style={{ marginRight: 5 }} className="icon">
							<FontAwesomeIcon icon={faPhone} />
						</span>
						0938 205 966
					</li>
					<li>
						<a href="mailto:quangcao@ispace.edu.vn">
							<span style={{ marginRight: 5 }} className="icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</span>
							quangcao@ispace.edu.vn
						</a>
					</li>
				</ul>
			</div>
			<header className={theme}>
				<div className="logo">
					<a href="/"><img src={logo} alt="Logo" /></a>
				</div>
				<nav ref={navRef}>
					<a href="/"><span className="icon"><FontAwesomeIcon icon={faHome} /></span>Trang chủ</a>
					<div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<a href="/#">Ngành<span style={{ marginLeft: 5 }} className="icon"><FontAwesomeIcon icon={faChevronDown} /></span></a>
						{dropdownVisible && (
							<div className="dropdown-content">
								<a href="/anm">An ninh mạng</a>
								<a href="/ptpm">Phát triển phần mềm</a>
								<a href="/tkdh">Thiết kế đồ hoạ</a>
							</div>
						)}
					</div>
					<div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<a href="/#">Khoá học ngắn hạn<span style={{ marginLeft: 5 }} className="icon"><FontAwesomeIcon icon={faChevronDown} /></span></a>
						{dropdownVisible && (
							<div className="dropdown-content">
								<a href="/ceh">Khoá học CEH</a>
								<a href="/aws">Khoá học AWS Cloud Foundation</a>
							</div>
						)}
					</div>
					<a href="/admin">Admin</a>
					<a href="/register">
						<button className="btn">Đăng ký</button>
					</a>


					<Darkmode />
					<button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
				</nav>
				<button className="nav-btn" onClick={showNavbar}><FaBars /></button>
			</header>
		</div>
	);
}

export default Navbar;