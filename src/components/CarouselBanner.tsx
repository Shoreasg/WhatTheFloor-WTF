import Carousel from 'nuka-carousel';




const BannerImages: {
    href: string,
    src: string,
    alt: string,
    ImageWidth: number,
    ImageHeight: number,
    target: string
}[] = [
        { href: "https://soullesscitadel.com/mint/chapter-2", src: "/soulless_woman.png", alt: "soulless_logo", ImageWidth: 728, ImageHeight: 90, target: "_blank" }
    ]

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
                pagingDotsStyle: { fill: "grey", width: "10px", height: "10px" },
            }}
            autoplayInterval={5000}
            className="pb-10"
        >
            {BannerImages.map((item) => (
                <a href={item.href} target={item.target} key={item.alt}>
                    <img src={item.src} alt={item.alt} width={item.ImageWidth} height={item.ImageHeight} className="m-auto" />
                </a>
            ))}


        </Carousel>
    )
}

export default CarouselBanner