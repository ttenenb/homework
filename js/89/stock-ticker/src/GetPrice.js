import React, { useEffect, useState } from 'react';
function GetPrice({ticker}) {
    const [price, setPrice] = useState();
    const fetchPrice = async () => {
        try {
            const response = await fetch(`https://api-v2.intrinio.com/securities/${ticker}/prices/realtime?api_key=OjU2OGE3ODc4ZGZkNzE2NTE5NDIwZGMxZTc0MDA0YmVm`)

            if (!response.ok) {
                throw new Error(`${response.statusText} ${response.statusText}`);
            }

            const getPrice = await response.json();

            setPrice(getPrice);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {

        fetchPrice();

        const interval = setInterval(() => {

            fetchPrice();
        }, 6000)

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ticker])


    if (!price) {
        return null;
    }
    const greenStyle = {
        color: 'green'
    }
    const redStyle = {
        color: 'red'
    }
    const priceStyle = price.last_price - price.open_price > 0 ? greenStyle :
    price.last_price - price.open_price < 0 ? redStyle: null;

    const arrow = price.last_price - price.open_price > 0 ? `\u2191 ` :
        price.last_price - price.open_price < 0 ? '\u2193' : null;


    return (
        <div className='priceInfo'>
            <h2><span id='price' style={priceStyle} > Price {price.last_price}{arrow} </span> Last updated {new Date(price.last_time).toLocaleString().replace(',', '')}</h2>
        </div>
    )
}

export default GetPrice;
