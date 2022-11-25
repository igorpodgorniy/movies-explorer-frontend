import { Route, Redirect } from "react-router-dom";

function SignRoute({
    mainComponent: MainComponent,
    headerComponent: HeaderComponent,
    additionalСlassForHeader,
    loggedIn,
    ...props
  }) {
  return (
    <Route>
      {() =>
        !loggedIn
          ? <>
              <HeaderComponent loggedIn={false} additionalСlass={additionalСlassForHeader} />
              <MainComponent {...props} />
            </>
          : <Redirect to="/" />
      }
    </Route>
  );
}

export default SignRoute;