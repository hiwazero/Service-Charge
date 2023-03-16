import CustomerForm from "./Pages/Admin/CustomerForm"
import HeaderContent from "./UI/Navigation/HeaderContent"

const Test = () => {
    const onClickHandler = () => {
        console.log('test')
    }

    return(
        <div className="fixed z-20 bg-gray-800 bg-opacity-30" onClick={onClickHandler}>
            <HeaderContent />
            <CustomerForm />
        </div>
    )
}

export default Test