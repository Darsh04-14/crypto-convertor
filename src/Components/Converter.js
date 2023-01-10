import ExchangeRate from './ExchangeRate';
import {useState} from 'react';
import axios from 'axios';

function Convertor() {
    const currencies = ['ADA', 'BNB','BTC', 'BUSD', 'DOGE', 'ETH', 'LTC', 'SOL', 'USD', 'USDT', 'XRP'];
    const [primaryCurr, setPrimaryCurr] = useState('BTC');
    const [secondaryCurr, setSecondaryCurr] = useState('BTC');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(1);
    const [primaryCurrExchange, setPrimaryCurrExchange] = useState('BTC');
    const [secondaryCurrExchange, setSecondaryCurrExchange] = useState('BTC');
    const [result, setResult] = useState(1);

    const convert = () => {

        const options = {
          method: 'GET',
          url: 'http://localhost:8000/convert',
          params: {from_currency: primaryCurr, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurr},
        };
        
        axios.request(options).then((response) => {
            //console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setExchangeRate(response.data);
            setResult(amount * response.data);
            setPrimaryCurrExchange(primaryCurr);
            setSecondaryCurrExchange(secondaryCurr);
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="converter-container">
            <h2>Currency Converter</h2>
            <div className="input-container">
                <table className="input-table">
                    <tbody>
                        <tr>
                            <td>Primary Currency: </td>
                            <td>
                                <input 
                                type="number" 
                                name="currency-amount-1" 
                                className="inp"
                                defaultValue={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                                                
                                />
                            </td>
                            <td>
                                <select
                                    defaultValue={primaryCurr}
                                    name="currency-option-1"
                                    className="currency-options"
                                    onChange={(e)=> setPrimaryCurr(e.target.value)}
                                >
                                    {currencies.map( (currency, idx) => (<option key={idx}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Currency: </td>
                            <td>
                                <input 
                                type="number"
                                name="currency-amount-2" 
                                className="inp"
                                value={result} 
                                disabled={true}
                                />
                            </td>
                            <td>
                                <select
                                    defaultValue={secondaryCurr}
                                    name="currency-option-2"
                                    className="currency-options"
                                    onChange={(e)=> setSecondaryCurr(e.target.value)}
                                >
                                    {currencies.map( (currency, idx) => (<option key={idx}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <button 
                className="btn"
                onClick={convert}
                >Convert</button>
            <ExchangeRate
                exchangeRate={exchangeRate}
                primaryCurr = {primaryCurrExchange}
                secondaryCurr = {secondaryCurrExchange}
            />
        </div>
    );
}

export default Convertor;