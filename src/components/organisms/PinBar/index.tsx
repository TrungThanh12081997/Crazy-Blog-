import Image from "components/atoms/Image";
import React from "react";
import iconDecrement from "assets/images/ic_decrement.svg";
import iconIncrement from "assets/images/ic_increment.svg";
import iconRedo from "assets/images/ic_redo.svg";
import iconUndo from "assets/images/ic_undo.svg";
import classNames from "classnames";

interface PinBarProps {
    handleChangeActive?: () => void;
    active?: boolean;
    percent?: number;
    hide?: boolean;
    handleIncrePercent?: () => void;
    handleDecrePercent?: () => void;
    handleHidePinBar?: () => void;
    imageName?: string;
    onRedo?: () => void;
    onUndo?: () => void;
    disabledUndo?: boolean;
    disabledRedo?: boolean;
    disabledUndoAndRedo?: boolean;
}
const PinBar: React.FC<PinBarProps> = ({
    active,
    handleChangeActive,
    percent = 100,
    handleDecrePercent,
    handleIncrePercent,
    handleHidePinBar,
    imageName,
    onRedo,
    onUndo,
    disabledUndo,
    disabledRedo,
    disabledUndoAndRedo = false,
}) => (
    <div className='w-full py-8 px-6 flex justify-between items-center relative transition-all'>
        <div
            role='button'
            onKeyDown={handleHidePinBar}
            onClick={handleHidePinBar}
            className={classNames(
                "font-semibold cursor-pointer bg-white flex rounded-t items-center justify-center text-black08 text-pinHide absolute w-10 h-6 -top-6 left-2",
            )}
        >
            Hide
        </div>
        <div className='text-black text-description '>{imageName}</div>
        <div className='flex items-center w-max'>
            {!disabledUndoAndRedo && (
                <div className='flex mr-4 pr-4 border-r-black08 border-r-2	'>
                    <div
                        className={classNames(
                            "w-7 h-7 mr-2 hover:bg-black01 rounded-2",
                            disabledRedo ? "cursor-not-allowed " : "cursor-pointer",
                        )}
                        role='button'
                        onKeyDown={() => {
                            if (!disabledRedo && onRedo) {
                                onRedo();
                            }
                        }}
                        onClick={() => {
                            if (!disabledRedo && onRedo) {
                                onRedo();
                            }
                        }}
                    >
                        <Image src={iconRedo} ratio='1x1' alt='decrement' />
                    </div>
                    <div
                        role='button'
                        onKeyDown={() => {
                            if (!disabledUndo && onUndo) {
                                onUndo();
                            }
                        }}
                        className={classNames(
                            "w-7 h-7 ml-2 hover:bg-black01 rounded-2",
                            disabledUndo ? "cursor-not-allowed " : "cursor-pointer",
                        )}
                        onClick={() => {
                            if (!disabledUndo && onUndo) {
                                onUndo();
                            }
                        }}
                    >
                        <Image src={iconUndo} ratio='1x1' alt='decrement' />
                    </div>
                </div>
            )}
            <div className='text-black text-pin mr-4 flex '>
                <div
                    className={classNames(
                        "rounded-20 w-7 h-4 relative transition-all	",
                        active ? "bg-purpleMain" : "bg-gray",
                    )}
                    onClick={handleChangeActive}
                    role='button'
                    onKeyDown={handleChangeActive}
                >
                    <div
                        className={`rounded-circle bg-white w-3 h-3 absolute top-0.5 transition-all	 ${
                            active ? " right-0.5" : "left-0.5"
                        }`}
                    />
                </div>
                <div className='text-black ml-2 text-pin'>Show Pin</div>
            </div>

            <div className='flex items-center px-4 py-3'>
                <div
                    onClick={handleDecrePercent}
                    onKeyDown={handleDecrePercent}
                    className='w-2 h-2  cursor-pointer'
                    role='button'
                >
                    <Image src={iconDecrement} ratio='1x1' alt='decrement' />
                </div>
                <div className='text-pin text-black mx-3'>{`${percent}%`}</div>
                <div
                    onClick={handleIncrePercent}
                    onKeyDown={handleIncrePercent}
                    role='button'
                    className='w-2 h-2 cursor-pointer'
                >
                    <Image src={iconIncrement} ratio='1x1' alt='decrement' />
                </div>
            </div>
        </div>
    </div>
);
export default PinBar;
