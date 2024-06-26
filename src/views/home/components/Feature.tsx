import React from 'react'
import { Box } from '@mui/system'
import { Typography, Grid } from '@mui/material'
import styled from '@emotion/styled'
import SwapIcon from '@/asset/images/swap.png'
import AnalyticsIcon from '@/asset/images/analytics.png'
import LiquidityIcon from '@/asset/images/liquidity.png'
import EarningIcon from '@/asset/images/earning.png'
import { useTranslation } from '@/context/Localization'

const ImageWrapper = styled.img` 
    width : auto;
    height: 100px;
    margin: 20px;
    padding: 20px;
    background-color: transparent;
`;

function FeatureList() {

    const { t } = useTranslation()

    return (
        <div>
            <Box sx={{
                mt: 5,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography sx={{ fontSize: '24px', color: '#fff', mb: 3 }}>{t('Features')}</Typography>
                <Grid
                    container
                    sx={{
                        width: { xs: '95%', md: '70%' },
                        '& .MuiGrid-item': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& .MuiTypography-root': {
                                color: '#333',
                                maxWidth: '300px'
                            }
                        }
                    }}
                    spacing={5}
                >
                    <Grid item xs={12} md={6}>
                        <Grid item xs={4} md={4}>
                            <ImageWrapper src={SwapIcon} />
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Box >
                                <Typography sx={{ color: '#fff !important', fontSize: '24px' }}>{t('Swap Tokens')}</Typography>
                                <Typography>{t('Trade any combination of ERC-20 tokens permissionless, with ease.')}</Typography>
                            </Box>                        
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid item xs={4} md={4}>
                            <ImageWrapper src={LiquidityIcon} />
                        </Grid>
                        <Grid item xs={8} md={8}>
                        <Box>
                            <Typography sx={{ color: '#fff !important', fontSize: '24px' }}>{t('Supply Liquidity')}</Typography>
                            <Typography>{t('Earn 0.25% fee on trades proportional to your share of the pool.')}</Typography>
                        </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid item xs={4} md={4}>
                            <ImageWrapper src={EarningIcon} />
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Box>
                                <Typography sx={{ color: '#fff !important', fontSize: '24px' }}>{t('Earn X')}</Typography>
                                <Typography>{t('Deposit your LP tokens to earn additional rewards in X')}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid item xs={4} md={4}>
                            <ImageWrapper src={AnalyticsIcon} />
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <Box>
                                <Typography sx={{ color: '#fff !important', fontSize: '24px' }}>{t('Analytics')}</Typography>
                                <Typography>{t('Scan through XProtocol analytics & Historical Data')}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default FeatureList