import Image from 'next/future/image'
import Carousel from 'nuka-carousel';


const ImageWidth: number = 728;
const ImageHeight: number = 90;

const CarouselBanner = () => {
    return (
        <Carousel
            animation='fade'
            autoplay={true}
            autoplayReverse={true}
            wrapAround={true}
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            defaultControlsConfig={{
                pagingDotsClassName: "ml-4",
                pagingDotsStyle: { fill: "grey", width: "10px", height: "10px"},
            }}
            autoplayInterval={5000}
            className="pb-10"
        >
            <Image src="/WTF logo.png" alt="wtf-logo" width={ImageWidth} height={ImageHeight} className="m-auto"/>
        </Carousel>
    )
}

export default CarouselBanner