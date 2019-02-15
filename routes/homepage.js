exports.view = function(req, res){
  res.render('homepage', {
	"itineraries": [
			{
				"title": "China 2 day",
				"startdate": "5/2/19",
				"enddate": "5/7/19",
				"description": "Going around Guangzhong",
				"plan":{
					"event": "walking with family", 
					"time": "10am", 
					"location": "Guangzhong", 
					"description": "going through supermarkets"
				}
			},
			{
				"title": "Texas Spring break",
				"startdate": "3/4/19",
				"enddate": "3/7/19",
				"description": "Travel from Austin to Sante Fe",
				"plan":{
					"event": "wake up", 
					"time": "7am", 
					"location": "Austin hotel", 
					"description": "getting together for breakfast"
				}
			},
			{
				"title": "NYC Winter Vacation",
				"startdate": "4/17/19",
				"enddate": "4/22/19",
				"description": "5 days traveling around the Big Apple",
				"plan":{
					"event": "touring", 
					"time": "9am", 
					"location": "Liberty Bell", 
					"description": "guide tour of local buildings"}
			},
			{
				"title": "LA daytrip",
				"startdate": "7/21/19",
				"enddate": "7/26/19",
				"description": "Convention Center and Chinatown",
				"plan":{
					"event": "K-Con", 
					"time": "1pm", 
					"location": "LACC",
					"description": "buying merchandise"
				}
			},
			{
				"title": "Mexico weekend 1/2",
				"startdate": "12/16/19",
				"enddate": "12/17/19",
				"description": "Guadalajara, Mexico City, Matzalan",
				"plan":{
					"event": "Guadalajara", 
					"time": "10am", 
					"location": "Uncle's house", 
					"description": "meeting the family"
				}
			}
	]
});
};