import axios from "axios";
import { useEffect, useState } from "react";

const OurProducts = () => {
    const [productData, setProductData] = useState([]);
    const [isError, setIsError] = useState(false);

    const getProductData = async () => {
        try {
            const res = await axios.get('/product.json');
            setProductData(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h3 className="text-black font-bold text-center text-4xl my-8">Our Products</h3>
                {isError !== '' && <h2 className="text-red-600 text-center text-3xl font-bold">{isError}</h2>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 max-w-6xl mx-auto">
                    {productData?.map((product) => {
                        const { id, img } = product || {};
                        return (
                            <div key={id} className="card w-full h-full shadow">
                                <div className="w-full h-64 overflow-hidden rounded-lg">
                                    <img src={img} alt="Our Product" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default OurProducts;
