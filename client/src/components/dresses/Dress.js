import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import dressesApi from "../../api/api";
import ReactWhatsapp from "react-whatsapp";
import whatup from "../../img/whatsup.png";

const Dress = () => {
  const history = useHistory();
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
          onClick={() => history.goBack()}
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
            <p>Locate in {dress.location}</p>
            <p>size {dress.size}</p>

            <p>{dress.price}&#8362; </p>

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
                  justifyContent: "center",
                  backgroundColor: "#f3f1f5",
                }}
              >
                <img src={whatup} alt="whatsup" style={{ width: "3.125rem" }} />
                <p style={{ fontFamily: "futura", fontSize: "1.8em" }}>
                  Contact
                </p>
              </div>
            </ReactWhatsapp>
          </div>
        </div>
      </div>
    )
  );
};

export default Dress;
