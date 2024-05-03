import { Box, Button, Typography } from "@mui/material"
import { useTranslation } from "@/context/Localization"
import { useAllTokens } from "@/hooks/Tokens"
import { useActiveChainId } from "@/hooks/useActiveChainId"
import useToast from "@/hooks/useToast"
import { registerToken } from "@/utils/registerToken"
import { Token } from "@/utils/token"
import { useAccount } from "wagmi"


function AddTokenToWallet() {

    const { address: account } = useAccount()
    const { isWrongNetwork } = useActiveChainId()

    const tokens = useAllTokens()
    const { t } = useTranslation()
    const { toastSuccess } = useToast()
    const onRegisterToken = async (token: Token) => {
        await registerToken(
            token.address,
            token.symbol,
            token.decimals,
            token.logoURI)
        toastSuccess(t('X Token added successfully'))
    }

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {
                (account && !isWrongNetwork) &&
                <Button
                    sx={{ cursor: 'pointer' }}
                    onClick={() =>
                        onRegisterToken(
                            tokens['0xdEfEfC6Cb6F24389496eFcd6e94cF44EDd371B27']
                        )
                    }
                >
                    <Typography sx={{
                        width: '100%',
                        textAlign: 'center',
                        color: '#fff'
                    }}>
                        {t('Add X to wallet')}
                    </Typography>
                </Button>
            }
        </Box>
    )
}

export default AddTokenToWallet