// import Homepage from "../component/Homepage";
// import Signup from "../component/Signup";
// import LoginPage from "../component/LoginPage";
// import More from "../component/More";
// const router = [
//   {
//     element: <Homepage />,
//     path: "/home",
//     isAuth: true,
//   },
//   {
//     element: <Signup />,
//     path: "/signup",
//     isAuth: false,
//   },
//   {
//     element: <LoginPage />,
//     path: "/login",
//     isAuth: false,
//   },
//   {
//     element: <More />,
//     path: "/more-info/:id",
//     isAuth: true,
//   },
// ];

// export const GetRoutes = (token) => {
//   if (!!token) {
//     return router.filter((data) => {
//       if (data.isAuth) {
//         return data;
//       }
//       return false;
//     });
//   } else {
//     return router.filter((data) => {
//       if (!data.isAuth) {
//         return data;
//       }
//       return false;
//     });
//   }
// };
