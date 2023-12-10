import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      width: '100%',
      height: device === DeviceType.Phone ? '50px' : '90px',
    }),
    drawerHeader: () => ({
      width: '100%',
      height: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
    }),
    appBar: ({ device }) => ({
      height: device === DeviceType.Phone ? '50px' : '80px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#0E1117',
      alignItems: 'center',
      borderBottom: '1px solid #424e5a',
      zIndex: 99,
    }),
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '30px',
    },
    homeButton: () => ({
      marginLeft: '40px',
      marginRight: '30px',
      color: 'white',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
    navButtons: {
      marginLeft: '30px',
      color: '#ffffff80',
      '&:hover': {
        color: 'ffffffbf',
      },
    },
    homeButtonIcon: {
      height: 'auto',
      width: '45px',
      color: theme.palette.primary.main,
    },
    walletButtonContainer: {
      marginLeft: '20px',
    },
    currentLocation: {
      color: 'black',
    },
    disabledLink: {
      pointerEvents: 'none',
    },
  })
);
