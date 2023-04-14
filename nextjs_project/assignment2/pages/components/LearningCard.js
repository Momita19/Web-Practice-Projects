import React from 'react'
import styles from '/styles/Learning.module.css'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import data from '../api/Data/Learning.json'
const cardStyle = { width: "312px", height: "390px" };

const LearningCard = () => {
  return (
    <div>

      <Grid.Container className={styles.cardGrid} gap={2} justify="flex-start">
        {data.map((item, index) => (
          <Grid className={styles.cardBody} xs={3} sm={6} md={3} key={index}>
            <Card style={cardStyle}>
              <Card.Body css={{ p: 6 }}>
                <Card.Image className={styles.image}
                  src={item.src}
                  objectFit="cover"
                  width={296}
                  height={203}
                />
              </Card.Body >
              <CardContent css={{ p: 6 }} >
                <Typography className={styles.body} fontFamily={"sans-serif"} gutterBottom variant="h5" component="div" fontSize={16}>
                  {item.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize={12}>
                  {item.content}
                </Typography>
              </CardContent>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between"  >
                  <Text color="text.secondary" fontSize={16}  >{item.Date}</Text>
                  <Text css={{ fontWeight: "$semibold", fontSize: "$sm" }}>
                    {/* {item.date} */}
                  </Text>
                </Row>
                <CardActions>
                  <Button
                    style={{

                      padding: "0px 2px",
                      fontSize: "16px"
                    }}
                    variant="contained"
                  >
                    Read now
                  </Button>
                  {/* <Button css={ { "*-amber-700",  "flex" } }size="small">Read now</Button> */}
                </CardActions>
              </Card.Footer>
            </Card>
          </Grid>

        ))}
      </Grid.Container>
    </div>
  )
}

export default LearningCard