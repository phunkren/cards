import { Box } from 'theme-ui'

export default ({
  backgroundColor,
  color,
  children,
  onClose,
  fullWidth,
  isOpen
}) => {
  const onDismiss = event => {
    if (event.target.dataset.overlayAction === 'close') {
      onClose(event)
    }
  }

  return (
    <Box
      data-overlay-action='close'
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        zIndex: 950,
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onDismiss}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bg: backgroundColor,
          color: color,
          position: 'relative',
          zIndex: 999,
          width: fullWidth ? '100%' : 500,
          p: 4
        }}
      >
        {children}
      </Box>
    </Box>
  )
}