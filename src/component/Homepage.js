import { useContext, useEffect, useMemo, useState } from "react";
import Card11 from "./Card11";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { GetPosts } from "../store/slice/PostSlice";
import axios from "axios";
// import { UserContext } from "../ContextAPi";
import Search from "./Search";
function Homepage() {
  //   const user = useContext(UserContext);
  const [checked, setChecked] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const postData = useSelector((state) => state.post.post);
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("");
  // console.log(user);
  useEffect(() => {
    dispatch(GetPosts());
    // user.handleSubmit("text");
  }, []);
  const navigate = useNavigate();

  // Checkbox code
  const handlecheckbox = (ischeck, id) => {
    if (ischeck) {
      setChecked([...checked, id]);
    } else {
      setChecked(checked.filter((checkId) => checkId !== id));
    }
  };
  const CheckedData = () => {
    //console.log(isChecked);
    // if (isChecked.length !== 0) {
    //   navigate("/checked");
    // }
  };

 

  const filterData = useMemo(() => {
    if (!!searchTitle) {
      return postData?.data.filter((value) => {
        return value.title.toLowerCase().includes(searchTitle.toLowerCase());
      });
    } else {
      return postData?.data;
    }
  }, [searchTitle, postData]);

  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
   
      <div className="row">
        {postData.loading ? (
          <p>Loading..........................................................................................</p>
        ) : (
          filterData.map((item, id) => {
            const isChecked = checked.some((id) => item.id === id);
            return (
              <div className="col-md-3" key={id}>
                <Card11
                  id={item.id}
                  isChecked={isChecked}
                  title={item.title ? item.title.slice(0, 40) : ""}
                  body={item.body ? item.body.slice(0, 90) : ""}
                  handle={handlecheckbox}
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Homepage;
