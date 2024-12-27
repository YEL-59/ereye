import { Link } from "react-router-dom"


const Button = ({ btn_text }) => {
    return (
        <>

            <div>
                <Link>
                    <div className="px-5 py-3 text-lg font-medium border-0 w-[140px] rounded-lg shadow-sm bg-[#FFAD00] text-textcolor">
                        {btn_text}

                    </div>
                    </Link>

            </div>


        </>
    )
}

export default Button