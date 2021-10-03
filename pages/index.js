import Layout from '../components/layout';

export default function Home() {
  return (
	  <Layout>
	  <main>
		<div class="grid md:grid-cols-2 gap-4">
			<div class="shadow-md bg-green-100 p-10 text-center rounded">
				<h2 class="text-2xl text-green-900 font-bold mb-4">
					Top Buyers
				</h2>
			</div>
			<div class="shadow-md bg-red-100 p-10 text-center rounded">
				<h2 class="text-2xl text-red-900 font-bold mb-4">
					Top Buyers
				</h2>
			</div>
		</div>
	  </main>
	  </Layout>
  )
}
