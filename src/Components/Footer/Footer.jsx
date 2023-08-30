import React from "react";
import {MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn,} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/peeyush.mohapatra.1/"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://mail.google.com/mail/u/0/#inbox"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.instagram.com/peeyushmohapatra/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.linkedin.com/in/peeyushmohapatra/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://github.com/Peeyushmohapatra"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © Movie App 2023 | Copyright:
          <a className="text-white" href="https://www.themoviedb.org/">
            {" "}
            www.themoviedb.org{" "}
          </a>
          &nbsp;&nbsp;| Developed by Peeyush Mohapatra...
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;