const Feedback = (props) => {
    return(
        <>
            <div className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100">
                <p>{props.message}</p>
            </div>
        </>
    )
}

export default Feedback