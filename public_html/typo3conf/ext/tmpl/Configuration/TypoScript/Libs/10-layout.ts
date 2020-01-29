lib.layout.logo.url = TEXT
lib.layout.logo.url.value = {$config.navigation.startPageUid}

lib.preloader = COA
lib.preloader {
    wrap = <div class="preloader">|</div>
    10 = IMAGE
    10 {
        file = EXT:tmpl/Resources/Public/img/loader_fuchs.gif
        altText = preloader
        #file.width = 350
        #file.height = 150
    }
}