import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Rating,
    Box,
} from "@mui/material";
import eachProductStyles from "./EachProduct.Styles";
import React from "react";
import { EachProuct } from "../../utils/typescript/data";


interface MyProps {
    eachProduct: EachProuct;
}

const EachProduct: React.FC<MyProps> = ({ eachProduct }) => {
    return (
        <Card sx={eachProductStyles.cardContainer}>
            <CardMedia
                sx={eachProductStyles.cardMedia}
                image={eachProduct.thumbnail}
                title="Products"
            />
            <CardContent sx={eachProductStyles.cardContent}>
                <Typography component="h2" sx={eachProductStyles.title}>
                    {eachProduct.title}
                </Typography>
                <Typography component="h3" sx={eachProductStyles.category}>
                    {eachProduct.category}
                </Typography>
                <Typography component="p" sx={eachProductStyles.descriptionText}>
                    {eachProduct.description}
                </Typography>
                <Box sx={eachProductStyles.cardBodyChildContainer1}>
                    <Typography component="p" sx={eachProductStyles.price}>
                        Rs {eachProduct.price}
                    </Typography>
                    <Box sx={eachProductStyles.cardBodyChildContainer2}>
                        <Rating
                            name="read-only"
                            value={eachProduct?.rating}
                            sx={eachProductStyles.rating}
                            readOnly
                        />
                        <Typography variant="body1" sx={eachProductStyles.ratingNumber}>
                            {eachProduct.rating}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={eachProductStyles.cardBodyChildContainer3}>
                    <Box sx={eachProductStyles.cardBodyChildContainer4}>
                        <Box sx={eachProductStyles.smallImagesContainer}>
                            {eachProduct.images.map((eachImg: string) => (
                                <Box
                                    component="img"
                                    sx={eachProductStyles.cardSmallImg}
                                    alt="image"
                                    src={eachImg}
                                    key={eachProduct.images.indexOf(eachImg)}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box sx={eachProductStyles.brandDiscountContainer}>
                        <Typography component="p" sx={eachProductStyles.brand}>
                            {eachProduct.brand}
                        </Typography>
                        <Typography component="p" sx={eachProductStyles.discountPercentage}>
                            {eachProduct.discountPercentage}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default EachProduct;