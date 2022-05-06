import { useState, memo, FC } from "react";

type Props = {
  processing?: boolean;
  editMode: boolean;
  children: JSX.Element;
  onEditMode: () => void;
};

const defaultProps: Partial<Props> = {
  processing: false,
};

const SelectedItem: FC<Props> = ({ children, editMode, onEditMode }: Props) => {
  const [selectMode, setSelectMode] = useState(false);

  const onAction = () => {
    setSelectMode((prev) => !prev);
    onEditMode();
  };

  return (
    <>
      <button
        disabled={!selectMode && editMode}
        onClick={onAction}
        className={`   p-2 m-4  ${
          !selectMode && editMode
            ? " opacity-50 text-gray-700 "
            : " opacity-100 hover:cursor-pointer"
        } transition-all duration-300 `}
      >
        {children}
      </button>
    </>
  );
};

SelectedItem.defaultProps = defaultProps;
export default memo(SelectedItem);
