<template>
	<div class="row">
		<div class="col-md-6">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Bordered Table</h3>
				</div>

				<div class="card-body">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th style="width: 10px">#</th>
								<th>Task</th>
								<th>Progress</th>
								<th style="width: 40px">Label</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1.</td>
								<td>Update software</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar progress-bar-danger" style="width: 55%"></div>
									</div>
								</td>
								<td><span class="badge bg-danger">55%</span></td>
							</tr>
							<tr>
								<td>2.</td>
								<td>Clean database</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar bg-warning" style="width: 70%"></div>
									</div>
								</td>
								<td><span class="badge bg-warning">70%</span></td>
							</tr>
							<tr>
								<td>3.</td>
								<td>Cron job running</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-primary" style="width: 30%"></div>
									</div>
								</td>
								<td><span class="badge bg-primary">30%</span></td>
							</tr>
							<tr>
								<td>4.</td>
								<td>Fix and squish bugs</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-success" style="width: 90%"></div>
									</div>
								</td>
								<td><span class="badge bg-success">90%</span></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="card-footer clearfix">
					<ul class="pagination pagination-sm m-0 float-right">
						<li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
					</ul>
				</div>
			</div>

			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Condensed Full Width Table</h3>
				</div>

				<div class="card-body p-0">
					<table class="table table-sm">
						<thead>
							<tr>
								<th style="width: 10px">#</th>
								<th>Task</th>
								<th>Progress</th>
								<th style="width: 40px">Label</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1.</td>
								<td>Update software</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar progress-bar-danger" style="width: 55%"></div>
									</div>
								</td>
								<td><span class="badge bg-danger">55%</span></td>
							</tr>
							<tr>
								<td>2.</td>
								<td>Clean database</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar bg-warning" style="width: 70%"></div>
									</div>
								</td>
								<td><span class="badge bg-warning">70%</span></td>
							</tr>
							<tr>
								<td>3.</td>
								<td>Cron job running</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-primary" style="width: 30%"></div>
									</div>
								</td>
								<td><span class="badge bg-primary">30%</span></td>
							</tr>
							<tr>
								<td>4.</td>
								<td>Fix and squish bugs</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-success" style="width: 90%"></div>
									</div>
								</td>
								<td><span class="badge bg-success">90%</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="col-md-6">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Simple Full Width Table</h3>

					<div class="card-tools">
						<ul class="pagination pagination-sm float-right">
							<li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
							<li class="page-item"><a class="page-link" href="#">1</a></li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
						</ul>
					</div>
				</div>

				<div class="card-body p-0">
					<table class="table">
						<thead>
							<tr>
								<th style="width: 10px">#</th>
								<th>Task</th>
								<th>Progress</th>
								<th style="width: 40px">Label</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1.</td>
								<td>Update software</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar progress-bar-danger" style="width: 55%"></div>
									</div>
								</td>
								<td><span class="badge bg-danger">55%</span></td>
							</tr>
							<tr>
								<td>2.</td>
								<td>Clean database</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar bg-warning" style="width: 70%"></div>
									</div>
								</td>
								<td><span class="badge bg-warning">70%</span></td>
							</tr>
							<tr>
								<td>3.</td>
								<td>Cron job running</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-primary" style="width: 30%"></div>
									</div>
								</td>
								<td><span class="badge bg-primary">30%</span></td>
							</tr>
							<tr>
								<td>4.</td>
								<td>Fix and squish bugs</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-success" style="width: 90%"></div>
									</div>
								</td>
								<td><span class="badge bg-success">90%</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Striped Full Width Table</h3>
				</div>

				<div class="card-body p-0">
					<table class="table table-striped">
						<thead>
							<tr>
								<th style="width: 10px">#</th>
								<th>Task</th>
								<th>Progress</th>
								<th style="width: 40px">Label</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1.</td>
								<td>Update software</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar progress-bar-danger" style="width: 55%"></div>
									</div>
								</td>
								<td><span class="badge bg-danger">55%</span></td>
							</tr>
							<tr>
								<td>2.</td>
								<td>Clean database</td>
								<td>
									<div class="progress progress-xs">
										<div class="progress-bar bg-warning" style="width: 70%"></div>
									</div>
								</td>
								<td><span class="badge bg-warning">70%</span></td>
							</tr>
							<tr>
								<td>3.</td>
								<td>Cron job running</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-primary" style="width: 30%"></div>
									</div>
								</td>
								<td><span class="badge bg-primary">30%</span></td>
							</tr>
							<tr>
								<td>4.</td>
								<td>Fix and squish bugs</td>
								<td>
									<div class="progress progress-xs progress-striped active">
										<div class="progress-bar bg-success" style="width: 90%"></div>
									</div>
								</td>
								<td><span class="badge bg-success">90%</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Responsive Hover Table</h3>

					<div class="card-tools">
						<div class="input-group input-group-sm" style="width: 150px;">
							<input type="text" name="table_search" class="form-control float-right" placeholder="Search">

							<div class="input-group-append">
								<button type="submit" class="btn btn-default">
									<font-awesome-icon class="fas" icon="fa-search" />
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="card-body table-responsive p-0">
					<table class="table table-hover text-nowrap">
						<thead>
							<tr>
								<th>ID</th>
								<th>User</th>
								<th>Date</th>
								<th>Status</th>
								<th>Reason</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>183</td>
								<td>John Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-success">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>219</td>
								<td>Alexander Pierce</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-warning">Pending</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>657</td>
								<td>Bob Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-primary">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>175</td>
								<td>Mike Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-danger">Denied</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>


	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Fixed Header Table</h3>

					<div class="card-tools">
						<div class="input-group input-group-sm" style="width: 150px;">
							<input type="text" name="table_search" class="form-control float-right" placeholder="Search">

							<div class="input-group-append">
								<button type="submit" class="btn btn-default">
									<font-awesome-icon class="fas" icon="fa-search" />
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="card-body table-responsive p-0" style="height: 300px;">
					<table class="table table-head-fixed text-nowrap">
						<thead>
							<tr>
								<th>ID</th>
								<th>User</th>
								<th>Date</th>
								<th>Status</th>
								<th>Reason</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>183</td>
								<td>John Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-success">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>219</td>
								<td>Alexander Pierce</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-warning">Pending</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>657</td>
								<td>Bob Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-primary">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>175</td>
								<td>Mike Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-danger">Denied</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>134</td>
								<td>Jim Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-success">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>494</td>
								<td>Victoria Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-warning">Pending</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>832</td>
								<td>Michael Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-primary">Approved</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
							<tr>
								<td>982</td>
								<td>Rocky Doe</td>
								<td>11-7-2014</td>
								<td><span class="tag tag-danger">Denied</span></td>
								<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Expandable Table</h3>
				</div>
				<!-- ./card-header -->
				<div class="card-body">
					<table class="table table-bordered table-hover">
						<thead>
							<tr>
								<th>#</th>
								<th>User</th>
								<th>Date</th>
								<th>Status</th>
								<th>Reason</th>
							</tr>
						</thead>
						<tbody>
							<template  v-for="item in 6" :key="item">
								<tr data-widget="expandable-table" aria-expanded="false" @click="expandable($event)">
									<td>183</td>
									<td>John Doe</td>
									<td>11-7-2014</td>
									<td>Approved</td>
									<td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
								</tr>
								<tr class="expandable-body" :class="(item % 2 === 0) ? '' : 'd-none'">
									<td colspan="5">
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
										</p>
									</td>
								</tr>
							</template>
						</tbody>
					</table>
				</div>
				<!-- /.card-body -->
			</div>
			<!-- /.card -->
		</div>
	</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

export default {
	name: 'simple',
	components: {
		FontAwesomeIcon
	},
	methods: {
		expandable(event) {
			var eleExpand = event.target.parentElement.nextElementSibling;
			eleExpand.classList.toggle('d-none')
		}
	}
};
</script>