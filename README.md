Off-Canvas-Bootstrap-Navigation
================
How to use:
------------
Add or copy the style.css content or link to the file from your html.
-->[CSS File](https://github.com/jycr753/Off-Canvas-Bootstrap-Navigation/blob/master/layout.css)

```html
<link rel="stylesheet" type="text/css" href="path/to/file/layout.css">
```

You also need to include [https://github.com/jycr753/Off-Canvas-Bootstrap-Navigation/blob/master/js/app.js](app.js) or just copy paste this small snippet.

```javascript
document.addEventListener('DOMContentLoaded', function(){
	var nav_trigger = document.getElementById("nav-trigger");
	nav_trigger.addEventListener("click", function(){
		var col_nav = document.getElementById("col-nav"),
		active_class = "col-nav-active";
		nav_trigger.checked ? col_nav.classList.add(active_class) : col_nav.classList.remove(active_class);
	});
});
```

This part does has not depencies, but for the design it will work a lot better if you have [bootstrap](http://getbootstrap.com/) and jQuery.

HTML:

```html
<ul class="navigation" id="col-nav">
	<li class="nav_item"><a href="#">...</a></li>
	.....
 </ul>
 <input type="checkbox" id="nav-trigger" class="nav-trigger" />
 <label for="nav-trigger"></label>	
 <div class="col-site-content">
	 <!-- Your content here -->
 </div>
```

Off Canvas Navigation Samples
------------

![alt tag](https://github.com/jycr753/Sliding-Menu-CSS/blob/master/assets/white_close.png)
================
![alt tag](https://github.com/jycr753/Sliding-Menu-CSS/blob/master/assets/white_open.png)


Support
------------

Browser  | Support
------------- | -------------
|Chrome 38  | True |
|Safari 7  | True |
|Firefox  | True |
|IE < 10  | False |


TODO
------------

- [x] Add Smoother Animations
- [x] All Browser Support
- [x] Intagration with bootstrap
- [ ] Extension for wordpress
- [ ] clean


License
-------

	Copyright 2014 Jorge Rodriguez(jycr753)

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	   http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
