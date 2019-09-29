(function check_phone() {
   document.getElementById('phone').addEventListener("keyup", function() {
        
        if (this.value.length==1 || this.value.length==5) {
            
            this.value = this.value + " ";
            
        } else if (this.value.length == 9 || this.value.length == 12) {
           
            this.value = this.value + "-";
        }
    });

})();



function validateNonEmpty(inputField, helpText) {
    if(helpText.id == "phone_help" && inputField.value.length < 15) {
        
        if(helpText != null)
            helpText.innerHTML = "Укажите правильный телефон";
            return false;
    }
    else if(inputField.value.length == 0) {
        if(helpText != null)
            helpText.innerHTML = "Необходимо заполнить";
            return false;
    }
    else if (helpText != null) {
        helpText.innerHTML = "";
        return true;
    }
}



