import React from 'react'

const UtilityParts = ({title, demo, code}) => {
  return (
    <div>
      <section className="gui-mb-8">
      <h2 className="gui-text-lg gui-font-bold gui-mb-2">{title}</h2>
      <div className="gui-mb-2">{demo}</div>
      <pre className="language-html">
        <code>{code}</code>
      </pre>
    </section>
    </div>
  )
}

export default UtilityParts
