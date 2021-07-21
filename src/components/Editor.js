export default function Editor(props){
    return (
        <>
            <h2 className="teal-h2">Editor</h2>
            <textarea className="textarea-input" onChange={props.onUpdate} value={props.markdownText}></textarea>
        </>
    )
}