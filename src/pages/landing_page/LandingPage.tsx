import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material"
import landingPageStyles from "./LandingPage.Styles"
import { useEffect, useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { EachProuct, products } from "../../utils/typescript/data";
import EachProduct from "../../components/each_product/EachProduct";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface IState {
    searchValue: string,
    productsData: EachProuct[],
    productsStatus: "INITIAL" | "PENDING" | "SUCCESS" | "FAILURE",
    currentPage: number,
    itemsPerPage: number
}

const LandingPage = () => {
    const [searchValue, setSearchValue] = useState<IState["searchValue"]>("");
    const [productsData, setProductsData] = useState<IState["productsData"]>([]);
    const [productsStatus, setProductsStatus] = useState<IState["productsStatus"]>("INITIAL");
    const [currentPage, setCurrentPage] = useState<IState["currentPage"]>(1);
    const [itemsPerPage] = useState<IState["itemsPerPage"]>(5);

    useEffect(() => {
        setProductsStatus("PENDING");
        const timeoutId = setTimeout(() => {
            setProductsStatus("SUCCESS")
            setProductsData(products);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return productsData.slice(startIndex, endIndex);
    };

    const displayLoading = (
        <Box>
            <Typography sx={landingPageStyles.loadingText}>Loading ...</Typography>
        </Box>
    )

    const displayProductsdata = (
        <Box component={"ul"} sx={landingPageStyles.unorderedProductsList}>
            {getCurrentPageItems().map(eachProduct => (
                <EachProduct key={eachProduct.productId} eachProduct={eachProduct} />
            ))}
        </Box>
    );

    const displayProductsNotFound = (
        <Box>
            <Typography sx={landingPageStyles.productsNotFoundText}>Sorry, Products were Not Found</Typography>
        </Box>
    )

    const renderProductsBasedOnStatus = () => {
        switch (productsStatus) {
            case "PENDING":
                return displayLoading;
            case "SUCCESS":
                return productsData.length > 0 ? displayProductsdata : displayProductsNotFound;
            default:
                return displayProductsNotFound;
        }
    };

    const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchInputValue = event.target.value.toLowerCase();
        setSearchValue(event.target.value);
        setProductsStatus("PENDING");
        let timeoutId: NodeJS.Timeout | undefined;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const filteredProductsData = products.filter(eachProduct => eachProduct.title.toLowerCase().includes(searchInputValue));
            if (filteredProductsData.length === 0) setProductsStatus("FAILURE");
            else {
                setProductsStatus("SUCCESS");
                setProductsData(filteredProductsData);
            }
        }, 1000);
    };

    const getTotalPages = () => {
        return Math.ceil(productsData.length / itemsPerPage);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPagination = () => {
        const totalPages = getTotalPages();
        if (totalPages > 1) return Array.from({ length: totalPages }, (_, index) => index + 1);
        return [];
    };


    const ecommerceHandler = () => {
        setProductsStatus("PENDING");
        let timeoutId: NodeJS.Timeout | undefined;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setProductsStatus("SUCCESS");
        }, 1000);
    }

    const leftArrowIconHandler = () => {
        setCurrentPage(prevPageNum => prevPageNum - 1)
    }

    const rightArrowIconHandler = () => {
        setCurrentPage(prevPageNum => prevPageNum + 1)
    }

    return (
        <Box sx={landingPageStyles.mainContainer}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} sx={landingPageStyles.navbarContainer}>
                <Typography sx={landingPageStyles.navHeading} onClick={ecommerceHandler}>Ecommerce</Typography>
                <Box component={"img"} onClick={ecommerceHandler} src={"https://i.pinimg.com/564x/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"} sx={landingPageStyles.amazonLogo} alt="amazon-logo" />
                <TextField sx={landingPageStyles.textFieldStyle} onChange={searchInputHandler} value={searchValue}
                    placeholder="search-product"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><SearchOutlinedIcon sx={landingPageStyles.searchIcon} /></InputAdornment>,
                    }}
                />
            </Stack>
            <Box sx={landingPageStyles.bodyContainer}>
                {renderProductsBasedOnStatus()}
                {productsStatus === "SUCCESS" && productsData.length !== 0 && renderPagination().length !== 0 && (
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={1} marginTop={2.7}>
                        <IconButton onClick={leftArrowIconHandler} disabled={currentPage === 1} disableFocusRipple disableTouchRipple disableRipple size="small"><KeyboardArrowLeftIcon /></IconButton>
                        {renderPagination().map(eachPaginationNum => (
                            <Button key={eachPaginationNum} onClick={() => handlePageChange(eachPaginationNum)} disableElevation disableFocusRipple disableRipple disableTouchRipple variant="outlined" sx={{
                                ...landingPageStyles.paginationButton,
                                ...(eachPaginationNum === currentPage && { ...landingPageStyles.activePaginationButton }),
                            }}>{eachPaginationNum}</Button>
                        ))}
                        <IconButton onClick={rightArrowIconHandler} disabled={currentPage === 6} disableFocusRipple disableTouchRipple disableRipple size="small"><KeyboardArrowRightIcon /></IconButton>
                    </Stack>
                )}
            </Box>
        </Box>
    )
}

export default LandingPage