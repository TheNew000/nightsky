$(document).ready(function(){
    // Twinkling Star Generator:
    var populateSky = function(space){  
        var $space = $(space);
        var counter = 0;
        // This generates 150 stars varying from the three different types of stars 
        while (counter < 150){
            var star = Math.floor((Math.random() * 3) + 1);
            var xPos = ($space.width()/2.5) * Math.random();
            var yPos = $space.height() * Math.random();
            $('<div class="star star-type' + star + '"></div>').appendTo($space).css({
                "top" : yPos,
                "left" : xPos
            });            
            counter++;
        }        
    };
    populateSky(".head-space");  
});

