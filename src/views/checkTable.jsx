// TableWithCheckbox.js
import React, { useState } from 'react';
import CheckboxThree from '../components/client/buttons/CheckboxThree';
import CheckboxTwo from '../components/client/buttons/CheckboxTwo';

const TableWithCheckbox = () => {
  const initialData = [
    { id: 1, taskDuration: '2h', published: <CheckboxThree/> },
    { id: 2, taskDuration: '3h', published: <CheckboxThree/> },
    { id: 3, taskDuration: '1.5h', published:<CheckboxThree/> },
  ];

  const [data, setData] = useState(initialData);
  const [editing, setEditing] = useState(null);

  const startEditing = (id) => {
    setEditing(id);
  };

  const selectCheckbox = (id, symbol) => {
    console.log('symbol',symbol);
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, published: symbol } : item
      )
    );
    setEditing(null);
  };
  const renderCheckbox = (symbol, id) => {
    const handleClick = () => startEditing(id);

    return React.cloneElement(symbol, { onClick: handleClick });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {['ID', 'Task Duration', 'Published'].map(header => (
              <th key={header} className="py-2 px-4 border-b border-gray-300">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="border-b border-gray-300">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.taskDuration}</td>
              <td className="py-2 px-4 text-center">
                <div
                  onClick={() => startEditing(item.id)}
                  className="cursor-pointer w-6 h-6 border-2 border-green-500 text-green-500 flex justify-center items-center"
                >
                  {item.published}
                </div>
                {editing === item.id && (
                  <div className="mt-2 flex justify-center">
                    {[<CheckboxThree/>, <CheckboxTwo/>].map(symbol => (
                      <div
                        
                        onClick={() => selectCheckbox(item.id, symbol)}
                        className={`cursor-pointer w-6 h-6 border-2 ${
                          symbol === '✔️' ? 'border-green-500 text-green-500' : 'border-blue-500 text-blue-500'
                        } flex justify-center items-center mx-1`}
                      >
                        {symbol}
                      </div>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithCheckbox;
