import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LandingPageAboutUs = React.lazy(() => import("pages/LandingPageAboutUs"));
const LandingPageServices = React.lazy(() =>
  import("pages/LandingPageServices"),
);
const LandingPageAnniversaries = React.lazy(() =>
  import("pages/LandingPageAnniversaries"),
);
const LandingPageDeathFuneralAnnouncements = React.lazy(() =>
  import("pages/LandingPageDeathFuneralAnnouncements"),
);
const LandingPageLostFound = React.lazy(() =>
  import("pages/LandingPageLostFound"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageLostFound />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/landingpagedeathfuneralannouncements"
            element={<LandingPageDeathFuneralAnnouncements />}
          />
          <Route
            path="/landingpageanniversaries"
            element={<LandingPageAnniversaries />}
          />
          <Route
            path="/landingpageservices"
            element={<LandingPageServices />}
          />
          <Route path="/landingpageaboutus" element={<LandingPageAboutUs />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
