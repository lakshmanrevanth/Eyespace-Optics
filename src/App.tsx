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
import AdminLogin from "./admin/adminlogin/AdminLogin";
import AdminPage from "./admin/adminlogin/AdminPage";
import EyeCareServices from "./screens/services/ServicePage";
import BlogPages from "./Blog/BlogPages";
import BlogInsertionForm from "./Blog/BlogPageInsertion";
import ProductsSection from "./components/ProductsSection";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <ServicesSectionSpecialties />
      <ServicesSection />
      <ProductsSection />
      <BlogSection />
      <SubscribeComponent />
    </>
  );
};

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="w-full  mt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schedule" element={<AppointmentPage />} />
              <Route path="/products" element={<EyeOpticalInfo />} />
              <Route
                path="/products/opticallens"
                element={<EyeOpticalInfo />}
              />
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
              <Route
                path="/products/Luxury-brands"
                element={<BrandShowcase />}
              />
              <Route
                path="/products/Clip-ons"
                element={<ClipOnsLandingPage />}
              />
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
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-page" element={<AdminPage />} />

              <Route path="/blog/blog-pages" element={<BlogPages />} />
              <Route
                path="/blog/blog-insertion"
                element={<BlogInsertionForm />}
              />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
