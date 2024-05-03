import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAllCurrencies } from '@/hooks/Tokens';
import { useTranslation } from '@/context/Localization';
import { DataContext } from '@/context/DataContext';
import { trim } from '@/utils/trim';
import axios from 'axios';


function formatPercentage(value) {
    const formattedValue = (value).toFixed(2);
    return `${formattedValue}%`;
  }

const useStyles = makeStyles((theme) => ({
    priceTable: {
        marginTop: '50px',
        width: '60%',
        backgroundColor: '#fff',
        padding: '30px',
        border: '1px solid #1321FA',
        borderRadius: '16px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
}));

function PriceTable() {
    const classes = useStyles();
    const allCurrency = useAllCurrencies();
    const { t } = useTranslation();
    const { tradeVolume } = useContext(DataContext);

    const [tokenPrices, setTokenPrices] = useState({
        ETH: { price: 0, change24: 0 },
        USDT: { price: 0, change24: 0 },
        MATIC: { price: 0, change24: 0 },
        WBTC: { price: 0, change24: 0 },
        WETH: { price: 0, change24: 0 },
    });

    const fetchPrices = async () => {
        try {
            const response = await axios.get(
                'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,tether,matic-network,wrapped-bitcoin,weth&vs_currencies=usd&include_24hr_change=true'
            );

            const prices = response.data;

            setTokenPrices({
                ETH: { price: prices.ethereum.usd, change24: prices.ethereum.usd_24h_change },
                USDT: { price: prices.tether.usd, change24: prices.tether.usd_24h_change },
                MATIC: { price: prices['matic-network'].usd, change24: prices['matic-network'].usd_24h_change },
                WBTC: { price: prices['wrapped-bitcoin'].usd, change24: prices['wrapped-bitcoin'].usd_24h_change },
                WETH: { price: prices.weth.usd, change24: prices.weth.usd_24h_change },
            });
        } catch (error) {
            console.error('Error fetching prices:', error);
        }
    };

    useEffect(() => {
        fetchPrices();
    }, []);

    const TokenDetails = {
        ETH: {
            volumn: tradeVolume?.ETH ?? 9999,
            price: tokenPrices.ETH.price,
            change24: formatPercentage(tokenPrices.ETH.change24),
        },
        USDT: {
            volumn: tradeVolume?.USDT ?? 999,
            price: tokenPrices.USDT.price,
            change24: formatPercentage(tokenPrices.USDT.change24),
        },
        MATIC: {
            volumn: tradeVolume?.MATIC ?? 999,
            price: tokenPrices.MATIC.price,
            change24: formatPercentage(tokenPrices.MATIC.change24),
        },

        WBTC: {
            volumn: tradeVolume?.WBTC ?? 0,
            price: tokenPrices.WBTC.price,
            change24: formatPercentage(tokenPrices.WBTC.change24),
        },
        WETH: {
            volumn: tradeVolume?.WETH ?? 0,
            price: tokenPrices.WETH.price,
            change24: formatPercentage(tokenPrices.WETH.change24),
        },
    };

    return (
        <div className={classes.priceTable}>
            <Typography>{t('Top Traded')}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>{t('TOKEN')}</TableCell>
                            <TableCell>{t('VOLUME (24H)')}</TableCell>
                            <TableCell>{t('PRICE')}</TableCell>
                            <TableCell>{t('CHANGE (24H)')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(allCurrency).map((key, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>
                                    <img src={allCurrency[key].logoURI} alt="logo" style={{ width: '24px', height: '24px' }} />
                                    <Typography sx={{ ml: 1, minWidth: '60px' }}>{allCurrency[key].symbol}</Typography>
                                </TableCell>
                                <TableCell>{trim(TokenDetails[allCurrency[key].symbol]?.volumn, 3)}</TableCell>
                                <TableCell>{trim(TokenDetails[allCurrency[key].symbol]?.price, 3)}</TableCell>
                                <TableCell>{TokenDetails[allCurrency[key].symbol]?.change24}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PriceTable;
