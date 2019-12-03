import React from 'react'
import {
	G2,
	Chart,
	Geom,
	Axis,
	Tooltip,
	Coord,
	Label,
	Legend,
	View,
	Guide,
	Shape,
	Facet,
	Util,
} from 'bizcharts'
import DataSet from '@antv/data-set'

class Stackedcolumn extends React.Component {
	render() {
		const data = [
			{
				name: 'Adult',
				'Kuuma': 1,
				'Lämmin': 2,
				'Sopiva': 30,
				'Viileä': 3,
				'Kylmä': 2,
			},
			{
				name: 'Child',
				'Kuuma': 2,
				'Lämmin': 2,
				'Sopiva': 10,
				'Viileä': 1,
				'Kylmä': 1,
			},
		]
		const ds = new DataSet()
		const dv = ds.createView().source(data)
		dv.transform({
			type: 'fold',
			fields: ['Kuuma', 'Lämmin', 'Sopiva', 'Viileä', 'Kylmä'],
			// 展开字段集
			key: '月份',
			// key字段
			value: '月均降雨量', // value字段
		})
		return (
			<div>
				<Chart height={400} data={dv} forceFit>
					<Legend />
					<Axis name="月份" />
					<Axis name="月均降雨量" />
					<Tooltip />
					<Geom
						type="intervalStack"
						position="月份*月均降雨量"
						color={'name'}
						style={{
							stroke: '#fff',
							lineWidth: 1,
						}}
					/>
				</Chart>
			</div>
		)
	}
}

export default Stackedcolumn
