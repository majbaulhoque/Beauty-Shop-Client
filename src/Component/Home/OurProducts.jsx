import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AddIcon from '../../assets/images/add.png';

const OurProducts = () => {
    const [productData, setProductData] = useState([]);
    const [isError, setIsError] = useState('');
    const [images, setImages] = useState([]);
    const inputFileRef = useRef(null);

    const getProductData = async () => {
        try {
            const res = await axios.get('/product.json');
            setProductData(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    const handleImageUploadFile = () => {
        inputFileRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImages(prevImages => [...prevImages, file]);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-28">
                <h3 className="text-black font-bold text-center text-4xl mb-20">Our Products</h3>
                {isError && <h2 className="text-red-600 text-center text-3xl font-bold">{isError}</h2>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 max-w-6xl mx-auto">
                    {productData?.map((product) => {
                        const { id, img } = product || {};
                        return (
                            <div key={id} className="card h-full shadow">
                                <div className="w-full h-64 overflow-hidden rounded-lg">
                                    <img src={img} alt="Our Product" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        );
                    })}
                    {images.map((image, index) => (
                        <div key={index} className="card h-full shadow">
                            <div className="w-full h-64 overflow-hidden rounded-lg">
                                <img src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                    {(images.length === 0 || images.length < 4) && (
                        <div className="card flex justify-center items-center h-full rounded shadow" onClick={handleImageUploadFile}>
                            <img src={AddIcon} className="h-64 w-64" alt="Add Icon" />
                            <input type="file" ref={inputFileRef} onChange={handleImageChange} style={{ display: 'none' }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
