import { Button } from '@mui/material'
import { styled } from '@mui/system'

export const StyledButton = styled(Button)<{ outlined?: boolean }>(({ outlined }) => ({
    padding: '10px 0',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '20px',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: outlined ? '#ffae5a' : '#fff',
    backgroundColor: outlined ? 'none' : '#666',
    '&:hover': {
        backgroundColor: 'white',
        color: '#000'
    },
    '&:disabled': {
        color: 'white',
        cursor: 'not-allowed',
        backgroundColor: '#666'
    }
}))

export const OutlinedButton = styled(Button)({
    padding: 0,
    width: '90%',
    backgroundColor: 'none',
    color: '#ffae5a',
    '&:hover': {
        bgcolor: 'none'
    }
})
