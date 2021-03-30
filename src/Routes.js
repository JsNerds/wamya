import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprintsBack';

// Example PagesFront
const LandingPage = lazy(() => import('./PagesBack/LandingPage'));
<<<<<<< HEAD
const Customers = lazy(() => import('./pages/back/Customers'));
const Vehicules = lazy(() => import('./pages/back/Vehicules'));
=======
>>>>>>> 7acb9d8a91c2b33c2fd5501085ebed0ab5d200f4
const AdminDashborad = lazy(() => import('./pages/back/AdminDashboard'));
const Packages = lazy(() => import('./pages/back/Packages'));


{/** Cusomer & Entreprise Module**/}
const Customers = lazy(() => import('./pages/back/Customers'));
const Payments = lazy(() => import('./pages/back/Payments'));
const Entreprises = lazy(() => import('./pages/back/Entreprises'));

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
    type: 'tween',
    ease: 'anticipate',
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
            <Route path={['/LandingPage']}>
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
                '/AdminDashborad',
                '/Customers',
<<<<<<< HEAD
                '/Vehicules',
                '/Packages',
              ]}
            >
=======
                '/Packages',

                /** Cusomer & Entreprise Module **/

                '/Customers',
                '/Payments',
                '/Entreprises',
                '/UpdateCustomer'
              ]}>
>>>>>>> 7acb9d8a91c2b33c2fd5501085ebed0ab5d200f4
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
<<<<<<<
                    transition={pageTransition}>
                    <Route
                      path="/AdminDashborad"
                      component={AdminDashborad}
                    />
                    <Route
                        path="/Customers"
                        component={Customers}
                    />
                    <Route
                        path="/Packages"
                        component={Packages}
                    />
=======
<<<<<<< HEAD
                    transition={pageTransition}
                  >
                    <Route path="/AdminDashborad" component={AdminDashborad} />
                    <Route path="/Customers" component={Customers} />
                    <Route path="/Vehicules" component={Vehicules} />
                    <Route path="/Packages" component={Packages} />
=======
                    transition={pageTransition}>
                    <Route
                      path="/AdminDashborad"
                      component={AdminDashborad}
                    />
                    <Route
                        path="/Customers"
                        component={Customers}
                    />
                    <Route
                        path="/Packages"
                        component={Packages}
                    />


                    {/** Cusomer & Entreprise Module**/}
                    <Route
                        path="/Customers"
                        component={Customers}
                    />
                    <Route
                        path="/Payments"
                        component={Payments}
                    />
                    <Route
                        path="/Entreprises"
                        component={Entreprises}
                    />
                    <Route
                        path="/UpdateCustomer"
                        component={Entreprises}
                    />

>>>>>>> 7acb9d8a91c2b33c2fd5501085ebed0ab5d200f4
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
