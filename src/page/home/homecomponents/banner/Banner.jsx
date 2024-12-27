import Start from "../../../../assets/icons/Start"
import Button from "../../../../shared/button/Button"
import Slider from "../slider/Slider";


const Banner = () => {
    const items = Array(5).fill(null);
    return (
        <>

            <section className="">
                <div className="flex justify-between gap-10 py-20 ">
                    <div className="left-side-div">
                        <div className="flex flex-col gap-10 ml-20">
                            <h1 className="text-6xl max-w-4xl leading-[70px] text-[#05164D] tracking-wider font-bold">Find your perfect Eyewear style</h1>
                            <p className="text-lg font-medium max-w-xl text-textcolor">Discover Stylish Eyewear for Every Occasion From Everyday Elegance to Bold Fashion Statements, Find the Perfect Pair to Match Your Unique Style and Enhance Your Vision</p>
                            <div className="flex justify-between">
                                <div> <Button btn_text={'SHOP NOW'} /></div>
                                <div>
                                    <div className="flex gap-5">
                                        <div class="flex -space-x-4 rtl:space-x-reverse">
                                            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                                            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="" />
                                            <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="" />
                                            <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">10K</a>
                                        </div>
                                        <div>
                                            <p className="text-textcolor font-medium pb-1">Satisfied Clients</p>
                                            <div className="flex space-x-1 ">
                                                {items.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="h-4 w-4 rounded-sm flex justify-center items-center bg-secoundary"
                                                    >
                                                        <Start />
                                                    </div>
                                                ))}
                                            
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right-side-div">
                        <div>
                            <Slider/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner