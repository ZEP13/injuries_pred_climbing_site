import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './App.css'
import Page1 from "./pages/page1.tsx";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register.tsx";
import Profile from "./pages/profile.tsx";
import Main from "./pages/mainPage.tsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
    {
	path: "/",
	element: <Layout/>,
	children:[
	    {
		path: "/",
		element: <Main/>,
	    },
	    {
		path: "/page1",
		element: <Page1/>,
	    },
	    {
		path: "/profile",
		element: <Profile/>,
	    },
	], 
    },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
    return (
      <div className="">
	  <div className="">
	    <RouterProvider router={router} />
	  </div>
	</div>
    );
}

export default App
