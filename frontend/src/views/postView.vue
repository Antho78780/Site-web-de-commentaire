<template>
	<form>
		<div class="form-group">
			<p class="sujet" for="exampleFormControlTextarea1">Message</p>
			<textarea
				class="form-control"
				id="exampleFormControlTextarea1"
				rows="3"
				v-model="post"
			></textarea>
			<input type="file" class="form-control-file" id="exampleFormControlFile1" />
		</div>
		<button @click="buttonEnvoyer" type="button" class="btn btn-primary">Envoyer</button>
	</form>
</template>
<script>
	export default {
		data() {
			return {
				post: "",
				apiPostCreate: "http://localhost:3000/posts/postCreate"
			}
		},
		methods: {
			buttonEnvoyer() {
				const userId = JSON.parse(sessionStorage.getItem("userId"));
				const post = this.post;
				const objetPost = {userId, post}
				console.log(objetPost);
				fetch(this.apiPostCreate, {
					method: "POST",
					headers: {
						"Content-type" : "application/json"
					},
					body: JSON.stringify(objetPost)
				})
				.then((res) => {
					if(res.ok) {
						window.location.href = "/#/accueil"
					}
				})
			}
		}
	}
</script>

<style scoped>
.form-group {
	width: 50%;
	margin: auto;
	margin-top: 200px;
}
p {
	font-weight: bold;
	margin-bottom: 10px;
	text-align: center;
}
textarea {
	border: 1px solid black;
}
form {
	text-align: center;
}
.btn {
	margin-top: 20px;
}
</style>