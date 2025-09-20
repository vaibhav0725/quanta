import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark,gradientDark,dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const CodeBlock = async ({
    fileName,codeString,title,language
}:{
    fileName?: string,
    codeString: string,
    title?: string,
    language?: string,
}) => {
  return (
    <div className='w-2xl'>
        {
          title && <div className='font-semibold tracking-tight text-xl'>
            {title}
          </div>
        }
        <div className='relative'>
          {
              fileName && <div className='bg-neutral-800/30 text-white rounded-t-2xl px-5 py-3'> 
                {fileName}
              </div>
          }
          <div className="bottom-3 w-full max-h-96 overflow-y-scroll rounded-xl border-neutral-800 border-1">
              <SyntaxHighlighter language={language} style={dracula} customStyle={{
                background: "#000000",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                paddingBlock: 10,
              }}>
                {codeString}
              </SyntaxHighlighter>
          </div>
        </div>
    </div>
  );
};

