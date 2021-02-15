import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';


const LineChart = (props) => {
    return (
        <div className="figure-container">
            <figure>
                <VictoryChart
                    domainPadding={6}
                    width={1800}
                    height={350}
                    padding={{ top: 20, bottom: 120, left: 100, right: 100 }}
                >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={props.xList}
                        tickLabelComponent={
                            <VictoryLabel
                                textAnchor='start'
                                angle={50}
                            />
                        }
                    />
                    <VictoryAxis
                        dependentAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["1", "2", "3", "4", "5"]}
                    />
                    {props.data.difficultyDisplay ? (
                        <VictoryLine
                            data={props.chartRatings}
                            x={props.x}
                            y="difficulty"
                            style={{
                                data: { stroke: 'green', strokeWidth: 5 }
                            }}
                        />
                    ) : null}
                    {props.data.appreciationDisplay ? (
                        <VictoryLine
                            data={props.chartRatings}
                            x={props.x}
                            y="appreciation"
                            style={{
                                data: { stroke: 'gold', strokeWidth: 5 }
                            }}
                        />
                    ) : null}
                </VictoryChart>
            </figure>
        </div>
    )
}

export default LineChart;

