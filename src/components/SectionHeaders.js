import React from 'react'

export default function SectionHeaders({mainheader,subheader,paragraph}) {
  return (
    <>
     <h1 className="font-mono text-3xl mb-3">{mainheader}</h1>
      <p className="font-mono mb-10">{subheader}</p>
      <p className="font-mono mb-10">{paragraph}</p>
    </>
    
  )
}
