import { Theme } from '@material-ui/core';
import { makeStyles, lighten } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme, { isCurrent: boolean }>(
  (theme: Theme) => ({
    navButtons: ({ isCurrent }) => ({
      fontSize: '16px',
      textTransform: 'capitalize',
      color: '#ffffff80'
        ? lighten('#ffffff80', 1)
        : theme.palette.secondary.main,
      '&:hover': {
        color: '#ffffffbf',
        backgroundColor: 'transparent',
      },
    }),
  })
);
