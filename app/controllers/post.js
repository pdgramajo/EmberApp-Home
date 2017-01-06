import Ember from 'ember';

export default Ember.Controller.extend({
    showmodal:false,
    	actions:{
		saveComment(comment,postid){
			const  post = this.get('store').peekRecord('post', postid);
			const commentobj = this.store.createRecord('comment',{text: comment,postId:postid,post: postid});
			commentobj.save().then(function(commentresponse){
				post.get('comments').pushObject(commentresponse);
			},function(){				
				alert('error');
			});
		},
		deleteComment(comment){
			comment.destroyRecord();
		},
		modalaction(){
			
			this.set('showmodal',true);
		},
		close12(){
			this.set('showmodal',false);
			console.log('-------------- entro al cancel');
		},
		submit(post){
		  		  post.save().then(()=>{
		  		  	 this.set('showmodal',false);
		  		  }); // => PUT to '/posts/1'
		},
	}
});
