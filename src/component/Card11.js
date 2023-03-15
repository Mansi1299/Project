import axios from "axios";
// import { useEffect, useState } from "react";
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function Card11(props) {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <div className="card" style={{ padding: "10px", marginLeft: "60px" }}>
          <div className="card-body">
            <h4 className="card-title">{props.id}...</h4>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.body}...</p>
            <button
              type="button"
              onClick={() => navigate(`/more-info/${props.id}`)}
            >
              More..
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default memo(Card11);
