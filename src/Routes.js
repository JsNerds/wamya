import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@material-ui/styles";
import MuiTheme from "./theme";

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from "./layout-blueprintsBack";


// Example PagesFront
const LandingPage = lazy(() => import("./PagesBack/LandingPage"));
const Customers = lazy(() => import("./pages/back/Customers"));
const Vehicules = lazy(() => import("./pages/back/Vehicules"));
const addVehicule = lazy(() => import("./pages/back/addVehicule"));
const Deposits = lazy(() => import("./pages/back/Deposits"));
const AdminDashborad = lazy(() => import("./pages/back/AdminDashboard"));
const Packages = lazy(() => import("./pages/back/Packages"));
const Payments = lazy(() => import("./pages/back/Payments"));
const Entreprises = lazy(() => import("./pages/back/Entreprises"));
const UpdateCustoomer = lazy(()=> import("./pages/back/UpdateCustomer"));
const UpdateCompany = lazy(()=> import("./pages/back/UpdateCompany"));
const Customer = lazy(()=> import("./pages/back/Customer"));
const Company = lazy(()=> import("./pages/back/Company"));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">Please wait while we load data</div>
            </div>
          }
        >
          <Switch>
            <Redirect exact from="/" to="/AdminDashborad" />
            <Route path={["/LandingPage"]}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route path="/LandingPage" component={LandingPage} />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                "/AdminDashborad",
                "/Customers",
                "/Vehicules",
                "/addVehicule",
                "/Deposits",
                "/Packages",
                "/Payments",
                "/Entreprises",
                "/UpdateCustomer/:id",
                "/UpdateCompany/:id",
                "/CustomerDetails/:id",
                "/CompanyDetails/:id",
              ]}
            >
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route path="/AdminDashborad" component={AdminDashborad} />
                    <Route path="/Packages" component={Packages} />
                    <Route path="/Vehicules" component={Vehicules} />
                    <Route path="/addVehicule" component={addVehicule} />
                    <Route path="/Deposits" component={Deposits} />
                    {/* Cusomer & Entreprise Module*/}
                    <Route path="/Customers" component={Customers} />
                    <Route path="/Payments" component={Payments} />
                    <Route path="/Entreprises" component={Entreprises} />
                    <Route path="/UpdateCustomer/:id" component={UpdateCustoomer} />
                    <Route path="/UpdateCompany/:id" component={UpdateCompany} />
                    <Route path="/CustomerDetails/:id" component={Customer} />
                    <Route path="/CompanyDetails/:id" component={Company} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;
