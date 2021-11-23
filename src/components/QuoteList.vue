<template>
	<div class="row justify-content-center">
		<div class="col-md-8">
			<h3>Your Quote Today</h3>
			<form @submit.prevent="onFormSubmit">
				<textarea rows="3" cols="10" class="form-control" placeholder="Fill your quote here..." v-model="quote"></textarea>
				<div class="form-group mt-2">
					<button class="btn btn-success btn-md">Add</button>
				</div>
			</form>
		</div>
		<div class="col-md-8 mt-3" v-for="q in Quotes" :key="q.id">
			<div class="card">
				<div class="card-body">
					<blockquote class="text-center qtext">" {{q.text}} "</blockquote>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import db from '@/firebaseDb.js'
	import {collection, getDocs, addDoc, serverTimestamp, query, orderBy} from 'firebase/firestore'

	export default {
		data() {
			return {
				quote: '',
				Quotes: []
			}
		},
		created() {
			const q = query(collection(db, 'quotes'), orderBy('createdAt', 'desc'))
			this.getDatas(q)
		},
		methods: {
			onFormSubmit(event) {
				event.preventDefault()
				addDoc(collection(db,'quotes'), {text: this.quote,createdAt: serverTimestamp()}).then((doc) => {
					this.Quotes.unshift({text: this.quote, id: doc.id})
					this.quote = ''
				})
			},
			getDatas(q){
				getDocs(q).then((snapshot) => {
					snapshot.docs.forEach((doc) => {
						this.Quotes.push({...doc.data(),id: doc.id})
					})
				})	
			}
		}
	}
</script>
<style scoped>
	.qtext {
		font-size: 1.5rem;
	}
</style>