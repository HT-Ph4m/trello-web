import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import { capitalizeFirstLetter } from '~/utils/formatters'

function BoardBar({ board }) {
  const MENU_STYLE = {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '5px',
    fontWeight: '500',
    borderRadius: 0,
    '.MuiSvgIcon-root': { color: 'white' },
    '&:hover': {
      backgroundColor: 'primary.50'
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        paddingX: 2,
        gap: 2,
        justifyContent: 'space-between',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="With Icon"
          clickable
        />
        <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="With Icon" clickable />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="With Icon"
          clickable
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon size="small" />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={6}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer'
            }
          }}
        >
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
          <Tooltip title="avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?t=st=1730088083~exp=1730091683~hmac=223793c133374b29e518b1f02c57863d7ab0fe6d4f95b3778456feca5b736093&w=1800"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardBar
