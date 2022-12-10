import React from "react";

interface PinIdProps {
    id:number;
}

const PinId: React.FC<PinIdProps> = ({ id }) => (
    <div className=' border-2 border-white w-7 h-7 flex justify-center items-center rounded-circle bg-yellow text-white'>
        {id}
    </div>
);

export default PinId;
