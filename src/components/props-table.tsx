import React from 'react'

interface Prop {
  name: string;
  type: string;
  description: string;
  code?: boolean;
  faded?: boolean;
}

interface PropsTableProps {
  props: Prop[];
}

export const PropsTable = ({ props }: PropsTableProps) => {
  if (!props || props.length === 0) {
    return (
      <>
        <h2 className='text-2xl font-bold w-3xl mx-auto mt-10 mb-2'>Props</h2>
        <div className="w-full max-w-3xl mx-auto border border-neutral-800 rounded-lg p-6 text-center text-neutral-400">
          No props required for this component
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className='text-2xl font-bold w-3xl mx-auto mt-10 mb-2'>Props</h2>
      <table className="w-full max-w-3xl mx-auto border border-neutral-800 rounded-lg overflow-hidden text-md mb-15">
        <thead>
          <tr className="bg-neutral-800 text-neutral-200">
            <th className="py-3 px-4 text-left font-semibold border-b border-neutral-800">Name</th>
            <th className="py-3 px-4 text-left font-semibold border-b border-neutral-800">Type</th>
            <th className="py-3 px-4 text-left font-semibold border-b border-neutral-800">Description</th>
          </tr>
        </thead>
        <tbody className="text-neutral-300">
          {props.map((prop, idx) => (
            <tr
              key={prop.name}
              className={
                idx !== props.length - 1
                  ? "border border-neutral-800"
                  : ""
              }
            >
              <td className={`py-2 px-4 font-mono border-neutral-800 border ${prop.faded ? "text-blue-500/70" : "text-blue-400"}`}>
                {prop.code ? <span>{prop.name}</span> : prop.name}
              </td>
              <td className="py-2 px-4 font-mono border-neutral-800 border text-blue-300">{prop.type}</td>
              <td className="py-2 px-4">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
