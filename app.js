var ViewModel = function(idx, name, title){
	var self = this;
	$.extend( self,{
		id : ko.observable(idx),
		name : ko.observable(name),
		title : ko.observable(title),
	});
	// self.id = ko.observable(idx);
	// self.name = ko.observable(name);
	// self.title = ko.observable(title);

	self.message = ko.computed(function(){
		return "this is a computed value for the name "	+ this.name() + " which has the Id of: " + this.id();
	},this);
}


var sd = {};

searchViewModel = new ViewModel(1,"search Name","seach title");
profileViewModel = new ViewModel(2,"profile Name","seach title");

var Status = function(){
		var self = this;
		this.editMode = ko.observable(false),
		this.currentStatus = ko.observable(" "),
		this.remainingChars = ko.computed(function(){
			return (140 - this.currentStatus().length);
		},self);
		this.get = function(){},
		this.edit = function(a){
			self.editMode(true);
			if(self.currentStatus() == " "){
				self.currentStatus("");
			}
		},
		this.save = function(){
			self.editMode(false);
		},
		this.cancel = function(){
			self.editMode(false);
		}
	};

profileViewModel.status = new Status();



ko.applyBindings(searchViewModel,document.getElementById("searchView"));
ko.applyBindings(profileViewModel,document.getElementById("profileView"));
