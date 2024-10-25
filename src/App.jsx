import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const mode = event.target.value
    setMode(mode)
  }
  return (
    <Box sx={{ m: 2, minWidth: 120 }}>
      <FormControl size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LightModeIcon fontSize="small" />
              Light
            </div>
          </MenuItem>
          <MenuItem value="dark">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DarkModeIcon fontSize="small" />
              Dark
            </div>
          </MenuItem>
          <MenuItem value="system">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Brightness4Icon fontSize="small" />
              System
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <h1>Hello, Vite!</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
