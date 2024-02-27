import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "../Pages";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/Contact";
import RootLayout from "../Pages/Layout";
import QuickStartPage from "../Pages/learn";
import LearnLayout from "../Pages/learn/Layout";
import ThinkingReactPage from "../Pages/learn/ThinkingReact";
import Installation from "../Pages/learn/Installation";
import ContributePage from "../Pages/Contribute";
import LoginPage from "../Pages/Login";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../Pages/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn ? {email: "email@gmail.com"} : null

const router = createBrowserRouter(createRoutesFromElements(
  <>
    {/* Root Layout */}

    <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>

      <Route index element={<HomePage />}/>
      <Route path="contact" element={<ContactPage />}/>
      <Route path="about" element={<AboutPage />}/>
      <Route path="contribute" element={
        <ProtectedRoutes isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
          <ContributePage />
        </ProtectedRoutes>
      }/>
      <Route path="login" element={
        <ProtectedRoutes isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
          <LoginPage />
        </ProtectedRoutes>
      }/>
      
    </Route>
  
    {/* Learn Layout */}
    <Route path="/learn" element={<LearnLayout />}>
      <Route index element={<QuickStartPage />}/>
      <Route path="thinking-in-react" element={<ThinkingReactPage />}/>
      <Route path="installation" element={<Installation />}/>
    </Route>

    {/* Page Not Found */}
    <Route path="*" element={<PageNotFound />} />
  </>
));

export default router