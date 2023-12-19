import React from "react";

const Card = ({ title, desc, imgSrc, capacity }) => {
  return (
    <>
      <div ClassName="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={imgSrc}
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {capacity}
                  <p>let {desc}</p>
                </p>
                <a href="#d" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </div>
    </>
  );
};

export default Card;
