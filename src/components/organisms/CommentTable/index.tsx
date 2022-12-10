import Image from "components/atoms/Image";
import React from "react";
import iconNext from "assets/icons/ic_next.svg";
import PinId from "components/molecules/PinId";

export type DataCommentType = {
    id: number;
    description: string;
};
interface CommentTableProps {
    dataComment?: DataCommentType[];
    handleNext?: () => void;
    onClick?: (id: number) => void;
}

const CommentTable: React.FC<CommentTableProps> = ({ dataComment, handleNext, onClick }) => (
    <div className='bg-white h-full px-6 pt-6 relative '>
        <h1 className='font-semibold	text-black	text-title'>Comments</h1>
        <div
            onClick={handleNext}
            onKeyDown={handleNext}
            role='button'
            className='cursor-pointer	 absolute top-6 -left-6 w-6 h-6 bg-white'
        >
            <Image src={iconNext} ratio='1x1' />
        </div>
        {dataComment &&
            dataComment.length > 0 &&
            dataComment.map((item, idx) => (
                <div
                    className='flex items-start justify-between	cursor-pointer my-6'
                    key={`datacomment-${idx.toString()}`}
                    role='button'
                    onClick={() => onClick && onClick(item?.id)}
                    onKeyDown={() => onClick && onClick(item?.id)}
                >
                    <div className=' overflow-hidden w-7 h-7  mr-4 '>
                        {/* <div className=' rounded-circle border-3 h-full bg-yellow text-center  border-white text-white'>
                            {" "}
                            {item.id}
                        </div> */}
                        <PinId id={idx + 1}/>
                    </div>
                    <div className='font-description w-fit text-black'>{item?.description}</div>
                </div>
            ))}
    </div>
);

export default CommentTable;
