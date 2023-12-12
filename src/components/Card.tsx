import '../style/card.css'

type Props = {
    question: string, 
    answer: string,
}

const Card = (props : Props) => {
    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 hover-text-black hover-text-red rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-redLogo duration-500 dark:text-white">{props.question}</h5>
                <p className="mb-3 font-normal duration-500 text-gray-700 dark:text-gray-400">{props.answer}</p>
            </div>

        </div>
    )
}

export default Card