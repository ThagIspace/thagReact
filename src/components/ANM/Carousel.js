import React from "react";
import '../../assets/Main.css';

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="img-wrapper" style={{ height: '550px  ' }}>
        <img
          src="https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1.jpg"
          className="img-fluid"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
