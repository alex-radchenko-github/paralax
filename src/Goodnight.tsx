import { ParallaxBanner } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

export const Goodnight = () => {

    const headline: BannerLayer = {
        translateY: [0, 50],
        scale: [0, 3, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className="inset center">
                <h3 className="headline white">Goodnight!</h3>
            </div>
        )
    };

    return (
        <ParallaxBanner
            layers={[headline]}
            className="full"
        />
    );
};
