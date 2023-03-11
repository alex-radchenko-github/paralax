import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./AdvancedBanner";
import "./styles.css";
import {BannerLayer} from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import {Goodnight} from "./Goodnight";

export default function App() {
  return (
      <ParallaxProvider>
        <AdvancedBannerTop />
          <Goodnight/>
        <div className="center full">
          <h1 className="headline gray">Goodnight.</h1>
        </div>
      </ParallaxProvider>
  );
}
