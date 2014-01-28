ko.bindingHandlers.limitCharacters3 = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel)
    {
    	console.log(ko.unwrap(allBindingsAccessor.get('value')));
        var allowedNumberOfCharacters = valueAccessor();
        var currentValue = allBindingsAccessor.get('value');
        var cutText = ko.unwrap(currentValue).substr(0, allowedNumberOfCharacters);
        currentValue(cutText);
    }
};


ko.bindingHandlers.limitCharacters = {
    update: function(element, valueAccessor, allBindingsAccessor, viewModel)
    {
    	console.log(allBindingsAccessor().value());
      element.value = element.value.substr(0, valueAccessor());
      allBindingsAccessor().value(element.value.substr(0, valueAccessor()));
    }
};