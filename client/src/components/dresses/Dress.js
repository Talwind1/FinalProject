import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dressesApi from "../../api/api";
import ReactWhatsapp from "react-whatsapp";
import whatup from "../../img/whatsup.png";

const Dress = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dress, setDress] = useState(null);
  useEffect(() => {
    const fetching = async () => {
      console.log(id);
      try {
        const { data } = await dressesApi.get(`/dresses/${id}`);
        setDress(data);
      } catch (e) {
        throw e.messege;
      }
    };
    fetching();
  }, []);

  return (
    dress && (
      <div className="dress-page">
        <button
          className="btn"
          onClick={() => navigate(-1)}
          style={{ margin: "1.5%" }}
        >
          Back
        </button>
        <div className="dress-row">
          <div className="dress-pic-page">
            <img
              src={dress.url}
              alt="dress"
              style={{ height: "36rem", width: "29rem", objectFit: "cover" }}
            />
          </div>
          <div className="dress-details-page">
            <p>
              <b style={{ fontFamily: "futura-pt", fontSize: "1.2rem" }}>
                Location:
              </b>{" "}
              {dress.location}
            </p>
            <p>
              <b style={{ fontFamily: "futura-pt", fontSize: "1.2rem" }}>
                Size:
              </b>{" "}
              {dress.size.toUpperCase()}
            </p>

            <p>
              <b style={{ fontFamily: "futura-pt", fontSize: "1.2rem" }}>
                Price:
              </b>{" "}
              {dress.price}&#8362;{" "}
            </p>

            <ReactWhatsapp
              number={"+972" + dress.phone.substring(1)} //dress.phone
              message="Hi I'm from One Night Dress app"
              style={{ backgroundColor: "#f3f1f5" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  backgroundColor: "#f3f1f5",
                }}
              >
                <img src={whatup} alt="whatsup" style={{ width: "3.125rem" }} />
                <p style={{ fontFamily: "futura-pt", fontSize: "1.4em" }}>
                  Contact
                </p>
              </div>
            </ReactWhatsapp>
            {/* <div
              style={{
                height: "20%",
                backgroundColor: "#ddd",
                width: "60%",
                padding: "5%",
                margin: "5%",
              }}
            >
              <h6
                style={{
                  padding: "1%",
                  fontFamily: "futura-pt",
                  // fontSize: "2rem",
                  backgroundColor: "#ddd",
                }}
              >
                Sizing
              </h6>
            </div> */}
          </div>
        </div>
      </div>
    )
  );
};

export default Dress;
