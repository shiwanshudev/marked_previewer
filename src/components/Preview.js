import marked from 'marked';

export default function Preview(props){
    return (<>
        <h2 class="teal-h2">Output</h2>
        <div dangerouslySetInnerHTML={{__html: marked(props.markdownText)}}></div>
    </>)
}