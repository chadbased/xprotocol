import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "../../asset/images/twitter.svg";
import DiscordIcon from "../../asset/images/discord.svg";
import MediumIcon from "../../asset/images/medium.svg";
import GithubIcon from "../../asset/images/gitbook.svg";
import GuildIcon from "../../asset/images/guildxyz.svg";
import MirrorIcon from "../../asset/images/mirror.svg";
import NoobyLogo from "../../asset/images/LogoHorizontal.png";
import { IconBrandGithub, IconBrandTwitter, IconBrandTelegram, IconBrandDiscord } from '@tabler/icons'
import { useTranslation } from "@/context/Localization";

const useStyles = makeStyles(() => ({
  footerView: {
    padding: "0 80px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#1e1e1e",
    "& .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiButton-root": {
      color: "#333",
      borderRadius: "20px",
      padding: "0 20px",
      background: "linear-gradient(0deg,#f8bf4c,#e77b3b)",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.footerView}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "& img": {
                width: "100px",
                height: "auto",
              },
            }}
          >
            <img src={NoobyLogo} alt="noobysswap" />
          </Box>
          
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>{t("Copyright")}</Typography>
          </Box>
          
        </Box>
        
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              "& img": {
                width: 32,
                height: 32,
                mx: 1,
                mt: 2,
              },
            }}
          >
            <a
              href="https://discord.gg/me7GBCCf"
              target="_blank"
            >
            <IconBrandDiscord color="white" size={24} style={{ margin: '0 8px' }} />
            </a>
            <a
              href="https://twitter.com/Xprotocolex"
              target="_blank"
            >
            <IconBrandTwitter color="white" size={24} style={{ margin: '0 8px' }} />
            </a>

            
          </Box>
      </Box>
    </div>
  );
}

export default Footer;
