

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import TopCategory from "./NewHomePageCustomer.jsx/TopCategory";

import LinkedSku from "./NewHomePageCustomer.jsx/Modals/LinkedSku";
import NotificationsModals from "./NewHomePageCustomer.jsx/Modals/NotifcationModals";
import Loading from "./components/Loading";
import OperationalRoutes from "./RetailerSide/Operational/OperationalRoutes";
const ConnectWalletModal = lazy(() =>
  import("./SmallPages/ConnectWalletModal")
);
const RoleSelectionModal = lazy(() =>
  import("./SmallPages/RoleSelectionModal")
);
const UtilityTokenCard = lazy(() => import("./SmallPages/UtilityTokenCard"));
const PaymentProcessCard = lazy(() =>
  import("./SmallPages/PaymentProcessCard")
);
const ProfileInformation = lazy(() => import("./Profile/ProfileInformation"));
const SubscriptionProfile = lazy(() => import("./Profile/SubscriptionProfile"));
const SkuModal = lazy(() => import("./SmallPages/SkuModal"));
const MySku = lazy(() => import("./Profile/MySku"));
const UtilityToken = lazy(() => import("./Profile/UtilityToken"));
const PersonalDetails = lazy(() => import("./ProfileDetails/PersonalDetails"));
const ContactDetails = lazy(() => import("./ProfileDetails/ContactDetails"));
const AdditionalInformation = lazy(() =>
  import("./ProfileDetails/AdditionalInformation")
);
const Filter = lazy(() => import("./Dashboard/Filter"));
const Home = lazy(() => import("./Layout/Home"));
const DashboardRoutes = lazy(() => import("./Dashboard/DashboardRoutes"));
const PrivacyPreference = lazy(() =>
  import("./ProfileDetails/PrivacyPreference")
);
const HomePage2 = lazy(() => import("./NewHomePageCustomer.jsx/Homepage2"));
const TopSku = lazy(() => import("./NewHomePageCustomer.jsx/TopSku"));
const HomeProductCard = lazy(() =>
  import("./NewHomePageCustomer.jsx/HomeProductCard")
);
const SessionExpiredModal = lazy(() =>
  import("./NewHomePageCustomer.jsx/SessionExpiredModal")
);
const SessionTimeoutModal = lazy(() =>
  import("./NewHomePageCustomer.jsx/SessionTimeOutModal")
);
const SkuOverlay = lazy(() => import("./NewHomePageCustomer.jsx/SkuOverlay"));
const PaymentDetailsCard = lazy(() =>
  import("./NewHomePageCustomer.jsx/PaymentDetailsCard")
);
const Setting = lazy(() => import("./Profile/Setting/Setting"));
const FeedbackForm = lazy(() => import("./Profile/Setting/FeedbackForm"));
const ContactSupport = lazy(() => import("./Profile/Setting/ContactSupport"));
const OverlayQR = lazy(() =>
  import("./NewHomePageCustomer.jsx/OverlaySKU/OverlayQR")
);
const OverlayMultiple = lazy(() =>
  import("./NewHomePageCustomer.jsx/OverlaySKU/OverlayMultiple")
);
// const PlansPricing = lazy(() =>
//   import("./NewHomePageCustomer.jsx/PlansPricing")
// );

const ExploreCategories = lazy(() =>
  import("./NewHomePageCustomer.jsx/Explore/ExploreCategories")
);
const ExploreBrands = lazy(() =>
  import("./NewHomePageCustomer.jsx/Explore/ExploreBrands")
);

const RetailerNear = lazy(() =>
  import("./NewHomePageCustomer.jsx/RetailerNear")
);

const CreatePassword = lazy(() => import("./ProfileDetails/CreatePassword"));
const AccountCredentialsPopup = lazy(() =>
  import("./NewHomePageCustomer.jsx/Modals/AccountCredentialsPopup")
);
const Store = lazy(() =>
  import("./NewHomePageCustomer.jsx/StoreInformation/Store")
);
const LoginForm = lazy(() => import("./ProfileDetails/LoginForm"));

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />

          {/* Like modals Start */}
          <Route path="/connect-wallet" element={<ConnectWalletModal />} />
          <Route path="/role-selection" element={<RoleSelectionModal />} />
          <Route path="/utility-token" element={<UtilityTokenCard />} />
          <Route path="/payment-process" element={<PaymentProcessCard />} />
          <Route
            path="/account-credentials"
            element={<AccountCredentialsPopup />}
          />
          <Route path="/sku-modal" element={<SkuModal />} />
          <Route path="/notifications" element={<NotificationsModals />} />
          {/* <Route path="/token" element={<TokensModal />} /> */}
          <Route path="/linked-sku" element={<LinkedSku />} />
          {/* Like modals End*/}

          {/* Profile routing start */}
          <Route path="/profile" element={<ProfileInformation />} />
          <Route
            path="/subscription-profile"
            element={<SubscriptionProfile />}
          />
          <Route path="/my-sku/*" element={<MySku />} />
          <Route path="/setting/*" element={<Setting />} />
          <Route path="/utility-tokens" element={<UtilityToken />} />
          {/* Profile routing end */}

          {/* Create user Profile Start */}
          <Route path="/login-page" element={<LoginForm />} />
          <Route path="/privacy-preference" element={<PrivacyPreference />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/contact-details" element={<ContactDetails />} />
          <Route
            path="/additional-information"
            element={<AdditionalInformation />}
          />
          <Route path="/create-password" element={<CreatePassword />} />
          {/* Create user Profile End */}

          {/* HOMEPAGE */}
          <Route path="/homepage" element={<HomePage2 />} />
          <Route path="/top-sku" element={<TopSku />} />
          <Route path="/top-category" element={<TopCategory />} />
          <Route path="/retailer-near" element={<RetailerNear />} />
          <Route path="/categories" element={<ExploreCategories />} />
          <Route path="/explore-brands" element={<ExploreBrands />} />
          <Route path="/home-product-card" element={<HomeProductCard />} />
          <Route path="/session-expired" element={<SessionExpiredModal />} />
          <Route path="/session-timeout" element={<SessionTimeoutModal />} />
          <Route path="/sku-overlay" element={<SkuOverlay />} />
          <Route
            path="/payment-card-details"
            element={<PaymentDetailsCard />}
          />
          <Route path="/overlay" element={<OverlayQR />} />
          <Route path="/overlay-multiple" element={<OverlayMultiple />} />
          <Route path="/store" element={<Store />} />
          {/* HOMEPAGE End */}

          <Route path="/filter" element={<Filter />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="/operational-manager/*" element={<OperationalRoutes />} />

          {/* <Route path="/account-page" element={<AccountPage />} />
          <Route path="/password-form" element={<PasswordForm />} />
          <Route path="/add-store-form" element={<AddStoreModal />} /> */}
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/contact-support" element={<ContactSupport />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
