import React, { useContext } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useAllCurrencies } from '@/hooks/Tokens'
import { useTranslation } from '@/context/Localization'
import { DataContext } from '@/context/DataContext'
import { trim } from '@/utils/trim'

const useStyles = makeStyles((theme) => ({
    priceTable: {
        marginTop: '50px',
        width: '60%',
        backgroundColor: '#fff',
        padding: '30px',
        border: "1px solid #1321FA",
        borderRadius: '16px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        }
    }
}))


function PriceTable() {

    const classes = useStyles()
    const 
    
    allCurrency = useAllCurrencies()
    const { t } = useTranslation()
    const { tokenPrices, tradeVolume } = useContext(DataContext)

    const TokenDetails = {
        'ETH': {
            volumn: tradeVolume?.ETH ?? 9999,
            price: tokenPrices?.ETH ?? 1500,
            change24: 1.4,
            change7d: 21.34
        },
        'USDT': {
            volumn: tradeVolume?.USDT ?? 999,
            price: tokenPrices?.USDT ?? 1,
            change24: 0,
            change7d: 0
        },
        'MATIC': {
            volumn: tradeVolume?.MATIC ?? 999,
            price: tokenPrices?.MATIC ?? 1.49,
            change24: 1.4,
            change7d: 21.34
        },
        'X': {
            volumn: tradeVolume?.Xtoken ?? 0,
            price: tokenPrices?.Xtoken ?? 0.01,
            change24: 1.2,
            change7d: 11.26

        },
        'WBTC': {
            volumn: tradeVolume?.WBTC ?? 0,
            price: tokenPrices?.WBTC ?? 28032.94,
            change24: 1.37,
            change7d: 11.87
        },
        'WETH': {
            volumn: tradeVolume?.WETH ?? 0,
            price: tokenPrices?.WETH ?? 1853,
            change24: 0.75,
            change7d: 12.36
        }
    }

    return (
        <div className={classes.priceTable}>
            <Typography sx={{}}>{t('Top Traded')}</Typography>
            <TableContainer>
                <Table sx={{ '& .MuiTableCell-root': { textAlign: 'center' } }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>{t('TOKEN')}</TableCell>
                            <TableCell>{t('VOLUME (24H)')}</TableCell>
                            <TableCell>{t('PRICE')}</TableCell>
                            <TableCell>{t('CHANGE (24H)')}</TableCell>
                            <TableCell>{t('CHANGE (7D)')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Object.keys(allCurrency).map((key, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={allCurrency[key].logoURI} alt='logo' style={{ width: '24px', height: '24px' }} />
                                        <Typography sx={{ ml: 1, minWidth: '60px' }}>
                                            {allCurrency[key].symbol}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{trim(TokenDetails[allCurrency[key].symbol]?.volumn, 3)}</TableCell>
                                    <TableCell>{trim(TokenDetails[allCurrency[key].symbol]?.price, 3)}</TableCell>
                                    <TableCell>{TokenDetails[allCurrency[key].symbol]?.change24}</TableCell>
                                    <TableCell>{TokenDetails[allCurrency[key].symbol]?.change7d}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PriceTable

