import React, { useState } from 'react';
import { AssetKeys } from '../../helpers/constants';
import ExpandIcon from '../../helpers/expandIcon';

const Tile = ({ data,title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const checkIfLoan =(currentHeading)=>{
return !((title=='Loan' && (currentHeading=='average price')) ||
(title=='Cash' && (currentHeading=='average price' || currentHeading=='Market Price'))
)
    }

    return (
        <div className="m-4">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {/* The tile summary here */}
                <div className="flex  items-center p-4 bg-gray-50 rounded-md shadow-md">
                    <div className='pr-6'><ExpandIcon expandMore={!isOpen} /></div>
                    <div>{title+ `( ${data.length})`}  </div>
                </div>
            </div>

            {isOpen && (
                <div className="mt-2 overflow-hidden">

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    {Object.keys(AssetKeys).map((title, index) => (
                                          <th key={index}  scope="col" class="px-6 py-3">{title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        {Object.keys(AssetKeys).map((title, cellIndex) => (
                                           <td class="px-6 py-4" key={cellIndex}  >{element[AssetKeys[title]]}</td>
                                        ))}
                                    </tr>
                                ))}
                               
                            </tbody>
                        </table>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Tile;