import { useState, useEffect, useRef } from "react"

// img
import icon1 from "./assets/ico1.PNG"
import icon2 from "./assets/ico2.PNG"

// Components
import About from "./components/about"
import Tasklist from "./components/taskList"


import { Button, Overlay, Tooltip, OverlayTrigger, Row, Col } from "react-bootstrap"

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const target1 = useRef(null);
  const target2 = useRef(null);

  console.log(target1);


  const [a, setA] = useState("")
  function test() {
    console.log("run");
  }
  function msg() {
    alert("Hi, how can I help you? ");
    setA(Date.now())
    console.log(Date.now())
  }

  useEffect(() => {
    test()

  }, [a])  // useEffect is now dependent on stata "a" so useEffect will run when state "a" updates 


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="row banner">
        <div className="bannerContent">

          <div>
            <h2>Creative Design</h2>
          </div>

          <div className="BannerBTN">
            <button>Leanr More</button>
            <button>
              Buy Now
              <i className="fa-regular fa-plus"></i>
              <i className="fa-solid fa-plus-large"></i>
              <i className="fa-thin fa-plus-large"></i>
              <i className="fa-solid fa-magnifying-glass-dollar" style={{ color: "green" }}></i>
            </button>
          </div>

        </div>
      </div>

      {/* <Row>
        <Col lg={2} md={3} sm={4}>
          <h1></h1>
        </Col>
      </Row> */}

      <div className="row services">
        <div>
          <h2>Services</h2>
        </div>
        <div>
          Our services offering ranges from UX design to e-commerce setups. Just check out all of the service lists below to get a general idea of what we are capable of delivering. And make sure to see our portfolio for proof of our awesomeness.
        </div>
        <div className="row service-icons">
          <div className="col-lg-2 service-icon">
            <div>
              <TooltipButton text={["wireframe", "Content", "info"]} iconType="fa-heart" />
            </div>
          </div>

          <div className="col-lg-2 service-icon" >
            <div>
              <TooltipButton text={["brand", "web", "mobile"]} iconType="fa-shield-halved" />
            </div>
          </div>

          <div className="col-lg-2 service-icon">
            <div>
              <TooltipButton text={["meta", "ad", "google"]} iconType="fa-ghost" />
            </div>
          </div>


          <div className="col-lg-2 service-icon">
            <div>
              <TooltipButton text={["fb", "twitter", "social"]} iconType="fa-dragon" />
            </div>
          </div>

          <div className="col-lg-2 service-icon">
            <div>
              <i className="fa-solid fa-gamepad"></i>
            </div>
          </div>

          <div className="col-lg-2 service-icon">
            <div>
              <i className="fa-solid fa-dice"></i>
            </div>
          </div>

        </div>
      </div>



      <Row className="m-0">
        <Col lg={3} className="p-0 asd7887" style={{ border: "1px solid red" }}>
          <div className="jkhkj">
            <div className="card-img">
              <img className="img-fluid" src="https://play-lh.googleusercontent.com/RC551IFqJwz5ymg_h1eizSLyKUaJc-HCAxI5OzXZgQGY03_9mOP_1VFNdx8u7QnGOTnh" alt="" />
            </div>
            <div className="cardText">
              <p>Sweet Candy</p>
              <small>branding/package</small>
            </div>
          </div>

          <div className="myHovor">
            <p>Sweet Candy</p>
            <small>branding/package</small>
          </div>
        </Col>

        <Col lg={3} className="p-0 asd7887" style={{ border: "1px solid red" }}>
          <div className="jkhkj">
            <div className="card-img">
              <img className="img-fluid" src="https://play-lh.googleusercontent.com/dBD_MfXNjTCEVeYb1MfPKJCuHB8HlvuinC1tLck35YOmduBi4xUM0qXvoB2nC9IVAco" alt="" />
            </div>
            <div className="cardText">
              <p>Sweet Candy 2</p>
              <small>branding/package 2</small>
            </div>


          </div>
          <div className="myHovor">
            <p>Sweet Candy 2</p>
            <small>branding/package 2</small>
          </div>
        </Col>
      </Row>
    </>
    // <div className="App">

    //   <About username={name} des={"I'm a student"} msg={msg} />

    //   <div className="container">
    //     <div className="row main px-2 py-3">
    //       <header className="row head">
    //         <div className="col">
    //           <img src={icon1} alt="ico" width={"25px"} />
    //         </div>
    //         <div className="col">
    //           <img src={icon2} alt="ico" width={"50px"} style={{ float: "right" }} />
    //         </div>
    //       </header>
    //       <h2>What's up, Mustafa!</h2>

    //       <div className="row">
    //         <h5>CATEGORIES</h5>
    //       </div>

    //       <div className="row categories">
    //         <div className="categoryCard">
    //           <small>40 tasks</small>
    //           <h6>Business</h6>
    //           <div className="categoryHr">
    //             <div className="categoryHr1"></div>
    //             <div className="categoryHr2"></div>
    //           </div>
    //         </div>
    //         <div className="categoryCard">
    //           <small>18 tasks</small>
    //           <h6>Personal</h6>
    //           <div className="categoryHr">
    //             <div className="categoryHr1"></div>
    //             <div className="categoryHr2"></div>
    //           </div>
    //         </div>
    //         <div className="categoryCard">
    //           <small>3 tasks</small>
    //           <h6>Birthday Events</h6>
    //           <div className="categoryHr">
    //             <div className="categoryHr1"></div>
    //             <div className="categoryHr2"></div>
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         <h6 className="as12"> Today Tasks</h6>
    //       </div>

    //       <Tasklist />

    //     </div>
    //   </div>


    // </div>
  );
}


const TooltipButton = (props) => {
  if (props.text) {
    return (
      <OverlayTrigger
        placement="top"
        // delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="button-tooltip-2">{
          (props.text).map((text, i) => {
            return <li key={i}>{text}</li>
          })
        }</Tooltip>}
      >
        <i className={`fa-solid ${props.iconType}`} ></i>
      </OverlayTrigger>
    );
  }
  else {
    return null;
  }
}

export default App;