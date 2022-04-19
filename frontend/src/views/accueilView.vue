<template>
	<div id="button-global">
		<button @click="buttonProfil" v-if="storageUserId" class="btn btn-primary btn-perso">
			Mon compte
		</button>
		<button @click="deconnecter" v-if="storageUserId" class="btn btn-primary btn-perso">
			Déconnexion
		</button>
		<button @click="connecter" v-if="storageUserId == null" class="btn btn-primary btn-perso">
			Se connecter
		</button>
		<button @click="enregistrer" v-if="storageUserId == null" class="btn btn-primary btn-perso">
			s'enregistrer
		</button>
	</div>
	<div class="container">
		<div class="main-body p-0">
			<div class="inner-wrapper">
				<div class="inner-sidebar">
					<div class="inner-sidebar-header justify-content-center">
						<button
							@click="buttonPost"
							class="btn btn-primary has-icon btn-block"
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-plus mr-2"
							>
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<line x1="5" y1="12" x2="19" y2="12"></line>
							</svg>
							Nouvelle Discussion
						</button>
					</div>
					<div class="inner-sidebar-body p-0">
						<div class="p-3 h-100" data-simplebar="init">
							<div class="simplebar-wrapper" style="margin: -16px">
								<div class="simplebar-height-auto-observer-wrapper">
									<div class="simplebar-height-auto-observer"></div>
								</div>
								<div class="simplebar-mask">
									<div class="simplebar-offset" style="right: 0px; bottom: 0px">
										<div
											class="simplebar-content-wrapper"
											style="height: 100%; overflow: hidden scroll"
										>
											<div class="simplebar-content" style="padding: 16px">
												<nav class="nav nav-pills nav-gap-y-1 flex-column">
													<a href="javascript:void(0)" class="nav-link nav-link-faded has-icon active"
														>All Threads</a
													>
													<a href="javascript:void(0)" class="nav-link nav-link-faded has-icon"
														>Popular this week</a
													>
													<a href="javascript:void(0)" class="nav-link nav-link-faded has-icon"
														>Popular all time</a
													>
													<a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Solved</a>
													<a href="javascript:void(0)" class="nav-link nav-link-faded has-icon"
														>Unsolved</a
													>
													<a href="javascript:void(0)" class="nav-link nav-link-faded has-icon"
														>No replies yet</a
													>
												</nav>
											</div>
										</div>
									</div>
								</div>
								<div class="simplebar-placeholder" style="width: 234px; height: 292px"></div>
							</div>
							<div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
								<div class="simplebar-scrollbar" style="width: 0px; display: none"></div>
							</div>
							<div class="simplebar-track simplebar-vertical" style="visibility: visible">
								<div
									class="simplebar-scrollbar"
									style="height: 151px; display: block; transform: translate3d(0px, 0px, 0px)"
								></div>
							</div>
						</div>
					</div>
				</div>
				<div class="inner-main">
					<div class="inner-main-header">
						<a
							class="nav-link nav-icon rounded-circle nav-link-faded mr-3 d-md-none"
							href="#"
							data-toggle="inner-sidebar"
							><i class="material-icons">arrow_forward_ios</i></a
						>
						<select class="custom-select custom-select-sm w-auto mr-1">
							<option selected="">Récent</option>
							<option value="1">Populaire</option>
							<option value="3">Résolue</option>
							<option value="3">Non résolue</option>
							<option value="3">Pas encore de réponse</option>
						</select>
						<span class="input-icon input-icon-sm ml-auto w-auto">
							<input
								type="text"
								class="
									form-control form-control-sm
									bg-gray-200
									border-gray-200
									shadow-none
									mb-4
									mt-4
								"
								placeholder="Chercher sur le forum"
							/>
						</span>
					</div>
					<div
						v-for="post of postsArray"
						:key="post"
						class="inner-main-body p-2 p-sm-3 collapse forum-content show"
					>
						<div class="card mb-2">
							<div class="card-body p-2 p-sm-3">
								<div class="media forum-item">
									<a href="#" data-toggle="collapse" data-target=".forum-content"
										><img
											:src="post.image"
											class="mr-3 rounded-circle"
											width="50"
											alt="User"
									/></a>
									<div class="media-body">
										<h6>
											<p
												href="#"
												data-toggle="collapse"
												data-target=".forum-content"
												class="text-body"
											>
												{{ post.pseudo }}
											</p>
										</h6>
										<p class="text-secondary">
											{{ post.post }}
										</p>
										<div id="flex-button">
											<button class="btn btn-success" @click="buttonComment(post)">
												Touts les commentaires
											</button>
											<button
												v-if="post.userId == post.storageUserId"
												@click="supprimerPost(post)"
												class="btn btn-primary"
											>
												Supprimer
											</button>
										</div>
										<div class="text-muted small text-center align-self-center">
											<span class="noneComment" v-if="post.numberComments > 1"
												><i class="far fa-comment ml-2"></i>
												{{ post.numberComments }} commentaires</span
											>
											<span class="noneComment" v-if="post.numberComments <= 1"
												><i class="far fa-comment ml-2"></i> {{ post.numberComments }} commentaire</span
											>
										</div>
									</div>
									<div v-for="comment of post.comments" :key="comment" class="container mt-5">
										<div class="row d-flex justify-content-center">
											<div class="col-md-8">
												<div class="card p-3">
													<div class="d-flex justify-content-between align-items-center">
														<div class="user d-flex flex-row align-items-center">
															<img
																src="https://i.imgur.com/hczKIze.jpg"
																width="30"
																class="user-img rounded-circle mr-2"
															/>
															&nbsp;
															<span
																><small class="font-weight-bold text-primary">{{ comment.userName }}</small>
																&nbsp;
																<small class="font-weight-bold">{{ comment.comment }}</small></span
															>
														</div>
														<div>
															<small>Le {{ comment.dateJour }} à {{ comment.dateHeure }}</small>
															&nbsp;
															<button
																v-if="comment.userIdComment == comment.storageUserIdComment"
																class="btn btn-success"
																@click="buttonSupprimerComment(comment, post)"
															>
																Supprimer
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div id="modifComment">
										<input
											type="text"
											placeholder="Entrez votre commentaire"
											class="modifCComment recupComment"
											value=""
										/>
										<button
											@click="buttonEnvoisComment(post)"
											class="btn btn-primary modifButtonEnvoisComment"
										>
											Envoyer
										</button>
									</div>
								</div>
							</div>
						</div>
						<ul
							class="pagination pagination-sm pagination-circle justify-content-center mb-0"
						>
							<li class="page-item disabled">
								<span class="page-link has-icon"
									><i class="material-icons">chevron_left</i></span
								>
							</li>
							<li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
							<li class="page-item active"><span class="page-link">2</span></li>
							<li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
							<li class="page-item">
								<a class="page-link has-icon" href="javascript:void(0)"
									><i class="material-icons">chevron_right</i></a
								>
							</li>
						</ul>
					</div>
					<div class="inner-main-body p-2 p-sm-3 collapse forum-content">
						<a
							href="#"
							class="btn btn-light btn-sm mb-3 has-icon"
							data-toggle="collapse"
							data-target=".forum-content"
							><i class="fa fa-arrow-left mr-2"></i>Back</a
						>
					</div>
				</div>
			</div>
			<div
				class="modal fade"
				id="threadModal"
				tabindex="-1"
				role="dialog"
				aria-labelledby="threadModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-lg" role="document">
					<div class="modal-content">
						<form>
							<div class="modal-header d-flex align-items-center bg-primary text-white">
								<h6 class="modal-title mb-0" id="threadModalLabel">New Discussion</h6>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div class="modal-body">
								<div class="form-group">
									<label for="threadTitle">Title</label>
									<input
										type="text"
										class="form-control"
										id="threadTitle"
										placeholder="Enter title"
										autofocus=""
									/>
								</div>
								<textarea class="form-control summernote" style="display: none"></textarea>

								<div class="custom-file form-control-sm mt-3" style="max-width: 300px">
									<input type="file" class="custom-file-input" id="customFile" multiple="" />
									<label class="custom-file-label" for="customFile">Attachment</label>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
								<button type="button" class="btn btn-primary">Post</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			apiGetAllPosts: "http://localhost:3000/posts/getAllPosts",
			apiGetAllUsers: "http://localhost:3000/users/getAllUsers",
			arrayAllUsers: [],
			postsArray: [],
			storageUserId: ""

		};
	},
	mounted() {
		this.storageUserId = JSON.parse(sessionStorage.getItem("userId"));
		console.log(this.storageUserId);
		fetch(this.apiGetAllPosts)
			.then((res) => res.json())
			.then((posts) => {
				for (let post of posts) {
					const newDate = new Date(post.datePost);
					const dateJour = newDate.toLocaleDateString();
					const dateHeure = newDate.toLocaleTimeString();

					fetch(`http://localhost:3000/comments/getAllComments/${post._id}`)
						.then((res) => res.json())
						.then((comments) => {
							fetch(`http://localhost:3000/users/getOneUser/${post.userId}`)
								.then((res) => res.json())
								.then((user) => {
									this.postsArray.push({
										idPost: post._id,
										pseudo: user.userName,
										post: post.post,
										comments: [],
										numberComments: comments.length,
										dateJour: dateJour,
										dateHeure: dateHeure,
										userId: user._id,
										storageUserId: this.storageUserId,
										image: user.image
									});
								});
						});
				}
			});
	},
	methods: {
		deconnecter() {
			sessionStorage.removeItem("userId");
			window.location.href= "/#/login";
		},
		connecter() {
			window.location.href= "/#/login"
		},
		enregistrer() {
			window.location.href= "/#/register"
		},
		buttonComment(post) {
			post.comments = [];

			fetch(`http://localhost:3000/comments/getAllComments/${post.idPost}`)
				.then((res) => res.json())
				.then((comments) => {
					for (let comment of comments) {
						const newDate = new Date(comment.datePost);
						const dateJour = newDate.toLocaleDateString();
						const dateHeure = newDate.toLocaleTimeString();
						const userIdStorage = JSON.parse(sessionStorage.getItem("userId"));

						fetch(`http://localhost:3000/users/getOneUser/${comment.userId}`)
							.then((res) => res.json())
							.then((userComment) => {
								post.comments.push({
									userName: userComment.userName,
									comment: comment.comment,
									dateJour: dateJour,
									dateHeure: dateHeure,
									idComment: comment._id,
									userIdComment: comment.userId,
									storageUserIdComment: userIdStorage,
								});
							});
					}
				});
		},
		buttonEnvoisComment(post) {
			post.comments = [];

			const userIdStorage = JSON.parse(sessionStorage.getItem("userId"));
			const userId = JSON.parse(sessionStorage.getItem("userId"));
			const comment = document.querySelectorAll(".recupComment");
			for (let nodeListComment of comment) {
				if (nodeListComment.value != "") {
					const comment = nodeListComment.value;
					const objetComment = { comment, userId };

					fetch(`http://localhost:3000/comments/createComment/${post.idPost}`, {
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify(objetComment),
					})
						.then((res) => res.json())
						.then(() => {
							fetch(`http://localhost:3000/comments/getAllComments/${post.idPost}`)
								.then((res) => res.json())
								.then((comments) => {
									console.log(comments)
									for (let comment of comments) {
										const newDate = new Date(comment.datePost);
										const dateJour = newDate.toLocaleDateString();
										const dateHeure = newDate.toLocaleTimeString();

										fetch(`http://localhost:3000/users/getOneUser/${comment.userId}`)
											.then((res) => res.json())
											.then((userComment) => {
												post.comments.push({
													userName: userComment.userName,
													comment: comment.comment,
													idComment: comment._id,
													userIdComment: comment.userId,
													storageUserIdComment: userIdStorage,
													dateJour: dateJour,
													dateHeure: dateHeure,
												});
												post.numberComments = comments.length;
											});
									}
								});
						});
				}
			}
		},
		buttonProfil() {
			window.location.href = "/#/profil";
		},
		buttonPost() {
			window.location.href = "/#/post";
		},
		supprimerPost(post) {
			fetch(`http://localhost:3000/posts/deletePost/${post.idPost}`, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			}).then((res) => {
				if (res.ok) {
					location.reload("/#/accueil");
				}
			});
		},
		buttonSupprimerComment(comment, post) {
			fetch(`http://localhost:3000/comments/deleteComment/${comment.idComment}`, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((commentDelete) => {
					const actualiseDeleteComment = post.comments.filter((el) => el.idComment != commentDelete._id);
					post.comments = actualiseDeleteComment;
					post.numberComments = actualiseDeleteComment.length;
				});
		},
	},
};
</script>
<style scoped>
#flex-button {
	display: flex;
	justify-content: space-between;
}
.btn-perso {
	margin: 20px;
}
#button-global {
	display: flex;
	justify-content: right;
}

body {
	margin-top: 20px;
	color: #1a202c;
	text-align: left;
	background-color: #e2e8f0;
}

.inner-wrapper {
	position: relative;
	height: calc(100vh - 3.5rem);
	transition: transform 0.3s;
}

@media (min-width: 992px) {
	.sticky-navbar .inner-wrapper {
		height: calc(100vh - 3.5rem - 48px);
	}
}

.inner-main,
.inner-sidebar {
	position: absolute;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
}

.inner-sidebar {
	left: 0;
	width: 235px;
	border-right: 1px solid #cbd5e0;
	background-color: #fff;
	z-index: 1;
}

.inner-main {
	right: 0;
	left: 235px;
}

.inner-main-footer,
.inner-main-header,
.inner-sidebar-footer,
.inner-sidebar-header {
	height: 3.5rem;
	border-bottom: 1px solid #cbd5e0;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	flex-shrink: 0;
}

.inner-main-body,
.inner-sidebar-body {
	padding: 1rem;
	overflow-y: auto;
	position: relative;
	flex: 1 1 auto;
}

.inner-main-body .sticky-top,
.inner-sidebar-body .sticky-top {
	z-index: 999;
}

.inner-main-footer,
.inner-main-header {
	background-color: #fff;
}

.inner-main-footer,
.inner-sidebar-footer {
	border-top: 1px solid #cbd5e0;
	border-bottom: 0;
	height: auto;
	min-height: 3.5rem;
}

@media (max-width: 767.98px) {
	.inner-sidebar {
		left: -235px;
	}

	.inner-main {
		left: 0;
	}

	.inner-expand .main-body {
		overflow: hidden;
	}

	.inner-expand .inner-wrapper {
		transform: translate3d(235px, 0, 0);
	}
}

.nav .show > .nav-link.nav-link-faded,
.nav-link.nav-link-faded.active,
.nav-link.nav-link-faded:active,
.nav-pills .nav-link.nav-link-faded.active,
.navbar-nav .show > .nav-link.nav-link-faded {
	color: #3367b5;
	background-color: #c9d8f0;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
	color: #fff;
	background-color: #467bcb;
}

.nav-link.has-icon {
	display: flex;
	align-items: center;
}

.nav-link.active {
	color: #467bcb;
}

.nav-pills .nav-link {
	border-radius: 0.25rem;
}

.nav-link {
	color: #4a5568;
}

.card {
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 0 solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
}

.card-body {
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1rem;
}
.text-center {
	text-align: left !important;
	margin-left: 10px;
}
.text-secondary {
	color: black !important;
}
p {
	margin-top: 10px !important;
}
#modifComment {
	margin-top: 50px;
}
.col-md-8 {
	width: 100%;
}
.bg-primary {
	border-radius: 10px;
	text-align: center;
	margin-top: 10px;
}
.modifMembre {
	font-weight: bold;
	margin: 10px;
}
i {
	font-family: FontAwesome;
}
.modifButtonEnvoisComment {
	margin-left: 10px;
}
.modifCComment {
	width: 50%;
}
</style>
