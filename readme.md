#Twinkling Stars Effect

This is a simple script I wrote combining jQuery, Javascript, and some CSS3 Animations.  I wanted this effect for my [portfolio](https://www.dannyarango.com "My Portfolio") since it is space themed and I am quite pleased with how this came out!  You can check out the script [at this repository](../master/scripts.js) but I will go through it here:

```javascript
$(document).ready(function(){
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
```

It's a very simple algorithm for randomly generating stars, and their positions.  Essentially we grab a div (the one with a class of "head-space") and inject all the random stars into it.  What you don't see is in the [CSS file](../master/css/styles.css) I have three different kinds of stars. Here is one example:

```css
.star-type1{
        width: 1px;
        height: 1px;
        border-radius: 2px;
        -webkit-box-shadow: 0 0 1px 1px #A6B0D2;
                box-shadow: 0 0 1px 1px #A6B0D2;
        -webkit-animation: star1 3s ease-in-out infinite;
           -moz-animation: star1 3s ease-in-out infinite;
             -o-animation: star1 3s ease-in-out infinite;
                animation: star1 3s ease-in-out infinite;
      }
```

This variable `var star = Math.floor((Math.random() * 3) + 1);` is responsible for randomly generating numbers 1-3.  Each number correlates to CSS class `'<div class="star star-type' + star + '"></div>'` and you can see how they're being dynamically assigned.  The stars are given a position of absolute so we can define their exact x and y coordinates, which are generated randomly:  `var xPos = ($space.width()/2.5) * Math.random(), var yPos = $space.height() * Math.random();`  I divided the width by 2.5 to make the stars only appear within the image I used and I am sure I can refactor this code to accept the image width and height as the appropriate area to fill with stars, but cest' la' vie.  On my portfolio I actually divide the height by a number because the photo the stars are appearing on includes land and sky.  The final step is simply to give each star it's own x and y coordinates `.appendTo($space).css({ "top" : yPos, "left" : xPos });` and it's done!  

One final aesthetic I discovered was that by choosing a light color that is already present in the photo and making the stars that color as opposed to white, it creates a much more pleasing and realistic effect.  

###Be sure to check out this specific experimentation at: <www.dannyarango.com/nightsky> or go to [my portfolio](https://www.dannyarango.com "My Portfolio") to see it in action in a different way!
