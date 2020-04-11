import React from 'react'
import  { Carousel } from 'react-bootstrap'

const CarouselBox = props => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' src='https://images.wallpaperscraft.ru/image/volny_chb_priboj_136104_1920x1080.jpg' alt='' height={'1000'} width={'1300'}/>
                <Carousel.Caption>
                <h3>Sea</h3>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='d-block w-100' src='https://i.pinimg.com/originals/ba/e7/0e/bae70e63625b328fd20c917225dccb6f.jpg' alt='' height={'1000'} width={'1300'}/>
                <Carousel.Caption>
                <h3>Ocean</h3>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='d-block w-100' src='https://i.pinimg.com/originals/85/15/79/85157948f93fabfa79110d3706fe1bec.jpg' alt='' height={'1000'} width={'1300'}/>
                <Carousel.Caption>
                <h3>Beach</h3>
            </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default CarouselBox