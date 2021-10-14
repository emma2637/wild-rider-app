import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '../card/card.component'

const styles = {
    rows: {
        position: 'relative',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        padding: '24px',
        backgroundColor: '#fc0; !important',
    },
    box: {
        backgroundColor: "#fc0;",
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
        }
    }
};

const CompanyRelationSection = (props) => {

    console.log(props.data);
    return (

        <div style={styles.rows}>
            <Box style={styles.box}>
                <div className={styles.rows}>
                    <Grid container spacing={3}  justifyContent="center"  alignItems="center">
                        {props.data.map((card, index) => (
                            <Grid item xs={12} sm={4} md={4} key={index}>
                                <Card {...card}></Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Box>
        </div>
    );
}

export default CompanyRelationSection;



{/* <Grid sx={{ flexGrow: 1, mb: 3, mt: 3, backgroundColor: "#fc0;" }} 
  container 
  spacing={1}
  justifyContent="center"
  direction="row"
  alignItems="center"
  //sx={{ mb: 3, mt: 3, backgroundColor: "#fc0;" }}
  > */}



{/* <Grid item xs={12}>
  <Grid container
   justifyContent="center"
    spacing={1}
   >
    {cards.map((card: iCardCar, index) => (
      <Grid key={index} item xs={4}>
        <Paper sx={{ height: 450, width: 350 }} />
      </Grid>
    ))}

  </Grid>
</Grid> */}
{/* </Grid> */ }