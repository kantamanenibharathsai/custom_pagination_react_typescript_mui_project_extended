const eachProductStyles = {
  cardContainer: {
    backgroundColor: "white !important",
    borderRadius: "6px",
    padding: "5px",
    boxSizing: "border-box",
    width: { xs: "100%", sm: "58%", md: "100%" },
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    margin: { xs: "auto", sm: "auto", md: "0px" },
    cursor: "pointer",
    minHeight: { xs: "510px", sm: "540px", lg: "530px" },
    maxHeight: {md: "520px", lg: "520px"}
  },

  cardMedia: {
    height: { xs: "225px", sm: "215px", md: "233px", lg: "270px" },
    borderRadius: "6px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "11px", sm: "16px" },
    padding: "2px",
  },

  title: {
    fontSize: "16px",
    fontWeight: "900",
    color: "black",
    fontFamily: "Roboto",
    opacity: 0.8,
    marginTop: "8px",
  },

  category: {
    fontSize: { xs: "14px", sm: "15px" },
    fontWeight: "100",
    color: "black",
    fontFamily: "Roboto",
    opacity: 0.7,
    lineHeight: "16px",
  },

  descriptionText: {
    fontSize: { xs: "14px", sm: "15px" },
    fontWeight: "300",
    color: "black",
    fontFamily: "Roboto",
    lineHeight: "18px",
  },

  cardBodyChildContainer1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  price: {
    fontSize: { xs: "17px", sm: "19px" },
    fontWeight: "500",
    color: "#ff5c33",
    fontFamily: "Roboto",
  },

  cardBodyChildContainer2: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  rating: {
    fontSize: "1rem",
    marginRight: "5px",
  },

  ratingNumber: {
    fontSize: { xs: "16px", sm: "18px" },
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
  },

  cardBodyChildContainer3: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "strech", md: "center" },
    justifyContent: { md: "space-between" },
    gap: { xs: "13px", md: "0px" },
  },

  cardBodyChildContainer4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "11px",
    justifyContent: "space-between",
  },

  brandDiscountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "space-between", sm: "flex-start" },
    gap: { xs: "10px", sm: "10px", lg: "5px" },
    alignItems: "center",
  },

  brand: {
    fontSize: "13px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    opacity: 0.8,
  },

  smallImagesContainer: {
    display: "flex",
    alignitems: "center",
    gap: "10px",
  },

  cardSmallImg: {
    width: { xs: "42px", md: "38px" },
    height: { xs: "42px", md: "38px" },
    borderRadius: "3px",
    opacity: 0.8,
  },

  discountPercentage: {
    fontSize: "13px",
    fontWeight: "500",
    color: "black",
    fontFamily: "Roboto",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "grey",
    padding: "3px 9px",
    opacity: 0.6,
  },
};

export default eachProductStyles;
