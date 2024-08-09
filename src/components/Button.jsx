// eslint-disable-next-line react/prop-types
export default function Button({operador, fn}) {
    return (
        <button
            className="w-10 h-10 flex justify-center items-center rounded-full bg-lime-500 text-white hover:bg-lime-600 hover:outline-none hover:ring-2 hover:ring-of hover:ring-lime-600"
            onClick={fn}
        >
            {operador}
        </button>
    )
}
