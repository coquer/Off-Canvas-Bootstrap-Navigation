Sliding-Menu-CSS
================
<h3>How to use:</h3>
Add or copy to your style sheet style.css
```html
<link rel="stylesheet" type="text/css" href="path/to/file/layout.css">
```

also include app.js or just copy paste this small snippet.

```javascript
   document.addEventListener('DOMContentLoaded', function(){
	var nav_trigger = document.getElementById("nav-trigger");
	nav_trigger.addEventListener("click", function(){
		var col_nav = document.getElementById("col-nav"),
		active_class = "col-nav-active";
		if (nav_trigger.checked){
			col_nav.classList.add(active_class);
		}else{
			col_nav.classList.remove(active_class);
		}
	});
});
```

This part does has not depencies, but for the design it will work a lot better if you have [http://getbootstrap.com/](bootstrap) and jQuery.

Now the HTML:

```html
<ul class="navigation" id="col-nav">
	<li class="nav_item"><a href="#">...</a></li>
	.....
 </ul>
 <input type="checkbox" id="nav-trigger" class="nav-trigger" />
 <label for="nav-trigger"></label>	
 <div class="col-site-content">
	 <!-- You content here -->
 </div>
```

<h5>Simple SASS/CSS slide Navigation</h5>

![alt tag](https://github.com/jycr753/Sliding-Menu-CSS/assets/white_close.png)
================
![alt tag](https://github.com/jycr753/Sliding-Menu-CSS/assets/white_open.png)
Browser  | Support
------------- | -------------
|Chrome 38  | True |
|Safari 7  | True |
|Firefox  | True |
|IE < 10  | False |

<h3>TODO</h3>

- [x] Add Smoother Animations
- [x] All Browser Support
- [x] Intagration with bootstrap
- [ ] Extension for wordpress
- [ ] clean

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
