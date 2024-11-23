import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import AppointmentPage from "./components/booking/AppointmentPage";
import Footer from "./components/Footer";
import ServicesSectionSpecialties from "./components/specialties";
import EyeOpticalInfo from "./screens/products/OpticalLens";
import FramesAndSunglassesInfo from "./screens/products/FramesAndGlasses";
import SpecialContactLensInfo from "./screens/products/contactlens";
import MyopiaManagementServiceInfo from "./screens/services/MyopiaManagementService";
import SwimmingGogglesPage from "./screens/products/SwimmingGoggles";
import SubscribeComponent from "./components/Subscribe";
import BlogSection from "./components/Blog";
import BrandShowcase from "./screens/products/LuxuryBrands";
import ClipOnsLandingPage from "./screens/products/ClipOns";
import AIProgressiveLensLandingPage from "./screens/products/AiProgessiveLens";
import ShopInStoreLandingPage from "./screens/services/ShopInStore";
import EyeTestingConsultationPage from "./screens/services/EyeTestingEyeWearConsultation";
import ContactLensFittingsPage from "./screens/services/ContactLensesFittings";
import BookingsPage from "./admin/BookingPage";
import BlogPage from "./Blog/BlogPage";
import AdminLogin from "./admin/adminlogin/AdminLogin";
import AdminPage from "./admin/adminlogin/adminpage";
import EyeCareServices from "./screens/services/ServicePage";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <ServicesSectionSpecialties />
      <ServicesSection />
      <BlogSection />
      <SubscribeComponent />
      <Footer />
    </>
  );
};

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<AppointmentPage />} />
        <Route path="/products" element={<EyeOpticalInfo />} />
        <Route path="/products/opticallens" element={<EyeOpticalInfo />} />
        <Route
          path="/products/framesandsunglasses"
          element={<FramesAndSunglassesInfo />}
        />
        <Route
          path="/products/contactlens"
          element={<SpecialContactLensInfo />}
        />
        <Route
          path="/products/ai-progressive-lens"
          element={<AIProgressiveLensLandingPage />}
        />
        <Route path="/products/Luxury-brands" element={<BrandShowcase />} />
        <Route path="/products/Clip-ons" element={<ClipOnsLandingPage />} />
        <Route
          path="/products/Swimming-goggles"
          element={<SwimmingGogglesPage />}
        />
        <Route
          path="/services/myopia-management-service"
          element={<MyopiaManagementServiceInfo />}
        />
        <Route
          path="/services/shop-in-store"
          element={<ShopInStoreLandingPage />}
        />
        <Route
          path="/services/eye-wearing-&-testing-consultation"
          element={<EyeTestingConsultationPage />}
        />
        <Route
          path="/services/contact-lenses-fittings"
          element={<ContactLensFittingsPage />}
        />
        <Route path="/admin/admin-page" element={<BookingsPage />} />
        <Route path="/blog/blog-page" element={<BlogPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/services/services" element={<EyeCareServices />} />
      </Routes>
    </Router>
  );
};

export default App;
