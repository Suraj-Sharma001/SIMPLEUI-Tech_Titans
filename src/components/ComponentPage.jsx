import Prism from 'prismjs';
import { useEffect } from 'react';

function ComponentPage({ title, description, code, children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div>
      <h1 className="gui-text-3xl gui-font-bold mt-3 ml-3 display-flex">{title}</h1>
      <p className="text-gray ml-3 gui-font-bold">{description}</p>

      <div className="ml-3 pl-3 border rounded bg-warning-50">
        {children}
      </div>

      <pre className="language-html ml-3">
        <code className="language-html ">{code}</code>
      </pre>
    </div>
  );
}

export default ComponentPage;
