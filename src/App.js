// import React, { useState } from "react";
// import "./App.css"; // Add some basic styling
// //import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Home from './Home';
// import SignIn from './SignIn.jsx';
// import Post from './Post';
// import GroceryList from "./GroceryList";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Layout />,
// //     children: [
// //       {
// //         path: "/",
// //         element: <Home title="Home Page" />,
// //       },
// //       {
// //         path: "/post",
// //         element: <Post />,
// //       },
// //       {
// //         path: "/signin",
// //         element: <SignIn />,
// //       },
// //       {
// //         path: "/grocery",
// //         element: <GroceryList />,
// //       },
// //     ],
// //   },
// // ]);

// // function App() {
// //   return <RouterProvider router={router} />;
// // }

// // export default App;

// function App() {
//   const [activeTab, setActiveTab] = useState("Home"); // State to manage the active tab
// <Router>
//       <Routes>
//         {/* <Route path="/" element={<ProductList />} /> */}
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   // Render content based on the active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case "Home":
//         return <div><Home title="Store E." /></div>;
//       case "Post":
//         return <div><Post /></div>;
//       case "About":
//         return <div>About us: We are a grocery store.</div>;
//       case "Sign in":
//         return <div><SignIn /></div>;
//       case "Grocery":
//         return <GroceryList />;
//       default:
//         return <div>Select a tab to view content.</div>;
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Grocery App</h1>
//       {/* Tab Navigation */}
//       <div className="tabs">
//         <button
//           className={activeTab === "Home" ? "active" : ""}
//           onClick={() => setActiveTab("Home")}
//         >
//           Home
//         </button>
//         <button
//           className={activeTab === "Post" ? "active" : ""}
//           onClick={() => setActiveTab("Post")}
//         >
//           Post
//         </button>
//         <button
//           className={activeTab === "About" ? "active" : ""}
//           onClick={() => setActiveTab("About")}
//         >
//           About
//         </button>
//         <button
//           className={activeTab === "Sign in" ? "active" : ""}
//           onClick={() => setActiveTab("Sign in")}
//         >
//           Sign in
//         </button>
//         <button
//           className={activeTab === "Grocery" ? "active" : ""}
//           onClick={() => setActiveTab("Grocery")}
//         >
//           Grocery
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="content">{renderContent()}</div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css"; // Add some basic styling
import Home from "./Home";
import SignIn from "./SignIn.jsx";
import Post from "./Post";
import { ThemeProvider } from "./ThemeContext";
import GroceryList from "./GroceryList";
import ProductDetails from "./ProductDetails"; // Import the missing component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  { createContext, useContext, useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <h1>Future Gen Store </h1>
        {/* Tab Navigation */}
        <div className="tabs">
          <Link to="/" className="tab">
            Home
          </Link>
          <Link to="/post" className="tab">
            Post
          </Link>
          <Link to="/about" className="tab">
            About
          </Link>
          <Link to="/signin" className="tab">
            Sign in
          </Link>
          <Link to="/grocery" className="tab">
            Store Items
          </Link>
        </div>

        {/* Tab Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home title="Store E." />} />
            <Route path="/post" element={<Post />} />
            <Route path="/about" element={<div>About us: We are a reliable store.</div>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/grocery" element={<GroceryList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;