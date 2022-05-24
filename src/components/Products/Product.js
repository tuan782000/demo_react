import "./Product.scss";
import snaker1 from "../../assets/images/snaker1.jpg";
import snaker2 from "../../assets/images/snaker2.jpg";
import snaker3 from "../../assets/images/snaker3.jpg";
import snaker4 from "../../assets/images/snaker4.jpg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const images = [
    snaker1,
    snaker2,
    snaker3,
    snaker4
];

const Product = () => {
    const [currentUpImg, setCurrentUpImg] = useState(snaker1);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClickPreviewImg = () => {
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index);
        setIsOpen(true);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={() => handleClickPreviewImg()}/>
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={snaker1} onClick={() => setCurrentUpImg(snaker1)} className={currentUpImg === snaker1 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snaker2} onClick={() => setCurrentUpImg(snaker2)}className={currentUpImg === snaker2 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snaker3} onClick={() => setCurrentUpImg(snaker3)} className={currentUpImg === snaker3 ? "active" : ""}/>
                        </div>
                        <div className="img-small">
                            <img src={snaker4} onClick={() => setCurrentUpImg(snaker4)} className={currentUpImg === snaker4 ? "active" : ""}/>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày chạy bộ</div>
                    <div className="price">3.500.000 đ</div>
                    <div className="size">Size: 30</div>
                    <div className="action">
                        <label className="quantity">Số lượng</label>
                        <input type="number" min={1} value={1} ></input>
                        <button className="buy">Chọn mua</button>
                    </div>
                </div>
            </div>
            {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}

            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>            
                setPhotoIndex( (photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
            }
            animationDisabled = {true}
            animationDuration = {500}
          />
        )}
        </div>
    )
}

export default Product;