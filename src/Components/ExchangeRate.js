
function ExchangeRate({exchangeRate, primaryCurr, secondaryCurr}) {

    return (
        <div className="exchange-container">
            <h3>Exchange Rate:</h3>
            {exchangeRate}
            <p>{primaryCurr} to {secondaryCurr}</p>
        </div>
    );
}

export default ExchangeRate