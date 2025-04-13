import Prism from 'prismjs';
import { useEffect } from 'react';

function ComponentPage({ title, description, code, children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6 p-4 border rounded bg-gray-50">{children}</div>
      <pre className="language-html">
        <code className="language-html">{code}</code>
      </pre>
    </div>
  );
}

export default ComponentPage;