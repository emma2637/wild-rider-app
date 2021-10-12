import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
    Slider,
} from '@material-ui/core';
import styles from '../../styles/carousel.module.scss'

const  Banner= (props)=> {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.ContentPosition ? props.ContentPosition : "left"
    const totalItems = props.length ? props.length : 1;
    const mediaLength = totalItems - 1;

    console.log(props.item.image);
    let items = [];
    let background ={"background-image":`url('${props.item.Image}')`,"background-repeat":"round"}
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className={styles.Content} style={background}>
                <Typography className={styles.Title}>
                    {props.item.Name}
                </Typography>

                <Typography className={styles.Caption}>
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className={styles.ViewButton}>
                    {props.item.Button}
                </Button>
            </CardContent>
        </Grid>
    )

    // for (let i = 0; i < mediaLength; i++) {
    //     const item = props.item.Items[i];

    //     const media = (
    //         <Grid item xs={12 / totalItems} key={item.Name}>
    //             <CardMedia
    //                 className={styles.Media}
    //                 image={item.Image}
    //                 title={item.Name}
    //             >
    //                 <Typography className={styles.MediaCaption}>
    //                     {item.Name}
    //                 </Typography>
    //             </CardMedia>

    //         </Grid>
    //     )

    //     items.push(media);
    // }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className={styles.Banner}>
            <Grid container spacing={0} className={styles.BannerGrid}>
                {items}
            </Grid>
        </Card>
    )
}

export default Banner;
