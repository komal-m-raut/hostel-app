'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, keyframes } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu';
import clsx from 'clsx';

import { usePathname, useRouter } from 'next/navigation';
import { FlexBox } from 'components/flex-box';
import { SideNav } from 'components/side-nav';

const headerHeight = 72;
const slideFromTop = keyframes`
from { top: -${headerHeight}px; }
to { top: 0; }`; // STYLED COMPONENT

const HeaderWrapper = styled('div')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  '& .link': {
    cursor: 'pointer',
    transition: 'color 250ms ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  '& .fixedHeader': {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    background: 'white',
    height: headerHeight,
    boxShadow: theme.shadows[2],
    animation: `${slideFromTop} 250ms ease-in-out`,
    '& .link': {
      color: 'inherit',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& .right-links': {
      display: 'none',
    },
    '& .purchase-link': {
      display: 'none',
    },
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openTransactionDropdown, setOpenTransactionDropdown] = useState(false);

  const downSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const router = useRouter();
  const toggleSidenav = () => setOpen(prevVal => !prevVal);
  const currentPath = usePathname();

  const handleTransactionDropdown = () => {
    setOpenTransactionDropdown(prev => !prev);
  };

  return (
    <HeaderWrapper>
      <div
        className={clsx({
          fixedHeader: true,
        })}
      >
        <Container>
          <FlexBox height={headerHeight} alignItems="center">
            <Box
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => router.push('/')}
            >
              Home
            </Box>
            <Box mx="auto" />
            <FlexBox
              className="right-links"
              alignItems="center"
              position="relative"
            >
              <Typography
                className="link"
                color="grey.600"
                p="0.25rem 1.25rem"
                fontWeight={currentPath.includes('book-a-bed') ? 700 : 400}
                onClick={() => router.push('/book-a-bed')}
              >
                Book a Bed
              </Typography>
              <Typography
                className="link"
                color="grey.600"
                p="0.25rem 1.25rem"
                fontWeight={currentPath.includes('transaction') ? 700 : 400}
                onClick={handleTransactionDropdown}
              >
                Transaction
              </Typography>
              {openTransactionDropdown && (
                <FlexBox
                  flexDirection="column"
                  position="absolute"
                  top="100%"
                  left="100px"
                  backgroundColor="white"
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                  borderRadius="4px"
                  zIndex={100}
                >
                  <Typography
                    className="link"
                    p="0.25rem 1.25rem"
                    onClick={() => router.push('/add-expenses')}
                    sx={{
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    Add Expenses
                  </Typography>
                  <Typography
                    className="link"
                    p="0.25rem 1.25rem"
                    onClick={() => router.push('/all-payments')}
                    sx={{
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    All Payments
                  </Typography>
                </FlexBox>
              )}
              <Typography
                className="link"
                color="grey.600"
                p="0.25rem 1.25rem"
                fontWeight={currentPath.includes('residents') ? 700 : 400}
                onClick={() => router.push('/residents')}
              >
                Residents
              </Typography>
              <Typography
                className="link"
                color="grey.600"
                p="0.25rem 1.25rem"
                fontWeight={currentPath.includes('closure') ? 700 : 400}
                onClick={() => router.push('/closure')}
              >
                Closure
              </Typography>
              <Typography
                className="link"
                color="grey.600"
                p="0.25rem 1.25rem"
                fontWeight={currentPath.includes('reports') ? 700 : 400}
                onClick={() => router.push('/reports')}
              >
                Reports
              </Typography>
            </FlexBox>
            {/* mobile menu */}
            {downSM && (
              <SideNav
                open={open}
                width={260}
                position="right"
                toggleSidenav={toggleSidenav}
                handle={
                  <IconButton>
                    <Menu />
                  </IconButton>
                }
              >
                <Box
                  p={2}
                  sx={{
                    '& .link': {
                      cursor: 'pointer',
                      transition: 'color 250ms ease-in-out',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <Typography
                    className="link"
                    py={1}
                    onClick={() => {
                      toggleSidenav();
                      router.push('/book-a-bed');
                    }}
                  >
                    Book a Bed
                  </Typography>
                  <Typography
                    className="link"
                    py={1}
                    onClick={() => {
                      toggleSidenav();
                      router.push('/transaction');
                    }}
                  >
                    Transaction
                  </Typography>
                  <Typography
                    className="link"
                    py={1}
                    mb={2}
                    onClick={() => {
                      toggleSidenav();
                      router.push('/residents');
                    }}
                  >
                    Residents
                  </Typography>
                  <Typography
                    className="link"
                    py={1}
                    mb={2}
                    onClick={() => {
                      toggleSidenav();
                      router.push('/reports');
                    }}
                  >
                    Reports
                  </Typography>
                </Box>
              </SideNav>
            )}
          </FlexBox>
        </Container>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
