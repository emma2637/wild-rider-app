import Image from 'next/image'
import { Card, CardContent, CardHeader, Container, Typography, Grid, Avatar, Button, } from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';

import styles from '../../styles/banner.module.scss'
import { ReactComponent as tripAdvisorLogo } from '../../public/tripAdvisorLogo.svg'
import CustomizedButtons from '../secondaryButton/secondaryButton.component';

const Banner = (props) => {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.ContentPosition ? props.ContentPosition : "left"
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (

        <Grid item xs={12 / totalItems} key="content">
            <CardContent className={styles.Content}>
                <Image src={props.item.Image} layout="fill" objectFit="" priority loading="eager" className={styles.CarImage} />
                <Container maxWidth="lg" className={styles.Container} >

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography className={styles.Title}>
                                {props.item.Name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                {props.item.Caption.split('.').map((item, index) => {
                                    return (
                                        <Grid item xs={12} key={index}>
                                            <Typography className={styles.Caption} >
                                                {item}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            {/* <Button variant="outlined" className={styles.ViewButton}>
                                {props.item.Button}
                            </Button> */}
                            <CustomizedButtons isReadButton buttonText={props.item.Button} />
                        </Grid>

                    </Grid>

                    <Grid container spacing={8}>
                        <Grid item xs={12} md={6} >
                            {
                                props.item.Rating ? <div id="divRating">
                                    <Card className={styles.Rating} >
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="profileImage" className={styles.Avatar}>
                                                    <Image src={props.item.Rating.ProfileImage} width={30} height={30} layout="responsive" objectFit="fill" />
                                                </Avatar>
                                            }
                                            title={
                                                <Rating name="read-only" value={props.item.Rating.Stars} readOnly />
                                            }

                                        />
                                        <CardContent>
                                            <Typography className={styles.RatingContent}>
                                                {props.item.Rating.Comment}
                                            </Typography>
                                            <Typography className={styles.RatingSubContent}>
                                                {props.item.Rating.Name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div> : null
                            }
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {
                                props.item.TripAdvisor ?
                                    <Card className={styles.TripAdvisor}>
                                        <CardHeader title={
                                            <Typography className={styles.TripAdvisorTitle}>
                                                {props.item.TripAdvisor.Content}
                                            </Typography>
                                        }

                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="tripadvisorImage" className={styles.Avatar}>
                                                    <Image src={props.item.TripAdvisor.Image} width={30} height={30} layout="responsive" objectFit="fill" />

                                                </Avatar>
                                            } />
                                    </Card> : null
                            }

                        </Grid>
                    </Grid>
                </Container>
            </CardContent>
        </Grid>
    )

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (

        <Card raised className={styles.Banner} >
            <Grid container spacing={0} className={styles.BannerGrid}>
                {items}
            </Grid>
        </Card>
    )
}

export default Banner;
