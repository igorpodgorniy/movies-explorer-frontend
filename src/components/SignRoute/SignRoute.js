import { Route, Redirect } from "react-router-dom";

function SignRoute({
    mainComponent: MainComponent,
    headerComponent: HeaderComponent,
    additional–°lassForHeader,
    loggedIn,
    ...props
  }) {
  return (
    <Route>
      {() =>
        !loggedIn
          ? <>
              <HeaderComponent loggedIn={false} additional–°lass={additional–°lassForHeader} />
              <MainComponent {...props} />
            </>
          : <Redirect to="/" />
      }
    </Route>
  );
}

export default SignRoute;