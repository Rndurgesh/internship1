import React from "react";
import "./right.css";

const Right = () => {
  return (
    <div className="r">
      <div className="r-item">
        <img
          className="r-img"
          src="https://c4.wallpaperflare.com/wallpaper/925/878/321/react-native-reactjs-hd-wallpaper-thumb.jpg"
          alt="Web_developer_img"
        />
        <h2> Front web developer</h2>
        {/* <h3>Needed a front end developer</h3> */}
        <div className="r-skill">
          <div className="skill">ReactJS</div>
          <div className="skill">HTML + CSS</div>
          <div className="skill">TailwindCSS</div>
          <div className="skill">Javascript</div>
          <div className="skill">Bootstrap</div>
          <div className="skill">Github</div>
        </div>
      </div>
      <div className="r-item">
        <img
          className="r-img"
          src="https://www.shutterstock.com/image-vector/job-board-template-hiring-full-600w-1813660480.jpg"
          alt="Web_developer_img"
        />
        <h2> Full Stack web developer</h2>
        {/* <h3>Needed Full Stack developer</h3> */}
        <div className="r-skill">
          <div className="skill">Reactjs </div>
          <div className="skill">Javascript</div>
          <div className="skill">Nodejs</div>
          <div className="skill">Expressjs</div>
          <div className="skill">MongoDB</div>
          <div className="skill">Github</div>
        </div>
      </div>
      <div className="r-item">
        <img
          className="r-img"
          src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Web_developer_img"
        />
        <h2> Android developer</h2>
        {/* <h3>Needed Android developer</h3> */}
        <div className="r-skill">
          <div className="skill">Android Foundation</div>
          <div className="skill">React Native</div>
          <div className="skill">Firebase</div>
          <div className="skill">Testing</div>
        </div>
      </div>
      <div className="r-item">
        <img
          className="r-img"
          src="https://as1.ftcdn.net/v2/jpg/05/12/04/52/1000_F_512045284_gsbCu75oyqHo59MccBltJe0sJRck1PPa.jpg"
          alt="Web_developer_img"
        />
        <h2> DevOps Engineer</h2>
        {/* <h3>Needed DevOps Engineer </h3> */}
        <div className="r-skill">
          <div className="skill">Linux</div>
          <div className="skill">Cloud computing</div>
          <div className="skill">Debugging</div>
        </div>
      </div>
    </div>
  );
};

export default Right;
