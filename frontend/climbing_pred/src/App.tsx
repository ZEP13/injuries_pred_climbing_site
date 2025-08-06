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
		element: <Page1/>,
	    },
	    {
		path: "",
		element: <Page1/>,
	    },
	], 
    },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
    return (
      <div className="app">
	  <div className="container">
	    <RouterProvider router={router} />
	  </div>
	</div>
    );
}

export default App
