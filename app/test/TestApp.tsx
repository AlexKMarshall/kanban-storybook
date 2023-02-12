import IndexRoute from "~/routes";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

type TestAppProps = {
  url: string;
};

export function TestApp({ url }: TestAppProps) {
  const router = createMemoryRouter([{ path: "/", element: <IndexRoute /> }], {
    initialEntries: [url],
  });

  return <RouterProvider router={router} />;
}
