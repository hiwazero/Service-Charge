const ModalCard = (props) => {
    return(
        <div className="overflow-y-scroll fixed px-6 py-6 z-30 rounded-lg bg-white h-[60%] w-[80%] ml-[10%] mt-[20%] sm:w-[72%] sm:ml-[22%] sm:mt-[7%] w3-animate-top">
            {props.children}
        </div>
    )
}

export default ModalCard