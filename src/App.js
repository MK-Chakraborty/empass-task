import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        {/* ------------------ *\
              Header Section 
        \* ------------------- */}
        <header className="border-0 border-bottom border-4 border-secondary">
          <Navbar expand="lg" className="headNav text-dark">
            <Navbar.Brand href="#home">
              <img
                src="https://apps.empass.mobi/crm_emptrial/assests/img/be_bl_drk.png"
                alt="logo"
                className="w-75"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto py-2 lh-lg">
                Test / Job Role <span className="ps-3">Interest</span>
              </Nav>

              <Nav className="mx-auto py-2 lh-lg">
                Applicant Name<span className="ps-3">Demo Dec</span>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        {/* ------------------ *\
              Header Section 
        \* ------------------- */}

        <section className="my-5">
          {/* ------------------ *\
              Test Table Section 
          \* ------------------- */}
          <Row className="testTable mx-3 p-3 rounded-3">
            <Col sm={12} md={12} lg={6} xl={6} xxl={5}>
              <article className="d-flex justify-content-between flex-wrap">
                <p>CANDIDATE EMAIL</p>
                <p>demodec2@gmail.com</p>
              </article>
              <article className="d-flex justify-content-between flex-wrap">
                <p>TEST INVITED ON</p>
                <p>Dec 21 2021</p>
              </article>
              <article className="d-flex justify-content-between flex-wrap">
                <p>TEST COMPLETED ON</p>
                <p>Dec 21 2021</p>
              </article>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} xxl={{ span: 5, offset: 2 }}>
              <article className="d-flex justify-content-between flex-wrap">
                <p>TEST NAME</p>
                <p>INTEREST</p>
              </article>
              <article className="d-flex justify-content-between flex-wrap">
                <p>REPORT ID</p>
                <p>EMP-2021-1221-124119</p>
              </article>
            </Col>
          </Row>
          {/* ------------------ *\
              Test Table Section 
          \* ------------------- */}
        </section>
      </Container>
      {/* ------------------ *\
           Summary Section 
      \* ------------------- */}
      <Container
        fluid
        className="px-0 text-start"
        style={{ marginTop: "100px" }}
      >
        <span
          className="px-5 py-3 fw-bold text-light"
          style={{ background: "#34c646", fontSize: "20px" }}
        >
          SUMMARY OF RESULTS
        </span>
      </Container>
      <Container fluid>
        <p className="mx-4 my-5 text-start">
          <span className="sumrTitle pb-2">Interests for Demo Dec</span>
        </p>
        <Row>
          <Col xs={12} sm={12} md={6} lg={5}>
            <div className="wrapper--shadow">
              <div className="hexagon mg-tp-none">
                <div className="triangle-1 triangle inactive">
                  <div className="triangle--text">
                    <p className="triangle--text-label">REALISTIC</p>
                    <p className="triangle--text-score">42</p>
                  </div>
                </div>
                <div className="triangle-2 triangle inactive">
                  <div className="triangle--text">
                    <p className="triangle--text-label">INVESTIGATIVE</p>
                    <p className="triangle--text-score">66</p>
                  </div>
                </div>
                <div className="triangle-3 triangle ">
                  <div className="triangle--text">
                    <p className="triangle--text-label">ARTISTIC</p>
                    <p className="triangle--text-score">74</p>
                  </div>
                </div>
                <div className="triangle-4 triangle ">
                  <div className="triangle--text">
                    <p className="triangle--text-label">SOCIAL</p>
                    <p className="triangle--text-score">77</p>
                  </div>
                </div>
                <div className="triangle-5 triangle ">
                  <div className="triangle--text">
                    <p className="triangle--text-label">ENTERPRISING</p>
                    <p className="triangle--text-score">70</p>
                  </div>
                </div>
                <div className="triangle-6 triangle inactive">
                  <div className="triangle--text">
                    <p className="triangle--text-label">CONVENTIONAL</p>
                    <p className="triangle--text-score">67</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={7}>
            <section className="interestCodeBox">
              <p className="boxTitle mx-4 my-5 text-start">
                <span className="pb-2">Your Interest Code are</span>
                <br /> <br />
                <span className="px-4 py-2 mx-3 border border-2 border-dark rounded-3 fw-bold">
                  S
                </span>
                <span className="px-4 py-2 mx-3 border border-2 border-dark rounded-3 fw-bold">
                  A
                </span>
                <span className="px-4 py-2 mx-3 border border-2 border-dark rounded-3 fw-bold">
                  E
                </span>
              </p>
              <h3 className="d-flex justify-content-between mx-4">
                <p className="instCode px-3 py-2 rounded-3 fw-bold text-light">
                  SOCIAL
                </p>
                <p className="instaValue fw-bold px-3 py-1 text-light rounded-3">
                  77
                </p>
              </h3>
              <h3 className="d-flex justify-content-between mx-4">
                <p className="instCode px-3 py-1 rounded-3 fw-bold text-light">
                  ARTISTIC
                </p>
                <p className="instaValue fw-bold px-3 py-2 text-light rounded-3">
                  74
                </p>
              </h3>
              <h3 className="d-flex justify-content-between mx-4">
                <p className="instCode px-3 py-1 rounded-3 fw-bold text-light">
                  ENTERPRISING
                </p>
                <p className="instaValue fw-bold px-3 py-2 text-light rounded-3">
                  70
                </p>
              </h3>
            </section>
          </Col>
        </Row>
        <section className="text-start border border-2 border-secondary px-5 py-3 my-4">
          <h4 className="py-3" style={{ fontSize: "18px", fontWeight: "600" }}>
            SOCIAL
          </h4>
          <li style={{ fontSize: "16px" }}>
            Social individuals are humanistic, idealistic, responsible and
            concerned with the welfare of others.
          </li>
          <li style={{ fontSize: "16px" }}>
            They enjoy participating in group activities and helping, training,
            healing, counseling or developing others.
          </li>
        </section>
      </Container>
      {/* ------------------ *\
           Summary Section 
      \* ------------------- */}

      {/* ------------------ *\
           Interests Section 
      \* ------------------- */}
      <Container
        fluid
        className="px-0 text-start"
        style={{ marginTop: "100px" }}
      >
        <span
          className="px-5 py-3 fw-bold text-light"
          style={{ background: "#34c646", fontSize: "20px" }}
        >
          INTERESTS - BASED ON RIASEC
        </span>
      </Container>
      <Container fluid>
        <p className="instTitle mx-4 mt-5 mb-2 pb-2 text-start">
          Detailed Results & Analysis for Demo Dec
        </p>
        <p className="boxTitle mx-4 pb-2 text-start">
          The Holland Code Model (also called as RIASEC)
        </p>
        <Row>
          <Col xs={12} sm={12} md={6} lg={5}>
            <article className="mt-5 lh-lg instText text-start ms-5">
              <p style={{ paddingTop: "100px" }}>
                The <strong>HOLLAND codes (RIASEC)</strong> are an easier way of
                categorizing people based on their interests and how they
                approach life situations.
              </p>
              <p className="py-3">
                It is one of the most useful instruments for career exploration
                and selection. The underlying assumption is that careers or
                vocations that are chosen based on individual interests are
                likely to be longer lasting and more satisfying than any other
                construct.
              </p>
              <p>
                Each individual is provided with a 3 letter code (out of 6)
                indicating their type as well as a list of occupations/careers
                that match their specific interests.
              </p>
            </article>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={7}
            className="d-flex align-items-center"
          >
            <img
              src="https://dashboard.empass.mobi/apic/assests/reportpica/img/RIASEC-Amaze.png"
              alt=""
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
      {/* ------------------ *\
           Interests Section 
      \* ------------------- */}

      {/* ------------------ *\
            Footer Section 
      \* ------------------- */}
      <Container className="my-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={{ span: 6, offset: 3 }}>
            <footer className="d-flex justify-content-around align-items-center border-0 border-top border-4 border-secondary">
              <p className="fw-bold lh-lg">
                © 2017-2021 Empass <br /> Learning Private Limited.
              </p>
              <img
                src="https://apps.empass.mobi/crm_emptrial/assests/reportcatalog/img/powered_by.png"
                alt="logo"
                className="w-25"
              ></img>
            </footer>
          </Col>
        </Row>
      </Container>
      {/* ------------------ *\
            Footer Section 
      \* ------------------- */}
    </div>
  );
}

export default App;
