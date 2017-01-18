import Ember from 'ember';

export default Ember.Controller.extend({
    needs:['application'],
    formIsVisible:false,
    application_var: Ember.computed.alias("controllers.application"),
    dataSelected: function () {
        var filter = this.get('filter');
        if(filter){
        return this.get('model').filter(function (item) {
            var regexp = new RegExp(filter, 'gi');
            return item.data.title.toLowerCase().match(regexp);           
        });
        }else{
             return this.get('model');
        }
    }.property('filter'),
    init: function () {
      this._super();
      const self = this;
       Ember.run.schedule("afterRender",this,function() {
           
           
                   Ember.$('#divFileUpload').append(
            Ember.$.cloudinary.unsigned_upload_tag("qnvkqwwe", { cloud_name: 'dmowfiazz' })
            .bind('cloudinarydone', function (e, data) {
                Ember.$('.upload-result').html(Ember.$.cloudinary.image(data.result.public_id,
                      { cloud_name: 'dmowfiazz',
                          format: 'jpg', width: 150, height: 100,
                          crop: 'thumb', gravity: 'face', effect: 'saturation:50'
                      }))
                }
            )
        );
       });
    },
    actions:{
		viewForm(){
			this.set('formIsVisible',true);
		},
		hideForm(){
		    this.set('formIsVisible',false);
		},
         didSelectFiles(files, resetInput) {
             	console.log('------------------------------------------');
            	console.log('e => ',files);
             console.log('------------------------------------------');
             // Do something with your files.
             // Once you're done, call the reset method:
             resetInput();
             // Now your input is reset!
         },
		savePost(e){

		    
		    console.log('------------------------------------------');
              console.log('file => ',e);
        
              console.log('------------------------------------------');
		    const title = this.get('title');
		    const body = this.get('body');
		    
		     var newpost =   this.get('store').createRecord('post', {
                  title: title,
                  description:body
                });
                var self = this;
                newpost.save().then(function(post){
                    self.transitionToRoute('post', post);
                }).catch(function(e){
                    console.log('error: ',e);
                });
            
			this.set('formIsVisible',false);
			this.set('title','');
			this.set('body','');
		},
		deletePost(post){
		/* let post1 = this.store.peekRecord('post', post.id);
            post1.get('comments').then((comments) => {
                comments.forEach(function(comment) {
                       comment.destroyRecord();
                    });
            });*/
            
		 post.destroyRecord();
		},
		showThumbnail(x){
		    
		    console.log('x=> ',x);
		    
		}
	}
    
});


    function handleFileSelect(evt) {
              var file = evt.target.files[0];
   
              console.log('------------------------------------------');
              console.log('file => ',file);
        
              console.log('------------------------------------------');
}