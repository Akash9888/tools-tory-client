import React from "react";
import { Carousel } from "react-carousel-minimal";

const HomeCarousel = () => {
    const data = [
        {
            image: "https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/280014/pexels-photo-280014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/3930091/pexels-photo-3930091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/46240/drill-milling-milling-machine-cutting-tools-46240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/1409221/pexels-photo-1409221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            image: "https://images.pexels.com/photos/48799/drill-milling-milling-machine-drilling-48799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <div style={{ textAlign: "center" }}>
            <div
                style={
                    {
                        // padding: "0 20px",
                    }
                }>
                <Carousel
                    data={data}
                    time={2000}
                    width="100%"
                    height="500px"
                    // captionStyle={captionStyle}
                    // radius="10px"
                    // slideNumber={true}
                    // slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    // thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "800px",
                        // margin: "40px auto",
                    }}
                />
            </div>
        </div>
    );
};

export default HomeCarousel;
