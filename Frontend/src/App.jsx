import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import React from "react";
import CustomLoader from './components/CustomLoader'
const LazySignUp = React.lazy(() => import("./pages/Signup"));
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <React.Suspense
      fallback={
        <CustomLoader message="Please wait while we load the content..." />
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-Account" element={<LazySignUp />} />
      </Routes>
    </React.Suspense>
  );  
}

export default App;
