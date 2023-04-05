const ModalOverlay = (props) => {
  return (
    <>
      <div
        className="fixed w-full h-full z-30 opacity-50 bg-gray-900 pl-50 top-0"
        onClick={props.modalHandler}
      ></div>
    </>
  );
};

export default ModalOverlay;
