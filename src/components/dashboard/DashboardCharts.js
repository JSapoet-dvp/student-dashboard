import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryLegend } from 'victory';

const DashboardCharts = (props) => {
    return (
        <div className="figure-container">
            <figure>
                <h2>{props.chartTitle}</h2>
                <VictoryChart
                    domainPadding={props.domainPadding}
                    width={1800}
                    height={350}
                    padding={{ top: 20, bottom: 120, left: 100, right: 100 }}
                >
                    <VictoryLegend
                        x={100} y={-8}
                        orientation="horizontal"
                        gutter={25}
                        data={[
                            { name: `x = ${props.x}`, symbol: { fill: "grey" } },
                            { name: "y = rating", symbol: { fill: "grey", type: "star" } },
                            { name: "difficulty", symbol: { fill: "green", type: "square" } },
                            { name: "appreciaton", symbol: { fill: "gold", type: "square" } }
                        ]}
                    />
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
                    <VictoryGroup
                        offset={props.GroupOffset}
                    >
                        {props.data.difficultyDisplay ? (
                            <VictoryBar
                                data={props.chartRatings}
                                x={props.x}
                                y="difficulty"
                                alignment='start'
                                color='green'
                            />
                        ) : null}
                        {props.data.appreciationDisplay ? (
                            <VictoryBar
                                data={props.chartRatings}
                                x={props.x}
                                y="appreciation"
                                alignment='start'
                                color='gold'
                            />
                        ) : null}
                    </VictoryGroup>
                </VictoryChart>
            </figure>
        </div>
    )
}

export default DashboardCharts;
