lib.footerSocial = COA
lib.footerSocial {
    wrap = <div class="footer-social">|</div>
    10 = TEXT
    10 {
        value = &nbsp;
        typolink {
            wrap = <div>|</div>
            ATagParams = class="social__item social-fb"
            parameter = {$config.navigation.facebookLink}
            extTarget = _blank
        }
    }
    20 = TEXT
    20 {
        value = &nbsp;
        typolink {
            wrap = <div>|</div>
            ATagParams = class="social__item social-vk"
            parameter = {$config.navigation.vkLink}
            extTarget = _blank
        }
    }
    30 = TEXT
    30 {
        value = &nbsp;
        typolink {
            wrap = <div>|</div>
            ATagParams = class="social__item social-yt"
            parameter = {$config.navigation.youtubeLink}
            extTarget = _blank
        }
    }
}