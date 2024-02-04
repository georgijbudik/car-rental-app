import { StyledFooterText } from './Footer.styled';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--button-color)',
        p: 2,
        borderRadius: '8px',
      }}
    >
      <Container maxWidth="lg">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={12} sm={4}>
            <StyledFooterText variant="h6" gutterBottom>
              Contact Us
            </StyledFooterText>
            <StyledFooterText variant="body2">
              Car Street 43, Odesa, Ukraine
            </StyledFooterText>
            <StyledFooterText variant="body2">
              Email: car-rental@gmail.com
            </StyledFooterText>
            <StyledFooterText variant="body2">
              Phone: +1 234 567 8901
            </StyledFooterText>
          </Grid>
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <StyledFooterText variant="body2" align="center">
              {'Copyright © '}
              <Link
                color="inherit"
                href="https://github.com/georgijbudik/test-task"
              >
                Car Rental
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </StyledFooterText>
          </div>
          <Grid item xs={12} sm={4}>
            <StyledFooterText variant="h6" gutterBottom>
              Follow Us
            </StyledFooterText>
            <Link href="https://www.facebook.com/" color="#FFFFFF">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#FFFFFF"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#FFFFFF">
              <Twitter />
            </Link>
          </Grid>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
