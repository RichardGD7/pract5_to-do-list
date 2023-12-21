import clsx from "clsx"

export default function Item ({text, onDelete}) {
    return(
        <article 
        className={clsx("border border-white rounded",
        "flex justify-between items-center",
        "p-2", 
        {"bg-red-500" : text === "lavar"})}>
            <span>{text}</span>
            <span className="bg-purple-500 rounded p-2 cursor-pointer hover:bg-purple-700" onClick={onDelete} >Done</span>
        </article>
    )
}