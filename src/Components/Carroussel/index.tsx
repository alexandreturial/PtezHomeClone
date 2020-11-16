import React,{CSSProperties} from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Baner1Img from '../../Assets/baner1.webp';
import Baner2Img from '../../Assets/baner2.webp';
import Baner3Img from '../../Assets/baner3.webp';
import Baner4Img from '../../Assets/baner4.webp';
import Baner5Img from '../../Assets/baner5.webp';

import arrowLeft from '../../Assets/025-left-arrow-2.svg';
import arrowRight from '../../Assets/017-right-arrow-2.svg';

import { Container, Button, Indicator } from './styles';

const Carroussel: React.FC = () => {
  return (
    <Container>
        <Carousel 
        showThumbs={false} 
        showStatus={false} 
        useKeyboardArrows 
        infiniteLoop={true}
        autoPlay
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <Button type="button" onClick={onClickHandler} >
                    <img src={arrowLeft} />
                </Button>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <Button type="button" onClick={onClickHandler} title={label} rigth={15}>
                     <img src={arrowRight} />
                    
                </Button>
            )
        }

        renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
                return (
                    <Indicator
                        background={true}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                    />
                );
            }
            return (
                <Indicator
                    
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    role="button"
                    tabIndex={0}
                />
            );
        }}

        >
            <div>
                <img src={Baner1Img} />
            
            </div>
            <div>
                <img src={Baner2Img} />
                
            </div>
            <div>
                <img src={Baner3Img} />
            </div>
            <div>
                <img src={Baner4Img} />
            </div>
            <div>
                <img src={Baner5Img} />
            </div>
        </Carousel>
    </Container>
  );
}

export default Carroussel;