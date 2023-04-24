const Message = () => {
  return (
    <>
      <div className="relative m-16">
        <div>
          <span className="absolute -z-10  w-full h-[72%] sm:h-[23%] inset-1 bg-alliance-darker rounded-xl"></span>
          <button className="absolute py-1 z-10 px-3 -left-8 -top-2 -rotate-[10deg] black_border bg-alliance text-white font-bold">
            Hello Customer!
          </button>

          <div className="p-8 border border-black purple_border bg-white rounded-xl z-20 text-sm sm:text-lg">
            Thank you for reaching out to us. We would like to inform you that
            we currently have no tickets being processed for your account at
            this time. If you have any further questions or concerns, please do
            not hesitate to contact us. Best regards,
            <span className="font-mono text-alliance font-bold">
              {" "}
              Alliance Software Inc.{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
