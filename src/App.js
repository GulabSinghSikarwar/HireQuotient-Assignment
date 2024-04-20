import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Tile from './components/realstate/realStateTile';
import { fetchPortfolio } from './service/api';

const App = () => {
  const data = {
    title: 'REAL ESTATE (1)',
    headers: ['NAME OF THE HOLDING', 'TICKER', 'AVERAGE PRICE', 'MARKET PRICE', 'LATEST CHANGE PERCENTAGE', 'MARKET VALUE IN BASE CCY'],
    rows: [
      ['Property: The Sail @ Marina Bay Unit 68-020000 3BR 1991sqft', 'Property_TheSail@MarinaBay-68-02', '3982000', '3996971.1', '31', '3996971.1'],
      // ...add more rows as needed
    ]
  };
  const [portfolio, setPortfolio] = useState(null)
  useEffect(() => {
    fetchPortfolio().then((data) => {
      // console.log(" rec data : ",data.payload);
      const formatedData = segregateDataByAssetClass(data.payload)
      setPortfolio(formatedData);

    })
  }, [])
  const segregateDataByAssetClass = (data) => {
    const segregatedData = {
      'Real Estate': [],
      Cash: [],
      Bond: [],
      Equity: [],
      Loan: []
    };

    // Iterate over each object in the data array
    data.forEach(item => {
      
      // Check the asset_class property and push the item into the corresponding array
      switch (item.asset_class) {
        case 'Bond':
          segregatedData.Bond.push(item);
          break;
        case 'Real Estate':
          segregatedData['Real Estate'].push(item);
          break;
        case 'Cash':
          segregatedData.Cash.push(item);
          break;
        case 'Equity':
          segregatedData.Equity.push(item);
          break;
        case 'Loan':
          segregatedData.Loan.push(item);
          break;
        default:
          // Handle unknown asset classes
          break;
      }
    });

    // console.log("seg : ",segregatedData);
    return segregatedData;
  }


  return (
    <div className="App">
      {
        portfolio && Object.keys(portfolio).map((key, index) => {

           return <Tile key={index} data={portfolio[key]} title={key} />
        })
      }
      ss
    </div>
  );
};

export default App;
