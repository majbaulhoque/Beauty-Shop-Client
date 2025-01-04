import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AddIcon from '../../assets/images/add.png';
import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';

const SortableProduct = ({ id, img }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
        transition,
    };

    return (
        <div {...attributes} {...listeners} ref={setNodeRef} style={style} className="card h-full shadow">
            <div className="w-full h-64 overflow-hidden rounded-lg">
                <img src={img} alt="Our Product" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

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

    const getPosition = id => productData.findIndex((obj) => obj.id === id);

    const handleDragEnd = (e) => {
        const { active, over } = e;
        if (!over || active.id === over.id) return;

        setProductData((items) => {
            const originalPosition = getPosition(active.id);
            const latestPosition = getPosition(over.id);

            return arrayMove(items, originalPosition, latestPosition);
        });
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor)
    );

    return (
        <div className="max-w-7xl mx-auto mt-28">
            <h3 className="text-black font-bold text-center text-4xl mb-16">Our Products</h3>
            {isError && <h2 className="text-red-600 text-center text-3xl font-bold">{isError}</h2>}
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <SortableContext strategy={verticalListSortingStrategy} items={productData.map(product => product.id)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 max-w-6xl mx-auto mb-28">
                        {productData.map((product) => (
                            <SortableProduct key={product.id} id={product.id} img={product.img} />
                        ))}
                        {images.map((image, idx) => (
                            <div key={idx} className="card h-full shadow" style={{ touchAction: 'none' }}>
                                <div className="w-full h-64 overflow-hidden rounded-lg">
                                    <img src={URL.createObjectURL(image)} alt={`Uploaded ${idx}`} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))}
                        {(images.length === 0 || images.length < 4) && (
                            <div className="card flex justify-center items-center h-full rounded" onClick={handleImageUploadFile}>
                                <img src={AddIcon} className="h-64 w-64" alt="Add Icon" />
                                <input type="file" ref={inputFileRef} onChange={handleImageChange} style={{ display: 'none' }} />
                            </div>
                        )}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default OurProducts;
