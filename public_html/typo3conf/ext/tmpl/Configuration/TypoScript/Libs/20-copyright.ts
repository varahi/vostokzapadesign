
lib.copyright = COA
lib.copyright {
    10 = TEXT
    10.wrap = <div class="footer__worldwide">|</div>
    10.value = {$config.footer.copyright}

    20 = TEXT
    20 {
        value = {$config.footer.developerText}
        stdWrap {
            wrap = |
            typolink {
                parameter = {$config.footer.developerLink}
                ATagParams = class="footer__link"
                extTarget = _blank
            }
        }
    }
}