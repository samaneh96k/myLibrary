import '../styles/globals.css'
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
 // import Font Awesome CSS
 import 'font-awesome/css/font-awesome.min.css';
// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StoreProvider } from '../Store/store';
function MyApp({ Component, pageProps }) {
  return  <StoreProvider>  <ToastContainer rtl /> <Component {...pageProps} /></StoreProvider >
}

export default MyApp
