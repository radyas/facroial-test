import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';
import getMetrics from "../../services/metricService";

function TimelinePage() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState('');
    const customTheme = {
        yearColor: '#405b73',
        lineColor: '#d0cdc4',
        dotColor: '#262626',
        borderDotColor: '#d0cdc4',
        titleColor: '#405b73',
        subtitleColor: '#bf9765',
        textColor: '#262626',
       };

    useEffect(() => {
        getMetrics()
        .then((response) => {
            setData(response.data)
            let date = response.data.length > 0 ? new Date(response.data[0].timestamp).toISOString().slice(0, 10) : ''
            setDate(date)
        })
    }, [])

    function getDate(timestamp){
        return timestamp.toISOString().slice(0, 10) + " " + timestamp.toISOString().slice(11, 19)
    }

    return (
        <div className='w-100'>

            <div className="row justify-content-end">
                <div className="col-3">
                    <Link to='/metrics/add' className='btn btn-outline-dark'>Add Metric</Link>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="col-2">
                {
                    data.length > 0 ? 
                        <Timeline theme={customTheme} dateFormat='ll'>
                            <Container className='row justify-content-center'>
                                <YearContent startDate={date} />
                                    <BodyContent>
                                        {
                                            data?.map(item => (
                                                <Section title={item.name}>
                                                    <Description variant='subtitle' text={getDate(new Date(item.timestamp))} />
                                                    <Description text={item.value} />
                                                </Section>
                                            ))
                                        }
                                        
                                    </BodyContent>
                            </Container>
                        </Timeline>
                    : <div className='div'>safsdf</div>
                }
                </div>
            </div>

        </div>
    )
}

export default TimelinePage
