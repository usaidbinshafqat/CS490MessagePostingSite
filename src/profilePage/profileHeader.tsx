import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Toolbar from "@mui/material/Toolbar";
import { CardHeader, Avatar, Color, Paper } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

export const Header = () => {
    return (
        <Container maxWidth="sm">
        <Card sx={{ maxWidth: 550, marginTop: 1}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image="https://climatecommunication.yale.edu/wp-content/uploads/2017/04/001-stone-circle-jpeg-768x350.jpg"
            />
            <CardContent
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px"
                }}
            >
                <Typography gutterBottom variant="h6" component="div" fontWeight="bolder">
                    @Phumz
                </Typography>
                <Button size="medium">Edit Profile</Button>
            </CardContent>
            <CardContent style={{ display: "flex", justifyContent: "right", padding: "2px" }}>
                <Typography gutterBottom component="div" color="grey" fontSize="small" marginRight="5px">
                    Joined 10/2022
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                <Button size="medium">0 Following</Button>
                <Button size="medium">Follow</Button>
            </CardActions>
        </Card>
        </Container>
    );
}
