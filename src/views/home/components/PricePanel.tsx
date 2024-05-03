import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "@/context/Localization";
import { makeStyles } from "@mui/styles";
import { TokenImage } from "@/config";
import { DataContext } from "@/context/DataContext";

const useStyles = makeStyles((theme) => ({
  pricePanel: {
    marginTop: "100px",
    width: "60%",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "18px",
    border: "1px solid #1321FA",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

function PricePanel() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { tokenPrices } = useContext(DataContext);
  const [realTokenPrices, setRealTokenPrices] = useState(null);

  useEffect(() => {
    async function fetchTokenPrices() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=matic-network,bitcoin,weth&vs_currencies=usd"
        );
        const data = await response.json();
        setRealTokenPrices(data);
      } catch (error) {
        console.error("Error fetching token prices:", error);
      }
    }

    fetchTokenPrices();
  }, []);

  const TokenPrice = {
    xtoken: realTokenPrices?.xtoken?.usd ?? 0.01,
    weth: realTokenPrices?.weth?.usd,
    wbtc: realTokenPrices?.bitcoin?.usd,
  };

  return (
    <div className={classes.pricePanel}>
      <Typography mb={2} textAlign="center">
        {t("Token Prices")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        {Object.keys(TokenPrice).map((item, index) => (
          <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
            <img
              src={TokenImage[item]}
              style={{ width: "24px", height: "24px" }}
              alt={item}
            />
            <Box sx={{ mx: 2, minWidth: "100px", textAlign: "center" }}>
              <Typography>{item.toLocaleUpperCase()}</Typography>
              <Typography sx={{ fontSize: "18px", minWidth: "80px" }}>
                {TokenPrice[item]}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default PricePanel;
