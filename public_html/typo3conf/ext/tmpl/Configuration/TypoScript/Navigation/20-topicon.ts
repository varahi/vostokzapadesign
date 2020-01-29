lib.topIcon = IMAGE
lib.topIcon {
    file = EXT:tmpl/Resources/Public/img/icon.png
	wrap = <div class="md-hidden">|</div>

     //In constants
     altText = {$config.header.logoTitle}
     titleText = {$config.header.logoTitle}
     // If you want to set width and height
     #file.width = 470
     #file.height = 80
     // If will be link
     #stdWrap.typolink.parameter = 42
     #stdWrap.wrap = |
     #stdWrap.typolink.title = {$config.header.logoTitle}
   }