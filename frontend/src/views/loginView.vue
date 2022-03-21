<template>
	<div class="container mt-5">
		<div class="row d-flex justify-content-center">
			<div class="col-md-6">
				<div class="card px-5 py-5" id="form1">
					<div class="form-data">
						<form method="post" class="forms-inputs mb-4">
							<span>Email</span>
							<input class="borderText" type="text" v-model="email" />
						</form>
						<form method="post" class="forms-inputs mb-4">
							<span>Mot de passe</span>
							<input class="borderText" type="password" v-model="password" />
							<div class="errorMsg">{{ errorCompte }}</div>
						</form>
						<div class="mb-3">
							<button @click="connecter" class="btn btn-dark w-100">Se connecter</button>
						</div>
						<div class="mb-3">
							<button @click="pageEnregistrer" class="btn btn-dark w-100">
								S'enregistrer
							</button>
						</div>
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
			email: "",
			password: "",
			apiUserLogin: "http://localhost:3000/users/login",
			errorCompte: "",
		};
	},
	methods: {
		connecter() {
			const email = this.email;
			const mdp = this.password;
			const objetLogin = { email, mdp };
			console.log(objetLogin);
			fetch(this.apiUserLogin, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(objetLogin),
			})
				.then((res) => res.json())
				.then((user) => {
					console.log(user);

					if (user.userId) {
						sessionStorage.setItem("userId", JSON.stringify(user.userId));
						window.location.href = "/#/accueil";
					} else {
						this.errorCompte = user.error;
					}
				});
		},
		pageEnregistrer() {
			window.location.href = "/?#/register";
		},
	},
};
</script>

<style scoped>
.card {
	border: none;
	height: 320px;
}

.forms-inputs {
	position: relative;
}

.forms-inputs span {
	position: absolute;
	top: -18px;
	left: 10px;
	background-color: #fff;
	padding: 5px 10px;
	font-size: 15px;
}

.forms-inputs input {
	height: 50px;
	border: 2px solid #eee;
}

.forms-inputs input:focus {
	box-shadow: none;
	outline: none;
	border: 2px solid #000;
}

.btn {
	height: 50px;
}

.success-data {
	display: flex;
	flex-direction: column;
}

.bxs-badge-check {
	font-size: 90px;
}
input {
	width: 100%;
}
.col-md-6 {
	margin-top: 15% !important;
}
.panel-default {
	margin-top: 50%;
}
.errorMsg {
	text-align: center;
	font-weight: bold;
	color: red;
}
.btn-dark {
	background-color: #76b852;
	border: #76b852;
}
span {
	font-weight: bold;
}
.borderText {
	border: 1px solid #ced4da !important;
}
</style>
