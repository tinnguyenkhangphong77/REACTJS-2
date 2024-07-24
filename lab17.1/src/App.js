import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import AllQuotesPage from "./pages/QuotesPage";
import QuoteDetailPage from "./pages/QuoteDetailPage";
import NewQuotePage from "./pages/NewQuotePage";

const router = createBrowserRouter([
  {
    path: "/",

    errorElement: <ErrorPage />,
    children: [
      { path: "quotes", element: <AllQuotesPage /> },
      { path: "new-quote", element: <NewQuotePage /> },
      { path: "quotes/:quoteId", element: <QuoteDetailPage /> },
      { path: "/", element: <Navigate to="quotes" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
