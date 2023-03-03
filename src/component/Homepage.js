import { useEffect, useState } from "react";
import Card11 from "./Card11";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import { GetPosts } from "../store/slice/PostSlice";
import axios from "axios";
function Homepage() {
  const [state, setState] = useState([]);
  const postData = useSelector((state) => state.post.post);
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("")
  // const getproduct = async () => {
  //   dispatch(GetPosts(12));
  //   try {
  //     const data = await axios("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
  //         // setState(json);
  //       });

  //     console.log(data.data);
  //     setState(data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    dispatch(GetPosts());
  }, []);

  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };

  const navigateSearch = useNavigateSearch();

  return (
    <div className="row">
      {postData.loading ? (
        <p>Loading.................</p>
      ) : (
        postData.data.map((item, id) => {
          return (
            <div className="col-md-3" key={id}>
              <Card11
                id={item.id}
                title={item.title ? item.title.slice(0, 40) : ""}
                body={item.body ? item.body.slice(0, 90) : ""}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Homepage;
