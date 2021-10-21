import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Table from '../components/Table';
import axios from 'axios';

export default function Home() {

	const periods = {
		'1D': 'day',
		'1W': 'week',
		'1M': '1month',
		'3M': '3month',
		'6M': '6month',
		'1Y': 'year'
	};
	const [stockData, setStockData] = useState([]);
	const [selectedPeriod, setSelectedPeriod] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(async () => {
		setSelectedPeriod('1Y');
		await getData(periods['1Y'])
	}, [])

	const getData = async (periodKey) => {
		setLoading(true);
		try {
			const resp = await axios.get(`https://insiderscoreboard.herokuapp.com/api/${periodKey}`);
			const { data } = resp;
			setStockData(data);
		} catch {
			console.log("something went wrong");
		}
		setLoading(false);
	}
	return (
		<Layout>
			<main>
				<div className="px-5 bg-indigo-400 rounded-md my-6 flex justify-between items-center bg-gradient-to-r from-purple-700 to-[#a65fec] ">
					<h2 className="text-3xl text-white font-bold">
						Insider Scoreboard
					</h2>
					<div className="">
					{Object.keys(periods).map((p) =>
						<button className={`px-5 py-2 text-white rounded m-2 hover:bg-blue-500 font-bold ${selectedPeriod === p ? 'bg-blue-900 shadow-md':'bg-blue-700'}`} onClick={async () => { setSelectedPeriod(p); await getData(periods[p]) }}>{p}</button>
					)}
					</div>
				</div>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="shadow-md bg-green-100 p-10 rounded">
						<div className="">
							<h2 className="text-2xl text-green-900 font-bold mb-4 text-center">
								Top Buyers
							</h2>
						</div>
						<Table rows={stockData?.buyers} type="buy" loading={loading} />
					</div>
					<div className="shadow-md bg-red-100 p-10 rounded">
						<div>
							<h2 className="text-2xl text-red-900 font-bold mb-4 text-center">
								Top Sellers
							</h2>
						</div>
						<Table rows={stockData?.sellers} type="sell" loading={loading} />
					</div>
				</div>
			</main>
		</Layout>
	)
}
