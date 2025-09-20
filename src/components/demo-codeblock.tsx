import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark,gradientDark,dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const DemoCodeBlock = ({
    fileName,codeString,title,language
}:{
    fileName?: string,
    codeString: string,
    title?: string,
    language?: string,
}) => {
  return (
    <div className='mt-5'>
      <div className="w-full max-h-[35rem] bg-black overflow-y-scroll custom-scrollbar rounded-xl border-neutral-800 border-1">
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
  );
};

