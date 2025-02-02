import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { AboutUs } from "./component/AboutUs";
import { Footer } from "./component/Footer";
import { ContactUs } from "./component/ContactUs";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { SideBar } from "./component/Admin/SideBar";
import { AdminNavbar } from "./component/Admin/AdminNavbar";
import { TotalUser } from "./component/Admin/TotalUser";
import { TotalProducts } from "./component/Admin/TotalProducts";
import { BiogasCard } from "./component/Admin/BiogasCard";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth(); // Get the user from context

  if (user === null) {
    return <Navigate to="/login" replace />; // If user is not authenticated, redirect to login
  }

  return element; // If authenticated, render the element (admin page)
};

// Layout for all pages
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />} {/* Show Navbar only if not on admin page */}
      {children}
      {!isAdminPage && <Footer />} {/* Show Footer only if not on admin page */}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            
            <Route
              path="/admin/*"
              element={
                <PrivateRoute
                  element={
                    <div className="flex flex-col h-fixed w-screen">
                      <AdminNavbar />
                      <div className="flex flex-1 overflow-auto">
                        <SideBar />
                        <div className="container mx-auto mt-4">
                          <Routes>
                            <Route path="BiogasCard" element={<BiogasCard />} />
                            <Route path="TotalUser" element={<TotalUser />} />
                            <Route path="TotalProducts" element={<TotalProducts />} />
                            <Route path="settings" element={<h1 className="text-2xl">Settings Page</h1>} />
                          </Routes>
                        </div>
                      </div>
                    </div>
                  }
                />
              }
            />
          </Routes>
        </AppLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
