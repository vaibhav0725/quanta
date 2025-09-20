export const HighLighter = ({text}:{text:string}) => {
    return (
        <span className="text-7xl text-white border-l-4 border-green-600 bg-gradient-to-r from-green-800/40 to-none inline-block pl-2">
            {text}
        </span>
    )
}