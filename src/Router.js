import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Error404 } from "./components/Error404";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
