var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducint-telescope'
	},
	{
    	title: 'Meteor: Ice and Fire',
    	url: 'http://meteor.com'
  	}, 
 	{
    	title: 'The Meteor Book',
    	url: 'http://themeteorbook.com'
  	},
  	{
  		title: 'Git Gutter not working',
  		url:  'http://whynotworking.com'
  	}
];

Template.postsList.helpers({
	posts: postsData
});