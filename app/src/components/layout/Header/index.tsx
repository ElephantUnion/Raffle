import React, { FC, useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft, Home } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { routes } from '../../../router/routes';
import AirdropButton from '../../AirdropButton';
import { useViewport } from '../../../hooks/useViewport';
import { DeviceType } from '../../../providers/ViewportProvider';
import Drawer from '../Drawer';
import WalletButton from '../WalletButton';
import NavButton from '../NavButton';
import { TESTING } from '../../../config/misc';
import { isAdmin } from '../../AdminRoute';

export interface HeaderProps {
  onBackNavigation?: () => void;
}

const NAV_LINKS_LIST = [
  { label: 'NFT Raffle', target: routes.HOME },
  { label: 'Whitelist Raffle', target: routes.WHITELIST_RAFFLE },
  // { label: 'Auction', target: routes.AUCTION },
  { label: 'Staking', target: routes.STAKING },
  { label: 'Union', target: routes.UNION },
  // { label: 'Home', target: routes.HOME },
  // { label: 'Explore', target: routes.RAFFLES },
  /*   { label: 'Tools', target: routes.TOOLS }, */
  { label: 'Admin Panel', target: routes.ADMIN.HOME, admin: true },
];

const Header: FC<HeaderProps> = ({ onBackNavigation }) => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const { connected, publicKey } = useWallet();
  const { push, location } = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div
        style={{
          width: '100%',
          height: device === DeviceType.Tablet ? '50px' : '90px',
          background: '#0E1117',
          backdropFilter: 'blur(3px)',
          zIndex: 98,
        }}
      />
      <AppBar className={classes.appBar} elevation={0}>
        {device === DeviceType.Tablet ? (
          <div className={classes.drawerHeader}>
            {onBackNavigation ? (
              <IconButton size={'medium'} onClick={() => onBackNavigation()}>
                <ChevronLeft />
              </IconButton>
            ) : (
              <IconButton size={'medium'} onClick={() => push(routes.HOME)}>
                <img
                  src="/delykid-logo.png"
                  alt={'Kiddos Market'}
                  className={classes.homeButtonIcon}
                  style={{ width: 30 }}
                />
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '1.2rem',
                    paddingLeft: '5px',
                  }}
                >
                  KIDDOS MARKET
                </span>
              </IconButton>
            )}
            <IconButton size={'medium'} onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              wallet={publicKey}
              isOpen={isDrawerOpen}
              setIsOpen={setIsDrawerOpen}
              navLinksList={NAV_LINKS_LIST}
            />
          </div>
        ) : (
          <>
            <div style={{ display: 'flex' }}>
              <IconButton
                onClick={() => push(routes.HOME)}
                className={classes.homeButton}
              >
                <img
                  src="/delykid-logo.png"
                  alt={'Kiddos Raffle'}
                  className={classes.homeButtonIcon}
                />
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '1.2rem',
                    paddingLeft: '12px',
                  }}
                >
                  KIDDOS MARKET
                </span>
              </IconButton>
              <div className={classes.navContainer}>
                {NAV_LINKS_LIST.filter(
                  ({ admin }) => !admin || (admin && isAdmin(publicKey))
                ).map(({ label, target }) => (
                  <NavButton
                    key={target}
                    label={label}
                    target={target}
                    isCurrent={location.pathname === target}
                    style={{ marginRight: '18px' }}
                  />
                ))}
                {connected && TESTING && <AirdropButton />}
              </div>
            </div>
            <div className={classes.walletButtonContainer} style={{marginRight: 50}}>
              <WalletButton />
            </div>
          </>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
