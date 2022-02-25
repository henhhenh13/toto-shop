import { FaRegCircle } from 'react-icons/fa'

function LineDots(props) {
    return (
        <div className="my-10 text-center" >
            <h3 className="uppercase text-3xl">new arrivals</h3>
            <div className="relative mt-5">
                <div className="border-18 border-white border-solid bottom-0 pos-center bg-white">
                    <FaRegCircle className="text-xs" />
                </div>
                <div className="bg-black h-[1px] lg:w-[40%] w-[80%] mx-auto"></div>
            </div>
        </div >
    );
}

export default LineDots;