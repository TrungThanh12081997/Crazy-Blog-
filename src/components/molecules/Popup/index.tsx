import Image from "components/atoms/Image";
import React from "react";
import iconTrash from "assets/images/ic_trash.svg";
import iconClose from "assets/images/ic_close.svg";
import iconNext from "assets/images/ic_arrow_right.svg";
import iconPrev from "assets/images/ic_arrow_left.svg";
import iconNextDisabled from "assets/images/ic_arrow_right_disabled.svg";
import iconPrevDisabled from "assets/images/ic_arrow_left_disabled.svg";
import classNames from "classnames";

import PinId from "../PinId";

export type VariantPopup = "edit" | "";
interface PopupProps {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    id?: number;
    onSubmit?: () => void;
    variant?: VariantPopup;
    description?: string;
    handleDelete?: () => void;
    handleClose?: () => void;
    handleNext?: () => void;
    handlePrev?: () => void;
    disabledIconPrev?: boolean;
    disabledIconNext?: boolean;
}

const Popup: React.FC<PopupProps> = React.forwardRef(
    ({
        inputProps,
        id,
        onSubmit,
        variant,
        description,
        handleDelete,
        handleClose,
        handleNext,
        handlePrev,
        disabledIconPrev = false,
        disabledIconNext = false,
    }) => (
        <div className='flex'>
            {!variant && (
                <>
                    {id && (
                        <div className='mr-4'>
                            <PinId id={id} />
                        </div>
                    )}
                    <div className='bg-white rounded-lg px-4 py-3 w-80 relative'>
                        <input
                            className='text-black08 text-pin outline-none mb-4'
                            {...inputProps}
                        />
                        <div
                            className='border-gray border-t-2 pt-4 flex justify-end'
                            role='button'
                            onClick={onSubmit}
                            onKeyDown={onSubmit}
                        >
                            <button
                                className=' rounded hover:bg-purpleMain py-2 px-3 transition-all text-purpleMain hover:text-white '
                                type='button'
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                </>
            )}
            {variant === "edit" && (
                <>
                    {id && <PinId id={id} />}
                    <div className='bg-white rounded-lg px-4 py-3 w-80 relative'>
                        <div className='flex items-center justify-between py-4'>
                            <div className='flex'>
                                <div
                                    className={classNames(
                                        "w-4 h-4 mr-2 rounded-sm",
                                        !disabledIconPrev
                                            ? "cursor-pointer hover:bg-purple"
                                            : "cursor-not-allowed	",
                                    )}
                                    onClick={() => !disabledIconPrev && handlePrev && handlePrev()}
                                    onKeyDown={() =>
                                        !disabledIconPrev && handlePrev && handlePrev()
                                    }
                                    role='button'
                                >
                                    <Image
                                        src={disabledIconPrev ? iconPrevDisabled : iconPrev}
                                        ratio='1x1'
                                        alt=''
                                    />
                                </div>
                                <div
                                    className={classNames(
                                        "w-4 h-4 ml-2  rounded-sm",
                                        !disabledIconNext
                                            ? "cursor-pointer hover:bg-purple"
                                            : "cursor-not-allowed	",
                                    )}
                                    onClick={() => !disabledIconNext && handleNext && handleNext()}
                                    onKeyDown={() =>
                                        !disabledIconNext && handleNext && handleNext()
                                    }
                                    role='button'
                                >
                                    <Image
                                        src={disabledIconNext ? iconNextDisabled : iconNext}
                                        ratio='1x1'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='flex'>
                                <div
                                    className='w-4 h-4 mr-2 cursor-pointer'
                                    onClick={handleDelete}
                                    onKeyDown={handleDelete}
                                    role='button'
                                >
                                    <Image src={iconTrash} ratio='1x1' alt='' />
                                </div>
                                <div
                                    className='w-4 h-4 ml-2 cursor-pointer'
                                    onClick={handleClose}
                                    onKeyDown={handleClose}
                                    role='button'
                                >
                                    <Image src={iconClose} ratio='1x1' alt='' />
                                </div>
                            </div>
                        </div>

                        <div className='border-gray border-t-2 pt-4 flex'>
                            <div className='text-black text-description'>{description}</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    ),
);
export default Popup;
