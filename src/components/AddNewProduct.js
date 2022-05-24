import { useState } from "react";
const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const [isShowDetail, setIsShowDetail] = useState(false);
    const handleClickBtn = () => {
        //cách viết gọn: tên key = tên biến viết như này
        let object = {
            name, price, size, color
        }
        // cách viết rõ ràng: tên key khác tên biến nên viết như này
        // let object = {
        //     name:name, 
        //     price:price, 
        //     size:size, 
        //     color:color
        // }
        // console.log(">>>check data: ", object, JSON.stringify(object));

        

        let productList = localStorage.getItem("productList")
        if(productList) {
            let arr = JSON.parse(productList)
            arr.push((object))
            localStorage.setItem("productList", JSON.stringify(arr));
        }else{
            localStorage.setItem("productList", JSON.stringify([object]));
        }

        setName("");
        setPrice(0);
        setSize(0);
        setColor("");
        // console.log(">>> Check product list parse: ",JSON.parse(productList))
    }

    const handleHideShow = () => {
        setIsShowDetail(!isShowDetail)
    }


    return (
        <div>
            {
                isShowDetail === true &&

                <fieldset>
                    <legend>Add A New Product</legend>
                    <div className="input-product">
                        <label>Name:</label>
                        <input value={name} type="text" onChange={(event) => setName(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Price:</label>
                        <input value={price} type="text" onChange={(event) => setPrice(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Size:</label>
                        <input value={size} type="text" onChange={(event) => setSize(event.target.value)}></input>
                    </div>
                    <div className="input-product">
                        <label>Color:</label>
                        <input value={color} type="text" onChange={(event) => setColor(event.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}>+Add New</button>
                    </div>
                </fieldset>
            }
            {
                isShowDetail === true ? 
                <div onClick={() => { handleHideShow() }}> Hide this form</div> : 
                <div onClick={() => { handleHideShow() }}> Show the form</div>
            }

            <div>
                List product:
                {/* <div>
                    {localStorage.getItem("productList")}
                </div> */}
            </div>

        </div>
    )

}

export default AddNewProduct;