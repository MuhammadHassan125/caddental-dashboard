
import { Box, Typography } from '@mui/material';
import CountUp from 'react-countup';


const carddetails = [
    {
        title: "Sales MTD",
        days: "4% (30 days)"
    },
    {
        title: "Files downloaded...",
        days: "4% (30 days)"
    },
    {
        title: "Files pending MTD",
        days: "4% (30 days)"
    },
    {
        title: "New Users MTD",
        days: "4% (30 days)"
    },
    {
        title: "Active users MTD",
        days: "4% (30 days)"
    },
    {
        title: "Sales YTD",
        days: "4% (30 days)"
    }
]

const Dashboardcontent = () => {
    return (
        <>
            <section className='dashboard-section'>
                <div>
                    <div className='dashboard-heading'>
                        <Box>

                        <Typography variant="h5"
                        sx={{
                            fontWeight: 600,
                            fontFamily: 'Poppins',
                        }} >
                            Dashboard
                            </Typography>
                        <Typography 
                        variant="p"
                        sx={{ fontWeight: 300, fontFamily: 'Poppins' }}>Hi, Samantha. Welcome back  to Model Prime Admin!</Typography>
                        </Box>
                    </div>
                    <div className='top-card-main'>

                        {carddetails.map((item, index) => (
                            <div className='top-card-one' key={index}>
                                <div className='circle-img'><img src='/Ellipse 2.png' alt='circle' /></div>
                                <div className='right-inner-card'>
                                    <h1>
                                        <CountUp start={0} end={10} duration={1} delay={0} />
                                    </h1>
                                    <h4>{item.title}</h4>

                                    <div className='arrow-content'>
                                        <img src='/arrow up.PNG' alt='arrow' />
                                        <p>{item.days}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* <div className='dashboard-charts-main'>
                        <div className='left-chart'>
                            <RevenueChart />
                        </div>
                        <div className='right-cart'>
                            <CustomerChart />
                        </div>
                    </div> */}
                    {/* <SalesReport /> */}
                    {/* <CustomerReviews /> */}

                </div>
            </section>
        </>
    )
}

export default Dashboardcontent