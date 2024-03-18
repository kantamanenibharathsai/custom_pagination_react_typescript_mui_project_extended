const landingPageStyles = {
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
    pt: 1,
  },

  navbarContainer: {
    width: { xs: "96%", sm: "90%" },
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    borderRadius: "12px",
    height: "80px",
    px: { xs: 0.3, sm: 1 },
  },

  navHeading: {
    font: { xs: "700 15px Poppins", sm: "700 20px Poppins" },
    color: "#000",
    display: { xs: "none", sm: "block" },
    cursor: "pointer",
  },

  amazonLogo: {
    width: "40px",
    height: "40px",
    display: { xs: "inline", sm: "none" },
    cursor: "pointer",
  },

  textFieldStyle: {
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "47px",
    },
    input: {
      "&::placeholder": {
        color: "black",
        fontSize: "13px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #000",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #000",
      },
      "&:hover fieldset": {
        borderColor: "#000",
      },
    },
  },

  searchIcon: {
    width: "18px",
    height: "18px",
  },

  bodyContainer: {
    width: { xs: "96%", sm: "90%" },
    height: "calc(100vh - 115px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingText: {
    font: { xs: "700 25px Poppins", sm: "700 30px Poppins" },
    color: "#000",
  },

  unorderedProductsList: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
    },
    gridGap: { xs: "20px", md: "26px" },
    flexGrow: 1,
    overflowY: "auto",
    py: 1,
  },

  productsNotFoundText: {
    font: { xs: "700 16px Poppins", sm: "700 20px Poppins" },
    color: "#000",
  },

  paginationButton: {
    minWidth: "25px",
    height: "25px",
    padding: 0,
    font: "500 12px Poppins",
    color: "#000",
    background: "#fff",
    border: "1px solid black",
    borderRadius: "4px",
    "&:hover": {
      color: "#000",
      background: "#fff",
      border: "1px solid black",
      borderRadius: "4px",
    },
  },

  activePaginationButton: {
    background: "#fff",
    border: "2px solid blue",
    borderRadius: "4px",
    "&:hover": {
      color: "#000",
      background: "#fff",
      border: "2px solid blue",
      borderRadius: "4px",
    },
  },
};

export default landingPageStyles;
