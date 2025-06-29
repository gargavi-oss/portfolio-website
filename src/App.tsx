import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactMe from "./components/ContactMe";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Layout /> },
    { path: "/skills", element: <Skills /> },
    { path: "/education", element: <Education/>},
    { path:"/contactme", element: <ContactMe/>}
  ]);

  return <RouterProvider router={router} />;
};

export default App;
