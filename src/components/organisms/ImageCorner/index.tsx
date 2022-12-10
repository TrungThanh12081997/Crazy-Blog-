/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { forwardRef } from "react";
import testImage from "assets/images/test.png";
import { TransformComponent } from "react-zoom-pan-pinch";


interface ImageCornerProps {
    onClick?: (e: React.MouseEvent) => any;
}

const ImageCornerRef: React.ForwardRefRenderFunction<HTMLDivElement | null, ImageCornerProps> = (
    { onClick },
    ref,
) => (
        <div className='px-6 py-24 relative bg-purple' >
            <div className='flex justify-center  items-center custom-cursor' ref={ref} onClick={onClick}>
                <TransformComponent>
                    <img  className='img-cursor' src={testImage} alt='alt' />
                </TransformComponent>
            </div>
        </div>
    );
const ImageCorner =  forwardRef(ImageCornerRef);
export default ImageCorner;
