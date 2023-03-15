import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
const More = () => {
  const params = useParams();
  const [state, setState] = useState({});
  const fetch = async () => {
    try {
      const {data}  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      setState(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (params.id) {
      fetch();
    }
  }, [params]);
  const navigate = useNavigate();

  return  (
    <>
    <div
      style={{
        width: "20%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        marginTop: "10%",
      }}
    >
      <Card style={{ width: "18rem", height: "300px" }}>
        <Card.Body style={{ height: "400px" }}>
          <Card.Title style={{ height: "30px" }}>
  
            Card id:{state?.id}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{ height: "60px" }}>
            Card Title: {state?.title}
          </Card.Subtitle>
          <Card.Text>{state?.body}</Card.Text>
        </Card.Body>
      </Card>
     
    </div>
   
    <Button test-dataid='InputField' variant="contained" onClick={() => navigate("/home")}>Back</Button>
    </>
  ) 
  
};

export default More;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";
// import { useParams } from "react-router-dom";

// const More = () => {

//   const params = useParams();
//   const [state, setState] = useState({});
//   const fetch = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${params.id}`
//       );
//       setState(data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     if (params.id) {
//       fetch();
//     }
//   }, [params]);

//   return !!state ? (
//     <div
//       style={{
//         width: "20%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100%",
//         height: "100%",
//         marginTop: "10%",
//       }}
//     >
//       <Card style={{ width: "18rem", height: "300px" }}>
//         <Card.Body style={{ height: "400px" }}>
//           <Card.Title style={{ height: "30px" }}>
  
//             Card id:{state?.id}
//           </Card.Title>
//           <Card.Subtitle className="mb-2 text-muted" style={{ height: "60px" }}>
//             Card Title: {state?.title}
//           </Card.Subtitle>
//           <Card.Text>{state?.body}</Card.Text>
//         </Card.Body>
//       </Card>
      
//     </div>
//   ) : (
//     <></>
//   );
// };

// export default More;


