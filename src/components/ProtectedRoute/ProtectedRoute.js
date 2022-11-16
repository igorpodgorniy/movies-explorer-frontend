import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
    mainComponent: MainComponent,
    headerComponent: HeaderComponent,
    footerComponent: FooterComponent,
    additionalСlassForHeader: additionalСlass,
    loggedIn,
    ...props
  }) {
  return (
    <Route>
      {() =>
        loggedIn
          ? <>
              <HeaderComponent loggedIn={loggedIn} additionalСlass={additionalСlass} />
              <main>
                <MainComponent {...props} />
              </main>
              {FooterComponent && <FooterComponent />}
            </>
          : <Redirect exact to="./signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;