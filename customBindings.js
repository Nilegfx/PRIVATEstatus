ko.bindingHandlers.limitCharacters = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel)
    {
    	console.log(ko.unwrap(allBindingsAccessor.get('value')));
        var allowedNumberOfCharacters = valueAccessor();
        var currentValue = allBindingsAccessor.get('value');
        var cutText = ko.unwrap(currentValue).substr(0, allowedNumberOfCharacters);
        currentValue(cutText);
    }
};