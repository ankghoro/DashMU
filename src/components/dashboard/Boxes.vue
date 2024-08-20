<template>
	<div class="row">
		<div class="col-lg-3 col-6">
			<div class="small-box bg-info">
				<div class="inner">
					<h3>150</h3>
					<p>New Orders</p>
				</div>
				<div class="icon">
					<font-awesome-icon class="fas" icon="fa-solid fa-bag-shopping" />
				</div>
				<a href="#" class="small-box-footer">
					More info <font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
				</a>
			</div>
		</div>
		<div class="col-lg-3 col-6">
			<div class="small-box bg-success">
				<div class="inner">
					<h3>53<sup style="font-size: 20px">%</sup></h3>
					<p>Bounce Rate</p>
				</div>
				<div class="icon">
					<font-awesome-icon class="fas" icon="fa-solid fa-chart-simple" />
				</div>
				<a href="#" class="small-box-footer">
					More info <font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
				</a>
			</div>
		</div>
		<div class="col-lg-3 col-6">
			<div class="small-box bg-warning">
				<div class="inner">
					<h3>44</h3>
					<p>User Registrations</p>
				</div>
				<div class="icon">
					<font-awesome-icon class="fas" icon="fa-solid fa-user-plus" />
				</div>
				<a href="#" class="small-box-footer">
					More info <font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
				</a>
			</div>
		</div>
		<div class="col-lg-3 col-6">
			<div class="small-box bg-danger">
				<div class="inner">
					<h3>65</h3>
					<p>Unique Visitors</p>
				</div>
				<div class="icon">
					<font-awesome-icon class="fas" icon="fa-solid fa-chart-pie" />
				</div>
				<a href="#" class="small-box-footer">
					More info <font-awesome-icon class="fas" icon="fa-solid fa-arrow-circle-right" style="height:16px" />
				</a>
			</div>
		</div>
	</div>

	<div class="row">
		<section class="col-lg-6 connectedSortable">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">
						<font-awesome-icon class="fas" icon="fa-solid fa-chart-pie" /> Sales
					</h3>
					<div class="card-tools">
						<ul class="nav nav-pills ml-auto">
							<li class="nav-item">
								<a class="nav-link active" @click="setActived($event, 'bar')">Bar</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" @click="setActived($event, 'pie')">Pie</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="card-body">
					<div class="tab-content p-0">
						<div class="chart tab-pane active" ref="bar" style="position: relative; height: 300px;">
							<Bar :data="dataBar" :options="optionsBar" />
						</div>
						<div class="chart tab-pane" ref="pie" style="position: relative; height: 300px;">
							<Pie :data="dataPie" :options="optionsPie" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="col-lg-6 connectedSortable">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">
						<font-awesome-icon class="fas" icon="fa-solid fa-chart-pie" /> Market Area
					</h3>
					<div class="card-tools">
						<ul class="nav nav-pills ml-auto">
							<li class="nav-item">
								<a class="nav-link active" @click="setActived($event, 'line')">Line</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" @click="setActived($event, 'doughnut')">Doughnut</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="card-body">
					<div class="tab-content p-0">
						<div class="chart tab-pane active" ref="line" style="position: relative; height: 300px;">
							<Line :data="dataLine" :options="optionsLine" />
						</div>
						<div class="chart tab-pane" ref="doughnut" style="position: relative; height: 300px;">
							<Doughnut :data="dataDough" :options="optionsDough" />
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowCircleRight, faBagShopping, faChartSimple, faUserPlus, faChartPie } from '@fortawesome/free-solid-svg-icons'

// https://vue-chartjs.org/examples/
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Bar, Pie, Line, Doughnut } from 'vue-chartjs'

library.add(faArrowCircleRight)
library.add(faBagShopping)
library.add(faChartSimple)
library.add(faUserPlus)
library.add(faChartPie)

ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale, PointElement, LineElement)

export default {
	name: 'boxes',
	components: {
		FontAwesomeIcon,
		Bar,
		Pie,
		Line,
		Doughnut
	},
	methods: {
		setActived(event, param) {
			let parent = event.target.parentElement.parentElement.children;
			for(var i = 0; i < parent.length; i++) {
				parent[i].children[0].classList.remove('active')
				event.target.classList.add('active')
			}

			this.$refs.bar.classList.remove('active')
			this.$refs.pie.classList.remove('active')
			this.$refs.line.classList.remove('active')
			this.$refs.doughnut.classList.remove('active')

			switch(param) {
				case 'bar': this.$refs.bar.classList.add('active'); break;
				case 'pie': this.$refs.pie.classList.add('active'); break;
				case 'line': this.$refs.line.classList.add('active'); break;
				case 'doughnut': this.$refs.doughnut.classList.add('active'); break;
			}
		}
	},
	data() {
		return {
			dataPie: {
				labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
				datasets: [
					{
						backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
						data: [40, 20, 80, 10]
					}
				]
			},
			optionsPie: {
				responsive: true,
				maintainAspectRatio: false
			},
			dataBar: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
					}
				]
			},
			optionsBar: {
				responsive: true,
				maintainAspectRatio: false
			},
			dataLine: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
				{
					label: 'Data One',
					backgroundColor: '#f87979',
					data: [40, 39, 10, 40, 39, 80, 40]
				}
				]
			},
			optionsLine: {
				responsive: true,
				maintainAspectRatio: false
			},
			dataDough: {
				labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
				datasets: [
				{
					backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
					data: [40, 20, 80, 10]
				}
				]
			},
			optionsDough: {
				responsive: true,
				maintainAspectRatio: false
			}
		}
	}
};
</script>