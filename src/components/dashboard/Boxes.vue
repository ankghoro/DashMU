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
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowCircleRight, faBagShopping, faChartSimple, faUserPlus, faChartPie } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleRight)
library.add(faBagShopping)
library.add(faChartSimple)
library.add(faUserPlus)
library.add(faChartPie)

export default {
	name: 'boxes',
	components: {
		FontAwesomeIcon
	}
}

</script>