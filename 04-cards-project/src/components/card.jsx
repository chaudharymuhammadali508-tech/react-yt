import React from "react";
import { Bookmark } from "lucide-react";
const card = (props) => {
  console.log("props", props);
  return (
    <div className="card">
      <div>
        {" "}
        <div className="top">
          <img src={props.logo} alt="" />
          <button>
            Save
            <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.companyname} <span>{props.posted}</span>
          </h3>
          <h2>{props.position}</h2>
          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
          {props.dueDate && <p className="para">{props.dueDate}</p>}
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default card;
