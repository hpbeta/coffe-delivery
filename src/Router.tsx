import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./components/Main";
import { Checkout } from "./components/Checkout";
import { Finished } from "./components/Finished";
import { DefaultLayout } from "./Layouts/DefaultLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/finished" element={<Finished />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
