import React from 'react';

const PortfolioLayout = () => {
  // Your state and methods here to handle interactivity
  

  return (
    <div className="container mx-auto p-4">
      {/* Each section like REAL ESTATE, CASH, etc. could be a separate component */}
      <HoldingSection title="REAL ESTATE">
        {/* Map through your real estate holdings and render a HoldingRow for each */}
        <HoldingRow name="The Sail @ Marina Bay Unit 68-020000 3BR 1991sqft" ticker="Property_TheSail@MarinaBay-68-02" averagePrice="3982000" marketPrice="3996971.1" latestChangePercentage="31" marketValueInBaseCCY="3996971.1" />
      </HoldingSection>

      {/* Repeat for other sections like CASH, BOND, etc. */}
    </div>
  );
};

const HoldingSection = ({ title, children }) => {
  return (
    <div className="mb-4">
      <div className="text-lg font-bold">{title}</div>
      <div>
        {children}
      </div>
    </div>
  );
};

const HoldingRow = ({ name, ticker, averagePrice, marketPrice, latestChangePercentage, marketValueInBaseCCY }) => {
  return (
    <div className="grid grid-cols-6 gap-4 py-2">
      {/* Adjust the grid column sizes as per your design */}
      <div>{name}</div>
      <div>{ticker}</div>
      <div>{averagePrice}</div>
      <div>{marketPrice}</div>
      <div>{latestChangePercentage}</div>
      <div>{marketValueInBaseCCY}</div>
    </div>
  );
};

export default PortfolioLayout;
