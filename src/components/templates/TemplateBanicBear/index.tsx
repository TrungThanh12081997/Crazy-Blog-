import CommentTable, { DataCommentType } from "components/organisms/CommentTable";
import classNames from "classnames";
import ImageCorner from "components/organisms/ImageCorner";
import PinBar from "components/organisms/PinBar";
import React, { useRef } from "react";
import useClickOutside from "hooks/useClickOutside";
import PinId from "components/molecules/PinId";
import { TransformWrapper } from "react-zoom-pan-pinch";
import Popup from "components/molecules/Popup";

interface TemplateBanicBearProps {}

const TemplateBanicBear: React.FC<TemplateBanicBearProps> = () => {
    const [arrayComment, setArrayComment] = React.useState<DataCommentType[]>([]);
    const [redo, setRedo] = React.useState<DataCommentType[][]>([]);
    const [undo, setUndo] = React.useState<DataCommentType[][]>([]);

    const popUpRef = useRef<HTMLDivElement>(null);
    const turnOffPopupsRef = useRef<HTMLDivElement>(null);

    const [percent, setPercent] = React.useState(100);
    const [dataEdit, setDataEdit] = React.useState<number>(-1);

    const [hideTable, setHideTable] = React.useState(true);
    const [hidePinBar, setHidePinBar] = React.useState(false);
    const [hidePopup, setHidePopup] = React.useState(true);
    const [hidePopupEdit, setHidePopupEdit] = React.useState(true);
    const [positionMouse, setPositionMouse] = React.useState({ x: -1, y: -1 });
    const [positionPin, setPositionPin] = React.useState<{ x: number; y: number }[]>([]);
    const [positionPinUndo, setPositionPinUndo] = React.useState<{ x: number; y: number }[][]>([]);
    const [comment, setComment] = React.useState("");

    useClickOutside(turnOffPopupsRef, () => {
        setHidePopup(true);
        setHidePopupEdit(true);
    });

    return (
        <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={2}
            panning={{
                disabled: true,
            }}
            wheel={{
                disabled: true,
            }}
        >
            {({ zoomIn, zoomOut }) => (
                <div className='relative max-h-screen w-screen'>
                    {positionPin &&
                        positionPin.length > 0 &&
                        positionPin.map((item, idx) => (
                            <>
                                <div
                                    key={`${idx.toString()}`}
                                    className={classNames("absolute z-10 cursor-pointer")}
                                    style={{
                                        top: `${item?.y}px`,
                                        left: `${item?.x}px`,
                                    }}
                                    role='button'
                                    onKeyDown={(option) => {
                                        option.stopPropagation();

                                        setHidePopup(true);
                                        setHidePopupEdit(false);
                                        setDataEdit(idx);
                                    }}
                                    onClick={(option) => {
                                        option.stopPropagation();
                                        setPositionMouse({ x: option.clientX, y: option.clientY });
                                        setHidePopup(true);
                                        setHidePopupEdit(false);
                                        setDataEdit(idx);
                                    }}
                                >
                                    <PinId id={idx + 1} />
                                </div>
                                <div
                                    className={classNames(
                                        "fixed z-10 ",
                                        positionMouse && !hidePopupEdit
                                            ? ""
                                            : "opacity-1 invisible",
                                    )}
                                    style={{
                                        top: `${positionMouse.y}px`,
                                        left: `${positionMouse.x}px`,
                                    }}
                                    role='button'
                                    onKeyDown={(e) => e.stopPropagation()}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Popup
                                        variant='edit'
                                        disabledIconNext={dataEdit === arrayComment.length - 1}
                                        disabledIconPrev={dataEdit === 0}
                                        handlePrev={() => {
                                            if (dataEdit > 0) {
                                                setDataEdit(dataEdit - 1);
                                            }
                                        }}
                                        handleNext={() => {
                                            if (dataEdit < arrayComment.length - 1) {
                                                setDataEdit(dataEdit + 1);
                                            }
                                        }}
                                        handleDelete={() => {
                                            setHidePopupEdit(true);
                                            arrayComment.splice(dataEdit, 1);
                                            positionPin.splice(dataEdit, 1);
                                        }}
                                        handleClose={() => setHidePopupEdit(true)}
                                        description={arrayComment[dataEdit]?.description}
                                    />
                                </div>
                            </>
                        ))}

                    <div
                        className={classNames("z-1 relative transition-all")}
                    >
                        <div className='flex w-full'>
                            <div className='w-full' ref={popUpRef}>
                                <ImageCorner
                                    onClick={(e: React.MouseEvent) => {
                                        setPositionMouse({ x: e.clientX, y: e.clientY });
                                        setHideTable(false);
                                        setHidePopupEdit(true);
                                        setHidePopup(false);
                                    }}
                                    ref={turnOffPopupsRef}
                                />
                            </div>
                            <div
                                className={`max-w-xs  w-1/4	 h-full absolute top-0 right-0 transition-all ${
                                    hideTable ? "translate-x-full" : ""
                                }`}
                            >
                                <CommentTable
                                    handleNext={() => setHideTable(!hideTable)}
                                    dataComment={arrayComment}
                                    onClick={(id: number) => {
                                        setHidePopup(false);
                                        setDataEdit(id);
                                    }}
                                />
                            </div>
                        </div>
                        <PinBar
                            handleHidePinBar={() => setHidePinBar(!hidePinBar)}
                            handleDecrePercent={() => {
                                if (percent > 50) {
                                    setPercent(percent - 5);
                                    zoomOut(0.05);
                                }
                            }}
                            handleIncrePercent={() => {
                                if (percent < 200) {
                                    setPercent(percent + 5);
                                    zoomIn(0.05);
                                }
                            }}
                            percent={percent}
                            active={!hideTable}
                            handleChangeActive={() => setHideTable(!hideTable)}
                            imageName='Flamingo-concept.png'
                            onRedo={() => {
                                if (redo.length > 0) {
                                    setArrayComment(redo[redo.length - 1]);
                                    redo.pop();
                                    positionPin.pop();
                                }
                            }}
                            onUndo={() => {
                                if (undo.length > 0) {
                                    setArrayComment(undo[undo.length - 1]);
                                    setPositionPin(positionPinUndo[positionPinUndo.length - 1]);
                                }
                            }}
                        />
                    </div>
                    <div
                        role='button'
                        onKeyDown={(e) => e.stopPropagation()}
                        className={classNames(
                            "absolute z-10 transion-all",
                            positionMouse && !hidePopup ? "none" : "opacity-1 invisible",
                        )}
                        style={{
                            top: `${positionMouse.y}px`,
                            left: `${positionMouse.x}px`,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Popup
                            id={arrayComment.length + 1}
                            inputProps={{
                                placeholder: "Add a comment...",
                                onChange: (e) => setComment(e.target.value),
                                value: comment,
                            }}
                            onSubmit={async () => {
                                if (comment.length > 0) {
                                    await setArrayComment([
                                        ...arrayComment,
                                        {
                                            id: arrayComment.length + 1,
                                            description: comment,
                                        },
                                    ]);
                                    await setHidePopup(true);
                                    await setPositionPin([...positionPin, positionMouse]);
                                    await setComment("");
                                    await setRedo([...redo, [...arrayComment]]);
                                    await setPositionPinUndo([
                                        ...positionPinUndo,
                                        [...positionPin],
                                    ]);
                                    setUndo([...undo, [...arrayComment]]);
                                }
                            }}
                        />
                    </div>
                </div>
            )}
        </TransformWrapper>
    );
};

export default TemplateBanicBear;
