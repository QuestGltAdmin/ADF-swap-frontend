import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from './Component/Layout';
import { Terms } from './Pages/Terms';
import { Privacy } from './Pages/Privacy';
import HomePage2 from './Pages/HomePage2';
import HomeLayout from './HomeComponent/HomeLayout';
import ScrollToTop from './Component/ScrollToTop';
import { NewSingleChainSwapMainnet } from './Pages/NewSingleChainSwapMainnet';
import { Exchange } from './Pages/Exchange';


function App() {
  return (
    <>
      <BrowserRouter>
          <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomeLayout><HomePage2 /></HomeLayout>} />

          <Route path="/terms" element={<HomeLayout><Terms /></HomeLayout>} />
          <Route path="/privacy" element={<HomeLayout><Privacy /></HomeLayout>} />
          <Route path="/*" element={<Navigate to={"/"} />} />
          <Route path="/swap-simple" element={<Layout hideWalletButton={true}><NewSingleChainSwapMainnet /></Layout>} />
          <Route path="/exchange" element={<Layout hideWalletButton={true}><Exchange /></Layout>} />
        </Routes>
          </ScrollToTop>
        {/* </Layout> */}
      </BrowserRouter>
    </>
  );
}

export default App;