import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useTranslation } from '@/context/Localization'
import TokenSelectModal from '@/components/TokenSelectModal'
import { useAccount } from 'wagmi'
import { useCurrencyBalance } from '@/state/wallet/hooks'
import { numberInputOnWheelPreventChange } from '@/utils'


function CurrencyOutputPanel({ currency, value, onCurrencySelect, onUserInput }) {


    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    const { address: account } = useAccount()
    const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)

    return (
        <div>
            <Box>
                <Box sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    '& .MuiTypography-root': {
                        color: '#fff'
                    }
                }}>
                    <Typography>{t('To')}</Typography>
                    <Typography fontSize={12}>{t('Balance')}: {selectedCurrencyBalance?.toSignificant(6) ?? 0}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <TextField
                        variant="standard"
                        autoComplete='off'
                        value={value}
                        onChange={(e) => {
                            if (Number(e.target.value) < 100000000)
                                onUserInput(e.target.value)
                        }}
                        InputProps={{
                            disableUnderline: true,
                            placeholder: '0.0',
                            type: 'number',
                            inputProps: { min: 0, inputMode: 'numeric', pattern: '[0-9]*' },

                        }}
                        sx={{ input: { fontSize: '28px', fontWeight: 'bold', color: '#fff' } }}
                        onWheel={numberInputOnWheelPreventChange}
                    />
                    <Box sx={{
                        display: 'flex',
                        '& .MuiButton-root': {
                            ml: 1,
                            color: '#fff',
                            borderRadius: '16px',
                            bgcolor: 'rgba(102, 102, 102, 0.2)'
                        }
                    }}>
                        <Button
                            onClick={() => setOpen(true)}
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={{ whiteSpace: 'nowrap', minWidth: '140px' }}
                        >
                            {/* {t('Select token')} */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={currency?.logoURI} style={{ width: '24px', height: '24px' }} />
                                <Typography px={1}>{currency?.symbol}</Typography>
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Box>
            <TokenSelectModal
                open={open}
                onClose={() => setOpen(false)}
                onCurrencySelect={onCurrencySelect}
            />
        </div>
    )
}

export default CurrencyOutputPanel