import React from 'react'

const UtilityParts = ({title, demo, code}) => {
  return (
    <div>
      <section className="gui-mb-3">
      <h2 className="text-lg gui-font-bold gui-mb-2">{title}</h2>
      <div className="gui-mb-2 flex-col">{demo}</div>
      <pre className="language-html">
        <code>{code}</code>
      </pre>
    </section>
    </div>
  )
}

export default UtilityParts
