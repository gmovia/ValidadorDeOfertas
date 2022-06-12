import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

let productList  = [
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    }
]

let cartList  = [
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    },
    {
        "name": "Leche Descremada 1L, la Calmisima",
        "brand": {
            "code": "Z001ABC",
            "name": "La Calmisima"
        },
        "category": {
            "code": "X033AXX",
            "name": "Lacteo"
        },
        "price": 25.40,
        "iva_percentage": "10.5",
        "code": "AAR453J"
    }
]


export default function productItem() {

  return (
    <Grid container>
        <Grid item xs = {6} md = {6}>
        <TextField label="Search for an item" inputProps={{ 'aria-label': 'searchTextField' }} margin="normal"/>

            <Box display="flex"  alignItems="left" sx={{ flexWrap: 'wrap',alignContent: 'flex-start' }}>
                {productList.map((product) => {
                    return (
                        <Card sx={{ margin: 1, maxWidth: 130 }}>
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                        {product.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {"$" + product.price}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" variant="contained" color="success">Add To Cart</Button>
                        </CardActions>
                    </Card>

                    )
                })}
            </Box>
        </Grid>


        <Grid item xs={6} md={6}>
            <Box display="flex"  alignItems="left" sx={{ flexWrap: 'wrap',alignContent: 'flex-start' }}>
                {cartList.map((product) => {
                    return (
                        <Card sx={{ margin: 1, maxWidth: 130 }}>
                        <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                        {product.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {"$" + product.price}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" variant="contained" color="error">Remove From Cart</Button>
                        </CardActions>
                    </Card>

                    )
                })}
            </Box>
                
            <Button size="small" variant="contained" >Pay Cart</Button>
        </Grid>
    </Grid>
  );
}
